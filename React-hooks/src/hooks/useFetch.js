import { useEffect, useState, useCallback } from 'react';

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const fetchStations = useCallback(async () => {
        setIsLoading(true);
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData.records);
        setIsLoading(false);
    }, [url]);

    useEffect(() => {
        fetchStations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { isLoading, data };
};

export default useFetch;
