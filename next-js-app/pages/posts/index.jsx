import Link from 'next/link';
import { useEffect, useState } from 'react';
import Page from '../../components/Page';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('/api/posts');
            const data = await response.json();
            setPosts(data);
        } catch (err) {
            console.log(err);
            setError(err.message);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <Page title="Derniers articles">
            <h1>Liste des derniers articles</h1>
            <h2>(avec fetch sur un API)</h2>
            <Link href="/posts/no-fetch">Essayer SANS fetching (pre-rendered)</Link>
            {isLoading && <p>Chargement...</p>}
            <ul>
                {posts.map(({ id, author, content, date }) => (
                    <li key={id}>
                        {author} <small>({date})</small> <Link href={`/posts/${id}`}>Voir le post</Link>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
            {error && <p>{error}</p>}
        </Page>
    );
};

export default Posts;
