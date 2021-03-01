import Layout from '../components/layout';
import Typography from '../styles/typography';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Typography />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
