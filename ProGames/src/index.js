import './style/_index.scss';

import routes from './routes';
import SearchInputForm from './Components/SearchInputForm';

const appElement = document.getElementById('app');

const setRoute = () => {
    const path = window.location.hash.substring(1).split("/");

    const pageName = path[0] || "";
    const pageArgument = path[1] || undefined;

    appElement.innerHTML = '';

    if (!Object.keys(routes).includes(pageName)) {
        routes.notFound(appElement);
        return;
    }

    routes[pageName](appElement, pageArgument);
};

const initSearchInputForm = () => {
    const headerElement = document.querySelector('.Header');
    headerElement.innerHTML += SearchInputForm();
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => {
    initSearchInputForm();
    setRoute();
});
