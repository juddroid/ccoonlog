import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
  }  
  
  body {
    overflow-y: scroll;
    background: ${({ theme }) => theme.colors.white};
    transition: all ease-in-out 0.4s;
  }
  
  
  a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black}
  }
`;

export default GlobalStyles;
