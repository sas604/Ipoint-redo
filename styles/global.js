import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --dark-red: #c41b1b;
  --red: #b83333;
  --pale-red: #F07878;
  --dark-blue:#222831;
  --light-gray:#E8E8E8;
}
html {
  box-sizing: border-box;
  height:100%;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html,body{
  min-height: 100%;
  position: relative;
  overflow-x: hidden;
}
main{
  max-width:calc( 1200px + 3rem );
  margin: 0 auto;
}
section{
  padding: 4.5rem 1.5rem;
}
.fixed {
  height:100%;
  overflow: hidden;
}

.active {
    border-bottom: 2px solid var(--red);
  }
`;

export default GlobalStyles;
