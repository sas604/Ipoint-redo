import Image from 'next/image';
import styled from 'styled-components';
import Logo from './logo';

const HeaderWrapperStyles = styled.div`
  height: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  *:first-child {
    z-index: -1;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderLarge = () => (
  <HeaderWrapperStyles>
    <Image
      src="/SanDiegoBay.jpg"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      priority
    />
    <div className="logo-wrapper">
      <Logo />
    </div>
    <span className="hero-title">Building Public And Private Partnerships</span>
  </HeaderWrapperStyles>
);
export default HeaderLarge;
