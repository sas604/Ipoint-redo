import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
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
    line-height: 2.25rem;
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
`;

const BigNavStyles = styled.nav`
  position: absolute;
  top: 3.8rem;
  right: 1.5rem;
  display: flex;
  gap: 1.5rem;
  a {
    color: var(--light-gray);
    text-transform: uppercase;
    text-decoration: none;
    z-index: 2;
    &:hover {
      color: var(--red);
    }
  }
`;
const Nav = () => {
  const { pathname } = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const resize = () => setWindowWidth(window.innerWidth);
  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });
  const props = useSpring({
    x: navOpen ? '-100%' : '0%',
  });
  const opacity = useSpring({
    opacity: navOpen ? 1 : 0,
    delay: navOpen ? 200 : 0,
  });
  useEffect(() =>
    navOpen
      ? document.body.classList.add('fixed')
      : document.body.classList.remove('fixed')
  );
  if (windowWidth > 700) {
    return (
      <BigNavStyles>
        <Link href="/" scroll>
          <a className={pathname === '/' ? 'active' : ''}>Who we are</a>
        </Link>
        <Link href="/services" scroll>
          <a className={pathname === '/services' ? 'active' : ''}>What We Do</a>
        </Link>
        <Link href="/blog">
          <a className={pathname === '/blog' ? 'active' : ''}>Blog & News</a>
        </Link>
        <Link href="/contact">Contacts</Link>
      </BigNavStyles>
    );
  }
  return (
    <>
      <Burger open={navOpen} setNavOpen={setNavOpen} />
      <NavStyles style={props}>
        <animated.div style={opacity}>
          <Link href="/">
            <a className={pathname === '/' ? 'active' : ''}>Who we are</a>
          </Link>

          <Link scroll={false} href="/services">
            What we do
          </Link>
          <Link scroll={false} href="/blog">
            Blog & News
          </Link>
          <Link scroll={false} href="/contact">
            Contacts
          </Link>
        </animated.div>
      </NavStyles>
    </>
  );
};

export default Nav;
