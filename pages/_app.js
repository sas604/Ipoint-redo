import Typography from '../styles/typography';
import GlobalStyles from '../styles/global';
import 'normalize.css';
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
