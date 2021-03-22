import styled from 'styled-components';

const BurgerStyles = styled.button`
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

  div {
    width: 100%;
    height: 1px;
    background: var(--light-gray);
  }
`;

const Burger = () => (
  <BurgerStyles type="button">
    <div />
    <div />
    <div />
  </BurgerStyles>
);

export default Burger;
