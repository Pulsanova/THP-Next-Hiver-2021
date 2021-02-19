import { createStore } from 'redux';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { COOKIE_NAME } from 'config';
import { LOGIN, LOGOUT } from './actions';

const getCookieUserId = () => {
    try {
        const jwt = Cookies.get(COOKIE_NAME);
        const { id, exp } = jwtDecode(jwt);
        const now = Date.now() / 1000;
        return (exp >= now) ? id : null;
    } catch (err) {
        return null;
    }
};

const initialUserData = {
    id: getCookieUserId(),
    name: localStorage.getItem('mini-social-network__logged-user-name') || null,
};

const userReducer = (state = initialUserData, payload) => {
    const { type, data } = payload;

    switch (type) {
    case LOGIN:
        if (!data || !data.user) {
            throw new Error('Data for login must not be empty.');
        }
        if (!data.jwt) {
            throw new Error('Missing JWT.');
        }

        Cookies.set(COOKIE_NAME, data.jwt);
        localStorage.setItem('mini-social-network__logged-user-name', data.user.username);

        return {
            id: data.user.id,
            name: data.user.username,
        };
    case LOGOUT:
        Cookies.remove(COOKIE_NAME);
        localStorage.removeItem('mini-social-network__logged-user-name');

        return {
            id: null,
            name: null,
        };
    default:
        return state;
    }
};

export default createStore(userReducer);
