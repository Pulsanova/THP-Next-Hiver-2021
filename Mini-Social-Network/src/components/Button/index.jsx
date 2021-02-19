import './index.scss';

const Button = (props) => {
    const {
        children,
        onClick,
        isSubmit = false,
        isLoading = false,
    } = props;

    return (
        <button
            className="Button"
            type={isSubmit ? 'submit' : 'button'}
            onClick={onClick}
        >
            {isLoading && 'Loading...'}
            {!isLoading && children}
        </button>
    );
};

export default Button;
