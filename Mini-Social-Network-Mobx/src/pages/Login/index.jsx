import './index.scss';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';
import Input from 'components/Input';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import userStore from 'stores/user';

const Login = () => {
    const history = useHistory();
    const {
        user,
        isLoading,
        error,
        login,
    } = userStore;

    useEffect(() => {
        if (user.id !== null) {
            history.push('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const identifier = event.target.email.value;
        const password = event.target.password.value;
        login(identifier, password);
    };

    return (
        <form className="Login" onSubmit={handleSubmit}>
            <h2>Connexion</h2>
            <p>
                Email:<br />
                <Input type="text" name="email" />
            </p>
            <p>
                Password:<br />
                <Input type="password" name="password" />
            </p>
            <p>
                <Button isSubmit isLoading={isLoading}>Lets GO!</Button>
            </p>
            {error && <ErrorMessage message={error} />}
        </form>
    );
};

export default observer(Login);
