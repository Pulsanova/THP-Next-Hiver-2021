import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Page from '../components/Page';
import Footer from '../components/Footer';

const Home = () => (
    <Page>
        <h1 className={styles.title}>
            Hello <a href="https://nextjs.org">Next.js</a> world!
        </h1>
        <div className={styles.grid}>
            <Link href="/posts">
                <a className={styles.card}>
                    <h3>Posts</h3>
                    <p>La liste complète de tous les posts.</p>
                </a>
            </Link>
            <Link href="/about">
                <a className={styles.card}>
                    <h3>À propos</h3>
                    <p>En savoir plus sur le SSR ainsi que le SSG</p>
                </a>
            </Link>
        </div>
    </Page>
);

export default Home;
