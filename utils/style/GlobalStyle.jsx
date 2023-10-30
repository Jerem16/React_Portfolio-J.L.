import React from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

const StyledGlobalStyle = createGlobalStyle`
  :root {
    --skin-color: ${(props) => props.theme.currentTheme}; 
  }

  @media screen and (max-width: ${(props) => props.desktop1280}px) {
    // .home {
    //     .row {
    //         flex-flow: row-reverse;
    //         .blockInfo {
    //             margin-left: 3.21416857986225%;
    //             background-color: transparent;
    //             max-height: 400px;
    //             .home-info {
    //                 display: flex;
    //                 justify-content: center;
    //                 position: relative;
    //                 top: 2em;
    //                 h3.hello {
    //                     font-size: 1.75em;
    //                     align-self: center;
                        
    //                     span {
    //                         text-align: center;
    //                         display: block;
    //                         font-size: 1.25em;
    //                         margin: 0.25em 0 0.5em 0;
    //                     }
    //                 }
    //                 h3.my-profession {
    //                     width: auto;
    //                     align-self: center;
    //                     color: transparent;
                        

    //                 }
                    

    //                 .group {
    //                         width: 100%;
    //                         display: inline-flex;
    //                         justify-content: center;
    //                         h3.hid  {
    //                             font-size: 0em;
    //                             display: inline;
    //                             max-width: 0%;
    //                         }
    //                         .typing {
    //                             display: inline;                            
    //                         }
    //                 }

    //                 p {
    //                     padding: 1.25em 0 0 0;
    //                     text-align: center;
    //                     margin: 0;
    //                     font-size: 1em;

    //                 }
    //                 .btn {
    //                     align-self: center;
    //                     width: auto;
    //                 }
    //             }
    //         }
    //         .blockImg {
    //             display: block;
    //             flex: 2;
    //             position: relative;
    //             .home-img {
    //                 &::after {
    //                     top: 82px;
    //                     left: 0px;
    //                     z-index: 0;
    //                     width: 86.13px;
    //                 }
    //                 &::before {
    //                     bottom: -12px;
    //                     right: -10px;
    //                     width: calc(100% + 10px);
    //                 }
    //                 .centerNB {
    //                     background-image: url(${require(`../../assets/img/a.png`)});i
    //                     background-repeat: no-repeat;
    //                     background-position: top;
    //                     background-size: cover;
    //                     z-index: 2;
    //                 }
    //                 img {
    //                     display: none;
    //                 }
    //             }
    //         }
    //     }
    // }
}
 
`;

function GlobalStyle() {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const desktop1280 = useSelector((state) => state.classes.desktop1280);
    const tab1080 = useSelector((state) => state.classes.tab1080);

    return (
        <StyledGlobalStyle
            theme={{ currentTheme }}
            desktop1280={desktop1280}
            tab1080={tab1080}
        />
    );
}

export default GlobalStyle;



