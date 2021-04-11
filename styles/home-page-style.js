import { animated } from 'react-spring';
import styled from 'styled-components';
import ButtonStyles from './button';

export const WhoSectionStyles = styled.section`
  max-width: 600px;
  overflow: hidden;
  a {
    float: right;
  }
`;
export const TeamStyles = styled.section`
  @media (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
    h1 {
      grid-column: 1/-1;
    }
  }

  p {
    margin-bottom: 1.5rem;
    grid-column: 2/-1;
    align-self: center;
  }
  .members {
    grid-row: 2;
    max-width: 450px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, minmax(150px, 250px));
    gap: 1.5rem;
    position: relative;
  }
  .members__description {
    position: absolute;
    z-index: 5;
  }
  .members__photo {
    position: relative;
  }
`;

export const ExpandBtn = styled(ButtonStyles)`
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0;
  position: absolute;
  z-index: 2;
  margin: 0.5rem;
  border: 0;
  :hover {
    background-color: transparent;
    color: var(--red);
  }
`;
export const ServiceGridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
`;
export const ClientStyle = styled(animated.span)`
  font-family: clarendon-wide, serif;
  font-weight: 500;
  font-size: 1.5rem;
  flex-basis: 150px;
  display: block;
  padding: 1.5rem;
  color: #828282;
  text-transform: uppercase;
`;
export const ClientStripeStyle = styled.section`
  div {
    background-color: var(--light-gray);
    margin: 0 -1.5rem;
  }
  div > div {
    display: flex;
    align-items: center;
  }
`;
