import './index.scss';
import dayjs from 'dayjs';
import { API_URL, PAGE_SIZE } from '../../config';
import GameCard from '../../Components/GameCard';
import Button from '../../Components/Button';

const PageList = (appElement) => {
    let currentPage = 1;
    let currentSearchTerm = '';
    let currentPlatform = 'all';
    let articles = [];
    let isFetching = false;
    const maxPage = 3;

    const fetchGames = () => {
        if (currentPage > maxPage) {
            return;
        }

        const dateStart = dayjs().subtract(1, 'month');
        const dateEnd = dayjs().add(1, 'month');
        const dates = `${dateStart.format('YYYY-MM-DD')},${dateEnd.format('YYYY-MM-DD')}`;

        const url = `${API_URL}/games?ordering=-released&page_size=${PAGE_SIZE}&page=${currentPage}`;
        let finalUrl = `${url}&dates=${dates}`;
        if (currentSearchTerm) {
            finalUrl = `${url}&search=${currentSearchTerm}`;
        }
        if (currentPlatform !== 'all') {
            finalUrl = `${finalUrl}&platforms=${currentPlatform}`;
        }

        isFetching = true;

        fetch(finalUrl)
            .then((response) => response.json())
            .then((data) => {
                handleFetchResults(data);
                isFetching = false;
            })
            .catch((error) => {
                renderPageContent(`<p class="PageList__error type-error">${error.message}</p>`);
            });
    };

    const fetchPlatforms = (selectElement) => {
        fetch(`${API_URL}/platforms`)
            .then((response) => response.json())
            .then((data) => {
                const { results } = data;
                if (!results || results.length === 0) {
                    return;
                }

                results.forEach(({ id, name }) => {
                    const optionElement = document.createElement('option');
                    optionElement.value = id;
                    optionElement.text = `Platform: ${name}`;
                    selectElement.add(optionElement);
                });
            })
            .catch((error) => {
                renderPageContent(`<p class="PageList__error type-error">${error.message}</p>`);
            });
    };

    const handleFetchResults = (data) => {
        const hasResults = data.results && data.results.length > 0;
        if (!hasResults && articles.length === 0) {
            throw new Error('No result Found!');
        }

        if (hasResults) {
            articles = [...articles, ...data.results];
        }

        renderGamesCards(data?.next !== null);
    };

    const handleSearch = (event) => {
        event.preventDefault();

        const { value } = document.getElementById('searchInput');
        const searchTerm = value.trim().replace(/\s+/g, '-');

        if (searchTerm !== currentSearchTerm) {
            currentSearchTerm = searchTerm;
            resetArticles();
        }

        fetchGames();
    };

    const handleSelectPlatform = (event) => {
        currentPlatform = event.currentTarget.value;
        resetArticles();
        fetchGames();
    };

    const handleClickLoadMore = (event) => {
        if (isFetching) {
            return;
        }
        const button = event.currentTarget;
        button.innerHTML = 'Loading...';
        currentPage += 1;
        fetchGames();
    };

    const clearMoreButtonEvent = () => {
        const loadMoreButton = document.getElementById('loadMoreGames');
        if (loadMoreButton) {
            loadMoreButton.removeEventListener('click', handleClickLoadMore);
        }
    };

    const bindMoreButtonEvent = () => {
        const loadMoreButton = document.getElementById('loadMoreGames');
        if (loadMoreButton) {
            loadMoreButton.addEventListener('click', handleClickLoadMore);
            loadMoreButton.innerHTML = 'Load more games';
        }
    };

    const bindHoveringCards = () => {
        const gameCardsElements = document.querySelectorAll('.GameCard');
        gameCardsElements.forEach((gameCard) => {
            gameCard.addEventListener('mouseenter', () => {
                gameCard.classList.add('GameCard--with-details');
            });
            gameCard.addEventListener('mouseleave', () => {
                gameCard.classList.remove('GameCard--with-details');
            });
        });
    };

    const renderPageContent = (content) => {
        const contentElement = document.querySelector('.PageList__content');
        contentElement.innerHTML = content;
    };

    const resetArticles = () => {
        currentPage = 1;
        articles = [];
        renderPageContent('<p class="PageList__loading">Loading, please wait...</p>');
    }

    const renderGamesCards = (hasMorePages) => {
        clearMoreButtonEvent();

        renderPageContent(`
            <ul class="PageList__games">
                ${articles.map((game) => GameCard(game)).join('')}
            </ul>
            ${(hasMorePages && currentPage < maxPage)
                ? `<div class="type-center margin-lg margin-y">
                        ${Button('loadMoreGames', 'Load more games', 'primary')}
                    </div>`
                : ''}
        `);

        bindMoreButtonEvent();
        bindHoveringCards();
    };

    const initPage = () => {
        appElement.innerHTML = `
            <div class="PageList">
                <div class="PageList__hero">
                    <h2 class="PageList__hero__title">Welcome,</h2>
                    <p class="PageList__hero__text">
                        The Hyper Progame is the world’s premier event for computer and video games
                        and related products. At The Hyper Progame, the video game industry’s top
                        talent pack the Los Angeles Convention Center, connecting tens of thousands
                        of the best, brightest, and most innovative in the interactive entertainment
                        industry. For three exciting days, leading-edge companies, groundbreaking new
                        technologies, and never-before-seen products will be showcased. The Hyper
                        Progame connects you with both new and existing partners, industry executives,
                        gamers, and social influencers providing unprecedented exposure.
                    </p>
                    <select id="platformSelect" class="PageList__hero__platform-select">
                        <option value="all">Platform: Any</option>
                    </select>
                </div>
                <div class="PageList__content"></div>
            </div>
        `;

        const platformSelectElement = document.getElementById('platformSelect');
        fetchPlatforms(platformSelectElement);
        platformSelectElement.addEventListener('change', handleSelectPlatform);

        const searchFormElement = document.getElementById('searchForm');
        searchFormElement.addEventListener('submit', handleSearch);

        resetArticles();
        fetchGames();
    };

    initPage();
};

export default PageList;
