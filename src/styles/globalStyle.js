import { createGlobalStyle } from 'styled-components';
import resetStyle from './resetStyle.js';

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  }

  body {
    width: 37.5rem;
    margin: 0 auto;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    letter-spacing: normal;
    background-color: ${({ theme }) => theme.colors.black};
  }
`;

export default GlobalStyle;
