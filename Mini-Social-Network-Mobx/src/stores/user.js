import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import {
    action,
    computed,
    makeObservable,
    observable,
    runInAction,
} from 'mobx';
import { COOKIE_NAME, API_BASE_URL } from 'config';

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

class UserStore {
    user = initialUserData;

    isLoading = false;

    error = null;

    constructor() {
        makeObservable(this, {
            user: observable,
            error: observable,
            isLoading: observable,
            isLogged: computed,
            login: action,
            logout: action,
        });
    }

    get isLogged() {
        return this.user.id !== null;
    }

    login = async (identifier, password) => {
        if (this.isLoading) {
            return;
        }

        try {
            this.error = null;
            this.isLoading = true;

            const response = await fetch(`${API_BASE_URL}/auth/local`, {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ identifier, password }),
            });
            const data = await response.json();

            if (data.error) {
                throw new Error(`Erreur: ${data.error}`);
            }

            Cookies.set(COOKIE_NAME, data.jwt);
            localStorage.setItem('mini-social-network__logged-user-name', data.user.username);

            runInAction(() => {
                this.user = data.user;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error.message;
            });
        } finally {
            this.isLoading = false;
        }
    }

    logout = () => {
        this.user = { id: null, name: null };
        this.error = null;

        Cookies.remove(COOKIE_NAME);
        localStorage.removeItem('mini-social-network__logged-user-name');
    }
}

export default new UserStore();
