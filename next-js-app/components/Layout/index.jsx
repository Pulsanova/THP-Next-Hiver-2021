import styles from './index.module.scss';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
    <div className={styles.Layout}>
        <Head>
            <title>Atelier Next.js</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className={styles.Layout__main}>
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;
