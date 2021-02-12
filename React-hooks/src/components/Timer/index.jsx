import { useEffect, useRef, useState } from 'react';

const Timer = () => {
    const [time, setTime] = useState(new Date());
    const intervalId = useRef();

    const handleStop = () => {
        clearInterval(intervalId.current);
    };

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId.current);
        }
    }, []);

    return (
        <div className="Timer">
            {time.getHours()}h{time.getMinutes()}:{time.getSeconds()}
            <button type="button" onClick={handleStop}>Stop</button>
        </div>
    );
};

export default Timer;
