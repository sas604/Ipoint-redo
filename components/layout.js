import Head from 'next/head';
import Footer from './footer';
import HeaderLarge from './header';
import Nav from './nav';

export default function Layout({ children, title, category }) {
  return (
    <>
      <Head>
        <title>Ipoint | {title}</title>
      </Head>
      <Nav />
      <HeaderLarge title={title} category={category} />
      {children}
      <Footer />
    </>
  );
}
