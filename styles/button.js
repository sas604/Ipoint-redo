import styled from 'styled-components';

const ButtonStyles = styled.button`
  cursor: pointer;
  margin-top: 1.5rem;
  padding: 0 1.5rem;
  line-height: 3rem;
  font-weight: 700;
  border: ${({ border }) => border || '2px solid var(--dark-red)'};
  appearance: none;
  text-transform: uppercase;
  background-color: ${({ background }) => background || 'transparent'};
  color: ${({ color }) => color || 'var(--dark-red)'};
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s;
  :hover {
    background-color: var(--dark-red);
    color: white;
  }
`;

export default ButtonStyles;
