import { createGlobalStyle } from "styled-components";

export const GlobalStyles =createGlobalStyle`
@font-face {
  font-family: 'Metropolis';
  src: local('Metropolis'), url('./font/Metropolis-Regular.woff') format('woff');
} 

body {
  max-width:1920px;
  font-family:'Metropolis';
  background:#111216;
  margin: 0;
}
`;
