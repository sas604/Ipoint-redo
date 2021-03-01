import Image from 'next/image';
import styled from 'styled-components';
import ReactLogo from '../public/logo-large-white.svg';

const HeaderWrapperStyles = styled.div`
  height: 50vh;
  overflow: hidden;
  position: relative;
`;

export default function Layout({ children }) {
  return (
    <>
      <HeaderWrapperStyles>
        <Image
          className="hero"
          src="/SanDiegoBay.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <header>
          <ReactLogo />
          <nav />
        </header>
      </HeaderWrapperStyles>
      {children}
      <footer>footer</footer>
    </>
  );
}
