import Image from 'next/image';
import styled from 'styled-components';
import ButtonStyles from '../styles/button';

const ServiceCardStyle = styled.div`
  border: 2px solid var(--red);
  padding: 1.5rem;
  div:first-of-type {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

const ServiceCard = ({ title, icon, desc, category }) => (
  <ServiceCardStyle>
    <div>
      <Image
        width="45"
        height="45"
        alt={icon.fields.title}
        src={`https:${icon.fields.file.url}`}
      />
    </div>
    <h3>{title}</h3>
    <p>{desc}</p>
    <ButtonStyles>Learn More</ButtonStyles>
  </ServiceCardStyle>
);
export default ServiceCard;
