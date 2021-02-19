import './index.scss';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react';
import userStore from 'stores/user';
import Button from 'components/Button';

const Header = () => {
    const { user, logout } = userStore;

    const handleLogout = () => {
        logout();
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

export default observer(Header);
