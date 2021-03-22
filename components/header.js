import Image from 'next/image';
import styled from 'styled-components';
import Logo from './logo';
const HeaderWrapperStyles = styled.div`
  height: 50vh;
  position: relative;
  img {
    z-index: -1;
  }
`;

const HeaderLarge = () => (
  <HeaderWrapperStyles>
    <Image
      src="/SanDiegoBay.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="bottom"
    />
    <Logo />
    <nav></nav>
  </HeaderWrapperStyles>
);
export default HeaderLarge;
