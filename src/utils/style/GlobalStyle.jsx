// import React from "react";
// import { createGlobalStyle } from "styled-components";
// import { useSelector } from "react-redux";

// const StyledGlobalStyle = createGlobalStyle`
//   :root {
//     --skin-color: ${(props) => props.theme.currentTheme}; 
//     --skin-color-light: ${(props) => props.theme.lightTheme}; 
//     --skin-color-dark: ${(props) => props.theme.darkTheme}; 
//     --skin-color-darked ${(props) => props.theme.darkedTheme}; 
//   }
// `;

// function GlobalStyle() {
//     const currentTheme = useSelector((state) => state.theme.currentTheme);
//     const lightTheme = useSelector((state) => state.theme.lightTheme);
//     const darkTheme = useSelector((state) => state.theme.darkTheme);
//     const darkedTheme = useSelector((state) => state.theme.darkedTheme);

//     return (
//         <StyledGlobalStyle
//             theme={{ currentTheme, lightTheme, darkTheme, darkedTheme }}
//         />
//     );
// }

// export default GlobalStyle;
