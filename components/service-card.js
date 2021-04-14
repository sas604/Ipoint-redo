import Image from 'next/image';
import Link from 'next/link';
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

const ServiceCard = ({ title, icon, desc, category }) => {
  const descPrev = desc.slice(0, 160).split(' ');
  const prewiev = descPrev.slice(0, descPrev.length - 1).join(' ');

  return (
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
      <p>
        {prewiev} {prewiev.length < desc.length && ' ...'}
      </p>
      <Link passHref href={`services/#${category}`}>
        <ButtonStyles as="a">Learn More</ButtonStyles>
      </Link>
    </ServiceCardStyle>
  );
};
export default ServiceCard;
