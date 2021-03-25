import ButtonStyles from '../styles/button';
/* eslint-disable react/button-has-type */

const Button = ({
  type = 'button',
  onClick,
  children,
  color,
  background,
  border,
}) => (
  <ButtonStyles
    onClick={onClick}
    color={color}
    background={background}
    type={type}
    border={border}
  >
    {children}
  </ButtonStyles>
);

export default Button;
