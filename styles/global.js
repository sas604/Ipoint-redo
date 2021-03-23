import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --dark-red: #F01D1D;
  --red: #F05454;
  --pale-red: #F07878;
  --dark-blue:#222831;
  --light-gray:#E8E8E8;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html,body{
  position:relative;
  overflow-x:hidden;
}
`;

export default GlobalStyles;
