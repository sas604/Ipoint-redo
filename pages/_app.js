import Typography from '../styles/typography';
import 'normalize.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Typography />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
