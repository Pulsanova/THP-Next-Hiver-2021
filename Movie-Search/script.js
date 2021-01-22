const moviesListElement = document.querySelector('.movies-list');
const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
const modalBody = document.querySelector('.modal-body');

const isApiAvailable = typeof API_KEY !== 'undefined';

if (!isApiAvailable) {
    moviesListElement.innerHTML = `
        <p class="alert alert-danger">
            Il manque la clé d'API !<br />
            La recherche ne fonctionnera pas.
        </p>
    `;
    document.querySelector('.search-input').disabled = true;
    document.querySelector('.search-button').disabled = true;
}

const apiBaseUrl = isApiAvailable ? `https://www.omdbapi.com/?apikey=${API_KEY}` : null;

// ------------------------------------------------------
// -
// -    Fonctions d'affichage des données
// -
// ------------------------------------------------------

const displayMovieItem = (itemData) => {
    const { Title, Poster, Year, imdbID } = itemData;
    const imageUrl = Poster === 'N/A' ? './no-poster.jpg' : Poster;
    moviesListElement.innerHTML += `
        <div class="movie-card">
            <img class="movie-card__image" src="${imageUrl}" alt="${Title}">
            <div class="movie-card__body">
                <h3 class="movie-card__title">${Title}</h3>
                <p class="movie-card__date">Sorti en ${Year}</p>
                <button class="btn btn-primary" onclick="openMovieDetails('${imdbID}')">
                    Voir les détails
                </button>
            </div>
        </div>
    `;
};

const displayFoundMovies = (foundMovies) => {
    if (!foundMovies?.Search || foundMovies.Search.length === 0) {
        moviesListElement.innerHTML = `
            <p class="alert alert-info">Aucun film trouvé, cherchez autre chose !</p>
        `;
        return;
    }

    moviesListElement.innerHTML = '';
    foundMovies.Search.forEach(displayMovieItem);

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((element) => {
                if (element.intersectionRatio > 0.1) {
                    element.target.classList.add('movie-card--displayed');
                } else {
                    element.target.classList.remove('movie-card--displayed');
                }
            });
        },
        { threshold: [0.1] }
    );

    document.querySelectorAll('.movie-card').forEach((item) => {
        observer.observe(item);
    });
};

const displayMovieDetails = (movie) => {
    if (!movie) {
        modalBody.innerHTML = `
            <p class="alert alert-danger">Film introuvable, veuillez réessayer.</p>
        `;
        return;
    }

    const { Title, Plot, Poster } = movie;
    const imageUrl = Poster === 'N/A' ? './no-poster.jpg' : Poster;
    modalBody.innerHTML = `
        <img class="movie-details__image" src="${imageUrl}" alt="${Title}">
        <h2>${Title}</h2>
        <p>${Plot}</p>
    `;
};

// ------------------------------------------------------
// -
// -    Fonctions appelées par l'utilisateur
// -
// ------------------------------------------------------

const search = async (event) => {
    event.preventDefault();
    if (!apiBaseUrl) {
        return;
    }

    moviesListElement.innerHTML = `<p class="alert">Recherche de votre film...</p>`;
    const { value } = document.searchForm.searchBar;
    const searchTerm = encodeURIComponent(value.trim());

    try {
        const response = await fetch(`${apiBaseUrl}&s=${searchTerm}`);
        const data = await response.json();
        displayFoundMovies(data);
    } catch(error) {
        console.error(error);
        moviesListElement.innerHTML = `
            <p class="alert alert-danger">Une erreur est survenue...</p>
        `;
    }
};

const openMovieDetails = (id) => {
    if (!apiBaseUrl) {
        return;
    }

    movieModal.show();
    modalBody.innerHTML = `<p class="alert">Chargement des données du film...</p>`;

    fetch(`${apiBaseUrl}&i=${id}`)
        .then((response) => response.json())
        .then(displayMovieDetails)
        .catch(() => {
            moviesListElement.innerHTML = `
                <p class="alert alert-error">Une erreur est survenue...</p>
            `;
        });
};
