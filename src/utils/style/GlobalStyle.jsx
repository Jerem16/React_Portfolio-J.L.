import React from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux"; // Importez useSelector ici

const StyledGlobalStyle = createGlobalStyle`
  :root {
    --skin-color: ${props => props.theme.currentTheme}; // Utilisez useSelector ici
  }
`;

function GlobalStyle() {
  const currentTheme = useSelector(state => state.theme.currentTheme);

  return (
    <StyledGlobalStyle theme={{ currentTheme }} /> 
  );
}

export default GlobalStyle;
