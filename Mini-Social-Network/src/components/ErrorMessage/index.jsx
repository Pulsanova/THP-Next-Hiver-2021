import './index.scss';

const ErrorMessage = (message) => (
    <div className="ErrorMessage">
        {message.message}
    </div>
);

export default ErrorMessage;
