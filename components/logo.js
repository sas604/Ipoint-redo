import styled from 'styled-components';
import ReactLogo from '../public/logo-large-white.svg';

const LogoStyles = styled.div`
  max-width: 300px;
`;
const Logo = () => (
  <LogoStyles>
    <ReactLogo />
  </LogoStyles>
);

export default Logo;
