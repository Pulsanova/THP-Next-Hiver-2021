import Link from 'next/link';
import Page from '../../components/Page';

/*
 * Construct dynamic routing from data
 */
export const getStaticPaths = async () => {
    const allPosts = (await import('../../data/posts.json')).default;

    const paths = allPosts.map(({ id }) => (
        { params: { id: `${id}` } }
    ));

    return { paths, fallback: false };
};

/*
 * Construct Props from dynamic routing
 */
export const getStaticProps = async ({ params }) => {
    const allPosts = (await import('../../data/posts.json')).default;

    const post = allPosts.find(({ id }) => params?.id === `${id}`);

    return {
        props: { post },
    }
};


/*
 * Render page component using props defined in getStaticProps()
 */
const PostItem = ({ post }) => (
    <Page title={`Article #${post.id}`}>
        <h3>Voici la page du post #{post.id} écrit par {post.author}</h3>
        <p>{post.content}</p>
        <Link href="/posts">Retour à la liste des articles</Link>
    </Page>
);

export default PostItem;
