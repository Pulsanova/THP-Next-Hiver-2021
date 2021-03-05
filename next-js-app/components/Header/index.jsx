import styles from './index.module.scss';
import Link from 'next/link';

const Header = () => (
    <header className={styles.Header}>
        <ul>
            <li>
                <Link href="/">
                    Accueil
                </Link>
            </li>
            <li>
                <Link href="/posts">
                    Articles
                </Link>
            </li>
            <li>
                <Link href="/about">
                    À propos
                </Link>
            </li>
        </ul>
    </header>
);

export default Header;
