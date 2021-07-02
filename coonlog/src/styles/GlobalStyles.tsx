import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  font-family: 'Merriweather', 'Georgia', serif;
  
  a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black}
  }
`;

export default GlobalStyles;
