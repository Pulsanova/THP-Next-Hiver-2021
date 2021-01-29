import './index.scss';
import dayjs from 'dayjs';

const GameCard = (gameData) => {
    const {
        id,
        name,
        background_image,
        released,
        platforms,
        rating,
        ratings_count,
        tags,
    } = gameData;

    const releaseDate = dayjs(released).format('MMM DD, YYYY');

    const image = background_image
        ? `<img src="${background_image}" alt="${name}" class="GameCard__image__img" />`
        : ``;

    const tagsList = tags?.map(({ name }) => name).join(', ');

    const platformsList = (platforms || []).map(({ platform }) => `
        <li class="GameCard__platforms__item">${platform.name}</li>
    `).join('');

    return `
        <li class="GameCard card">
            <a href="#detail/${id}">
                <div class="GameCard__image">${image}</div>
                <div class="GameCard__details">
                    <p>${releaseDate}</p>
                    <p>${rating}/5 - ${ratings_count} votes</p>
                    <p class="GameCard__details__tags">${tagsList}</p>
                </div>
                <div class="card__content">
                    <h3 class="GameCard__name">${name}</h3>
                    <ul class="GameCard__platforms">${platformsList}</ul>
                </div>
            </a>
        </li>
    `;
};

export default GameCard;


