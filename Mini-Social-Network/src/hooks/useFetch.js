import { useState } from 'react';
import Cookies from 'js-cookie';
import { API_BASE_URL } from 'config';

const useFetch = (withAuth = false) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const headers = { 'Content-Type': 'application/json' };
    if (withAuth) {
        headers.Authorization = `Bearer ${Cookies.get('auth-token')}`;
    }

    const get = async (path) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}${path}`, {
                method: 'get',
                headers,
            });

            if (response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.message[0].messages[0].message || 'Unknown error');
            }

            const responseData = await response.json();
            setData(responseData);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    const post = async (path, postData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}${path}`, {
                method: 'post',
                headers,
                body: JSON.stringify(postData),
            });

            if (response.status !== 200) {
                const errorData = await response.json();
                throw new Error(errorData.message[0].messages[0].message || 'Unknown error');
            }

            const responseData = await response.json();
            setData(responseData);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        data,
        error,
        isLoading,
        get,
        post,
    };
};

export default useFetch;
