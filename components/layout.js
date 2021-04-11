import Footer from './footer';
import HeaderLarge from './header';
import Nav from './nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <HeaderLarge />
      {children}
      <Footer />
    </>
  );
}
