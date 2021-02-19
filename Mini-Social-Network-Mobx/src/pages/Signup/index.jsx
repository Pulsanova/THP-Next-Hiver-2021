import './index.scss';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from 'stores/user/actions';
import useFetch from 'hooks/useFetch';
import Input from 'components/Input';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';

const Signup = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state) => state);

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
        const createUserData = {
            username: event.target.username.value,
            email: event.target.email.value,
            password: event.target.password.value,
        };
        post('/auth/local/register', createUserData);
    };

    useEffect(() => {
        if (data && data.jwt && data.user) {
            dispatch({ type: LOGIN, data });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return (
        <form className="Signup" onSubmit={handleSubmit}>
            <h2>Create new account</h2>
            <p>
                Your name:<br />
                <Input type="text" name="username" />
            </p>
            <p>
                Your e-mail:<br />
                <Input type="email" name="email" />
            </p>
            <p>
                Choose a password:<br />
                <Input type="password" name="password" />
            </p>
            <p>
                <Button isSubmit isLoading={isLoading}>Create me</Button>
            </p>
            {error && <ErrorMessage message={error} />}
        </form>
    );
};

export default Signup;
