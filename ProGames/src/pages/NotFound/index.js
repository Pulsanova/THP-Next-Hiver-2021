import './index.scss';

const NotFound = (appElement) => {
    appElement.innerHTML = `
        <div class="NotFound">
            <p>This page does not exist.</p>
            <a href="#">Back to home</a>
        </div>
    `;
};

export default NotFound;
