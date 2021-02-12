import { useCallback, useMemo } from "react";

const SortedList = ({ url, data }) => {
    const sortedData = useMemo(() => {
        return data.sort();
    }, [data]);

    const handleClick = useCallback(async () => {
        const response = await fetch(url);
        const dataResponse = await response.json();
        console.log(dataResponse);
    }, [url]);

    return (
        <div className="SortedList">
            <button type="button" onClick={handleClick}>
                Say hello!
            </button>
            <ul>
                {sortedData.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SortedList;
