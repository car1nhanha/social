import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    font-family: 'Signika', sans-serif;
    height: 100%;
    background-color: #f9fafb;

    #__next {
      height: 100%;
    }
  }
`;
