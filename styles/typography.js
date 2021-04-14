import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
:root{
 --base-line:1.5rem;
}
html{
  font-family: nunito, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  line-height: var(--base-line);
}
:is(h1,h2,h3,h4,h5,h6){
  margin:0;
  font-family: clarendon-wide, serif;
  font-weight: 500;
  font-style: normal;
  line-height:calc(var(--base-line) * 2);
 
}

h3{
  color: var(--dark-red);
  line-height: 1.5rem;
  margin-bottom: 1.5rem;
  font-size: clamp(1rem, 5vw, 1.235rem);
}

h1{
  position:relative;
  font-size: 1.852rem;
  margin-bottom: 3rem;
  max-width:calc( 600px - 3rem );
  &::after {
    bottom: -1rem;
    left: 0;
    content: "";
    position: absolute;
    width: 100px;
    height: 3px;
    background-color:red;

  }

}
.hero-title{
  font-size: 1.852rem;
  line-height: 2.25rem;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--dark-red);
  align-self: flex-end;
  @media(min-width:700px){
    font-size: clamp(1.852rem, 6vw, 3.375rem);
    line-height: 3.75rem;
    max-width: 700px;
  }
}

p{
   margin: 0;
   max-width:calc( 600px - 3rem );
 }
 p+p{
   margin-top: 1.5rem;
 }
`;
export default Typography;
