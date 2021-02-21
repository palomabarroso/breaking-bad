import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 600;
    src: url("https://fonts.googleapis.com/css?family=Raleway&display=swap");
  }

  * {
    margin: 0;
    border: 0;
    padding: 0;
    font-family: "Raleway", sans-serif;
  }
  
  html, body {
    margin: auto;
    scroll-behavior: smooth;
  }
`;

export default GlobalStyle;
