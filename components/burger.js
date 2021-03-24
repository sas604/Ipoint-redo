import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const BurgerStyles = styled.button`
  position: absolute;
  top: 3.6rem;
  right: 1.5rem;
  appearance: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  border: 0;
  cursor: pointer;
  z-index: 100;

  div {
    width: 100%;
    height: 1px;
    background: var(--light-gray);
  }
`;

const Burger = ({ open, setNavOpen }) => {
  const top = useSpring({
    transform: open
      ? 'translateY(8px) rotate(45deg)'
      : 'translateY(0px)  rotate(0deg)',
  });
  const bottom = useSpring({
    transform: open
      ? 'translateY(-8px) rotate(-45deg)'
      : 'translateY(0px)  rotate(0deg)',
  });
  const midle = useSpring({
    opacity: open ? 0 : 1,
  });

  return (
    <BurgerStyles type="button" onClick={() => setNavOpen((s) => !s)}>
      <animated.div style={top} />
      <animated.div style={midle} />
      <animated.div style={bottom} />
    </BurgerStyles>
  );
};

export default Burger;
