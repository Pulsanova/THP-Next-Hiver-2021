import './index.scss';
import { useSelector } from 'react-redux';
import PostsList from 'components/PostsList';

const Home = () => {
    const isLogged = useSelector((state) => state.id !== null);

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

export default Home;
