import styled from 'styled-components';

const ButtonStyles = styled.button`
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  line-height: 3rem;
  border: ${({ border }) => border || '1px solid var(--red)'};
  appearance: none;
  text-transform: uppercase;
  background-color: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || 'var(--dark-red)'};
  display: inline-block;
  text-decoration: none;
`;

export default ButtonStyles;