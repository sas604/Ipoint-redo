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

const Burger = ({ navOpen, setNavOpen }) => (
  <BurgerStyles type="button" onClick={() => setNavOpen((s) => !s)}>
    <div />
    <div />
    <div />
  </BurgerStyles>
);

export default Burger;
