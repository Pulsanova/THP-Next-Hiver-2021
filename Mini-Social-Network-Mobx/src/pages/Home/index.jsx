import './index.scss';
import { observer } from 'mobx-react';
import PostsList from 'components/PostsList';
import userStore from 'stores/user';

const Home = () => {
    const { isLogged } = userStore;

    return (
        <div className="Home">
            <h2 className="Home__title">Welcome!</h2>
            {!isLogged && (
                <p className="Home__welcome-message">Please sign-in to see all posts.</p>
            )}
            {isLogged && <PostsList />}
        </div>
    );
};

export default observer(Home);
