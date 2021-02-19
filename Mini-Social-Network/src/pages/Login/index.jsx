import './index.scss';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from 'stores/user/actions';
import useFetch from 'hooks/useFetch';
import Input from 'components/Input';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';

const Login = () => {
    const user = useSelector((state) => state);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user.id !== null) {
            history.push('/');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const {
        isLoading,
        data,
        error,
        post,
    } = useFetch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginUserData = {
            identifier: event.target.email.value,
            password: event.target.password.value,
        };
        post('/auth/local', loginUserData);
    };

    useEffect(() => {
        if (data && data.jwt && data.user) {
            dispatch({ type: LOGIN, data });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

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

export default Login;
