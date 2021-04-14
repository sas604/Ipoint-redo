import styled from 'styled-components';
import Link from 'next/link';
import { GrFacebook, GrInstagram, GrLinkedin, GrTwitter } from 'react-icons/gr';
import { BsEnvelope, BsMap, BsPhone } from 'react-icons/bs';

const FooterStyles = styled.footer`
  margin-top: 13.5rem;
  padding: 4.5rem 1.5rem 1.5rem;
  background-color: var(--dark-blue);
  display: flex;
  flex-wrap: wrap;
  color: var(--light-gray);
  > * {
    flex: 3 350px;
  }
  ul {
    padding: 0;
    list-style: none;
    a {
      display: flex;
      align-items: center;
      color: var(--light-gray);
      text-decoration: none;
      * + * {
        margin-left: 1rem;
      }
      :hover {
        color: var(--red);
      }
    }
  }
  .social {
    padding: 0;
    display: flex;
    font-size: 1.85rem;
    justify-content: center;
    * + * {
      margin-left: 1.5rem;
    }
  }
  .copyright {
    margin-top: 1.5rem;
    text-align: center;
    flex: 100%;
  }
  addres {
    svg {
      font-size: 1.3rem;
    }
  }
`;
const date = new Date();
const Footer = () => (
  <FooterStyles>
    <ul className="social">
      <li>
        <a aria-label="linkedin" href="https://www.linkedin.com">
          <GrLinkedin />
        </a>
      </li>
      <li>
        <a aria-label="instagram" href="https://www.instagram.com/">
          <GrInstagram />
        </a>
      </li>

      <li>
        <a aria-label="twitter" href="https://www.twitter.com/">
          <GrTwitter />
        </a>
      </li>
      <li>
        <a aria-label="facebook" href="https://www.facebook.com/">
          <GrFacebook />
        </a>
      </li>
    </ul>
    <address>
      <h2>Contacts</h2>
      <ul>
        <li>
          <a
            href="mailto:someone@example.com?Subject=Hello%20again"
            target="_top"
          >
            <BsEnvelope />
            <span> info@ipoint.com</span>
          </a>
        </li>
        <li>
          <a href="tel:123-456-7890">
            <BsPhone />
            <span>(619) 555-1212</span>
          </a>
        </li>
        <li>
          <a href="https://goo.gl/maps/Kcvoi8PRZbYVf5iF9">
            <BsMap />
            <span>
              iPoint Advisors 5555 The Long Road, Suite 1000 San Diego, CA 92101
            </span>
          </a>
        </li>
      </ul>
    </address>

    <div className="copyright">
      <span>All rigths reserved &#169;{date.getFullYear()} </span>
    </div>
  </FooterStyles>
);

export default Footer;
