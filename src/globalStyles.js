import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {
    font-family: 'Dosis', sans-serif;
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.bodyBg};
    padding: 0;
    margin: 0;
    transition: all ${props => props.theme.transitionTime}
  }
`;

export default GlobalStyle;