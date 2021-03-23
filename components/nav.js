import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import Burger from './burger';

const NavStyles = styled(animated.nav)`
  position: absolute;

  top: 0;
  right: -70%;
  width: 70%;
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
  const [navOpen, setNavOpen] = useState(false);
  const props = useSpring({
    x: navOpen ? '-100%' : '0%',
  });
  const opacity = useSpring({
    opacity: navOpen ? 1 : 0,
    delay: navOpen ? 200 : 0,
  });
  return (
    <>
      <Burger open={navOpen} setNavOpen={setNavOpen} />
      <NavStyles style={props}>
        <animated.div style={opacity}>
          <Link href="/">
            <a className={pathname === '/' ? 'active' : ''}>Who we are</a>
          </Link>
          <Link href="/services">What we do</Link>
          <Link href="/blog">Blog & News</Link>
          <Link href="/contact">Contacts</Link>
        </animated.div>
      </NavStyles>
    </>
  );
};

export default Nav;
