import styled from 'styled-components';

const FooterStyles = styled.footer`
  margin-top: 4.5rem;
  background-color: var(--dark-blue);
`;

const Footer = () => (
  <FooterStyles>
    <div>
      <p>Insta</p>
      <p>Insta</p>
      <p>Insta</p>
    </div>
    <div>
      <p>address</p>
    </div>
    <div>
      <h2>Site Map</h2>
    </div>
    <div>
      <p>copy</p>
    </div>
  </FooterStyles>
);

export default Footer;
