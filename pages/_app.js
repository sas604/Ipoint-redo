import Typography from '../styles/typography';
import GlobalStyles from '../styles/global';
import 'normalize.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
