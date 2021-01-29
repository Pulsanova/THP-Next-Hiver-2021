import './index.scss';
import { API_URL } from '../../config';

const PageDetail = (appElement, gameId) => {
    const fetchGameData = () => {
        const url = `${API_URL}/games/${gameId}`;
        fetch(url)
            .then((response) => response.json())
            .then(renderGame)
            .catch((error) => {
                renderPageContent(`<p class="PageDetail__error type-error">${error.message}</p>`);
            });
    };

    const renderGame = (data) => {
        if (!data || data.detail) {
            throw new Error('Game not found!');
        }

        const {
            name,
            background_image,
            rating,
            ratings_count,
            description_raw,
        } = data;

        renderPageContent(`
            <img class="PageDetail__image" src="${background_image}" alt="" />
            <div class="PageDetail__hero">
                <h2 class="PageDetail__hero__title">${name}</h2>
                <div class="PageDetail__hero__rating">
                    <p>${rating}/5 - ${ratings_count} votes</p>
                </div>
            </div>
            <h3 class="PageDetail__info-title">Plot</h3>
            <p class="PageDetail__description">${description_raw}</p>
        `);
    };

    const renderPageContent = (content) => {
        const contentElement = document.querySelector('.PageDetail__content');
        contentElement.innerHTML = content;
    };

    const initPage = () => {
        appElement.innerHTML = `
            <div class="PageDetail">
                <a href="#list" class="PageDetail__link-back">< Back to list</a>
                <div class="PageDetail__content">
                    <p class="PageDetail__loading">Loading, please wait...</p>
                </div>
            </div>
        `;

        fetchGameData();
    };

    initPage();
};

export default PageDetail;
