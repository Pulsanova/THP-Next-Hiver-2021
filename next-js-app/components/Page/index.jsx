import styles from './index.module.scss';
import classnames from 'classnames';
import Head from 'next/head';

const Page = ({ className, title, children }) => (
    <div className={classnames(styles.Page, className)}>
        {title && <Head><title>{title} − Atelier Next.js</title></Head>}
        {children}
    </div>
);

export default Page;
