import { createGlobalStyle } from "styled-components";

export const GlobalStyles =createGlobalStyle`
@font-face {
  font-family:'Metropolis';
    src:url("./font/metropolis.medium.woff") format('woff');
  } 

body {
  max-width:1920px;
  font-family:'Metropolis',sans-serif;
  background:#111216;
  margin: 0;
}
`;
