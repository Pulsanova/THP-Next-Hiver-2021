const Button = ({ children, onClick }) => (
    <button type="button" className="Button" onClick={onClick}>
        {children}
    </button>
);

export default Button;
