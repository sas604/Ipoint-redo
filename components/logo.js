import styled from 'styled-components';
import ReactLogo from '../public/logo-large-white.svg';

const LogoStyles = styled.div`
  width: clamp(150px, 20vw, 200px);
`;
const Logo = () => (
  <LogoStyles>
    <ReactLogo />
  </LogoStyles>
);

export default Logo;
