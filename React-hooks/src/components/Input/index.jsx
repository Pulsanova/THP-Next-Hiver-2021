import { useRef } from "react";

const Input = () => {
    const inputRef = useRef();

    const giveFocus = () => {
        const input = inputRef.current;
        input.focus();
    };

    return (
        <>
            <input className="Input" ref={inputRef} />
            <button type="button" onClick={giveFocus}></button>
        </>
    );
};

export default Input;
