import { createGlobalStyle } from "styled-components";
import { TEXT_PRIMARY } from "../colors";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    &:focus {
      outline: 0;
    }
  }
  html {
    font-size: 62.5%;
  }
  body {
    -webkit-font-smoothing: antialiazed;
    padding: 24px;
  }
  html, body, #root {
    display: flex;
    flex: 1;
    min-height: 100vh;
    min-width: 100%;
  }
  .animatedNavigation {
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    animation-duration: 0.2s;
  }
  body, input, button {
    font: 1.6rem 'Work Sans', sans-serif;
    color: ${TEXT_PRIMARY};
    -webkit-font-smoothing: antialiazed;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  @media (min-width: 720px) {
  html {
    font-size: 60%;
  }
}
`;

export default GlobalStyle;
