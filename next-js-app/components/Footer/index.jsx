import styles from './index.module.scss';

const Footer = () => (
    <footer className={styles.Footer}>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="Link__img"
        >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.Logo} />
        </a>
    </footer>
);

export default Footer;
