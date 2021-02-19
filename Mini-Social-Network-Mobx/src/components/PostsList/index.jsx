import './index.scss';
import { useEffect } from 'react';
import PostItem from 'components/PostItem';
import useFetch from 'hooks/useFetch';
import ErrorMessage from 'components/ErrorMessage';

const PostsList = () => {
    const {
        data,
        error,
        isLoading,
        get,
    } = useFetch();

    useEffect(() => {
        get('/posts?_sort=created_at:desc');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ul className="PostsList">
            {isLoading && (
                <p className="PostsList__loading">
                    Loading posts, please wait...
                </p>
            )}
            {error && (
                <ErrorMessage message={error} />
            )}
            {data && data.map((post) => (
                <PostItem data={post} key={post.id} />
            ))}
        </ul>
    );
};

export default PostsList;
