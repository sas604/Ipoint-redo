import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --dark-red: #F01D1D;
  --red: #e71a1a;
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
  height:100%;
  position:relative;
  overflow-x:hidden;
}
main{
  max-width:calc( 1200px + 3rem );
  margin: 0 auto;
}
section{
  padding: 4.5rem 1.5rem;
}
.active {
    border-bottom: 2px solid var(--red);
  }
`;

export default GlobalStyles;
