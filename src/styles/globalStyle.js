import styled, { createGlobalStyle, css } from 'styled-components';
import resetStyle from './resetStyle.js';

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionContainer = styled.section`
  width: 100%;
  padding: 0 6rem;
`;

export const GlobalStyle = createGlobalStyle`
  ${resetStyle}

  html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  }

  body {
    width: 136.6rem;
    margin: 0 auto;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: normal;
  }
`;

export default GlobalStyle;
