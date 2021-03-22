import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavStyles = styled.nav`
  position: absolute;
  display: none;
  top: 0;
  width: 100%;
  height: 100vh;
  background: var(--dark-blue);
  z-index: 99;
  padding: 3rem 1.5rem;
  a {
    display: block;
    width: 70%;
    max-width: 300px;
    color: var(--light-gray);
    font-size: 1.235rem;
    text-decoration: none;
  }
  a:not(:first-child) {
    margin-top: 1.5rem;
  }
  .active {
    border-bottom: 2px solid var(--red);
  }
`;
const Nav = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <NavStyles>
      <Link href="/">
        <a className={pathname === '/' ? 'active' : ''}>Who we are</a>
      </Link>
      <Link href="/services">What we do</Link>
      <Link href="/blog">Blog & News</Link>
      <Link href="/contact">Contacts</Link>
    </NavStyles>
  );
};

export default Nav;
