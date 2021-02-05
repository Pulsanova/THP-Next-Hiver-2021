import './index.scss';
import React from 'react';

const Button = (props) => {
    const {
        onClick,
        isSubmit = false,
        disabled = false,
        children,
    } = props;

    return (
        <button
            className="Button"
            type={isSubmit ? 'submit' : 'button'}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
