import Link from 'next/link';
import Page from '../../components/Page';

export const getStaticProps = async ({ params }) => {
    const posts = (await import('../../data/posts.json')).default;

    return {
        props: { posts },
    }
};

const PostsNoFetch = ({ posts }) => (
    <Page title="Derniers articles (no-fetch)">
        <h1>Liste des derniers articles</h1>
        <h2>(sans fetch !)</h2>
        <Link href="/posts">Essayer AVEC fetching</Link>
        <ul>
            {posts.map(({ id, author, content, date }) => (
                <li key={id}>
                    {author} <small>({date})</small> <Link href={`/posts/${id}`}>Voir le post</Link>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    </Page>
);

export default PostsNoFetch;
