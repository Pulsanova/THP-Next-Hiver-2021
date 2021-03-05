import '../styles/globals.css';
import Layout from '../components/Layout';

const _App = ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);

export default _App;
