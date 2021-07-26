import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
  font-family: Montserrat, 'Nanum Gothic Coding', 'Georgia',
      sans-serif;
  }  
  
  body {
    overflow-y: scroll;
  }
  
  
  a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black}
  }
`;

export default GlobalStyles;
