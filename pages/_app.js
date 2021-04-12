import Typography from '../styles/typography';
import GlobalStyles from '../styles/global';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
