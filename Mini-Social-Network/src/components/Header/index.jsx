import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { LOGOUT } from 'stores/user/actions';
import Button from 'components/Button';

const Header = () => {
    const user = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({ type: LOGOUT });
    };

    return (
        <header className="Header">
            <h1 className="Header__title">
                Mini React Social Network
            </h1>
            <nav className="Header__nav">
                <NavLink to="/" exact>Home</NavLink>
            </nav>
            <div className="Header__user">
                {!user.id && (
                    <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Create an account</NavLink>
                    </>
                )}
                {user.id && (
                    <>
                        <span>Hello {user.name}!</span>
                        <Button type="button" onClick={handleLogout}>
                            Log out
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
