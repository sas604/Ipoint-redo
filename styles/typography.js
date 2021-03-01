import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
:root{
 --base-line:1.5rem;
}
html{
  font-family: nunito, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 18px;
  line-height: var(--base-line);
}
:is(h1,h2,h3,h4,h5,h6){
  margin:0;
  font-family: clarendon-wide, serif;
  font-weight: 500;
  font-style: normal;
  line-height:calc(var(--base-line) * 2);
}



h1{
  font-size: 2.618rem;
  position:relative;
  font-size: 2.618rem;
  margin-bottom: 3rem;
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

p{
   margin: 0;
 }
`;
export default Typography;
