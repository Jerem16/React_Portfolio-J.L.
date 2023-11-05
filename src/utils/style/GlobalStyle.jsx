import React from "react";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";

const StyledGlobalStyle = createGlobalStyle`
  :root {
    --skin-color: ${(props) => props.theme.currentTheme}; 
  }

  @media screen and (max-width: ${(props) => props.desktop1280}px) {
    .home {
        .row {
        //   min-width: calc(100% - 0px);
            .home-info {
                justify-content: center;
                .home-title {
                    position: absolute;
                    left: 0;
                    top: 0;
                    margin: 0;
                    width: 100%;
                    padding: 12px 1em;


                    text-align: center;
                    top: 0.75em;
                    span.name {
                        text-align: center;
                        width: 100%;
                    }
                }
  
                .home-card {
                    align-items: center;
                    


                    position: relative;
                    top: 0.7em;
                    &_group {
                        margin: 1.5em 0;
                        .presentation_title,
                        .presentation_typing {
                            text-align: center;
                            align-items: center;
                          
                        }
  
                        .typing {
                            width: 100%;
                            align-items: center;
                        }
                    }
  
                    .home-card-content {
                        margin: 1em 1em 0 1em;
  
                        &_description {
                            .home-quote {
                              //   text-align: center;
                                width: 100%;
                                display: block;
  
                                margin: 0 auto;
                                padding: 0;
                            }
                        }
                        .content-inner {
                            // padding: 1em 0em;
                            &_description {
                                // font-style: italic;
                            }
                            &_quote {
                                // padding-left: 20px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: ${(props) => props.tab1080}px) {
    .home {
        .row {
            flex-flow: column nowrap;
            border: 1px solid var(--bg-black-50);
            top: 0;
            padding: 0 0.5em 50px 0.5em;
            min-height: 826.48px;
            .home-info {
                position: static;
                .home-title {
                    position: absolute;
                    text-align: center;
                    top: 0;
                    width: 100%;
                    span.name {
                        display: block;
                    }
                }
                .home-card {
                    justify-content: flex-start;
                    width: 100%;
                    margin: 0;
                    position: static;
                    top: 0;
                    &_group {
                        width: 100%;
                        text-align: center;
                        margin: 0;
                        .presentation_title {
                            display: none;
                        }
                        .presentation_typing {
                            font-size: 1.875em;
                        }
                    }
                    .home-card-content {
                        display: flex;
                        flex-flow: column;
                        justify-content: center;
                        margin: 0.75em 0.5em 0 0.5em;
                        &_description {
                            text-align: center;
                            .home-quote {
                                text-align: center;
                                position: static;
                                margin: 0 auto 0.675em;
                                padding: 0;
                                display: inline-block;
                            }
                        }
                        .content-inner {
                            align-self: center;
                            margin: 0 0.65em 0;
                            max-width: 391px;
                        }
                    }
                }
            }
            .blockImg {
                margin-top: 110px;
                height: 333px;
                .home-img {
                    &::after {
                        top: 90px;
                        left: 0px;
                        width: 100.13px;
                        height: 160px;
                    }
                    &::before {
                        bottom: -37px;
                        right: -8px;
                    }
                    .centerNB {
                        height: 360px;
                    }
                }
            }
        }
        .bgDraw {
            .tsparticles {
                top: -180px !important;
                right: -300px !important;
            }
        }
        .bgDraw2 {
            width: calc(100% - 0px);
            margin: auto;
            bottom: 5.1vh;
            left: 0px;
        }
    }
    @media screen and (max-height: 1180px) {
        .bgDraw2 {
            bottom: 0px !important; 
            .tsparticles2,
            #tsparticles2 {
                width: 100% !important;
                height: calc(50vh - 404px);
                bottom: 0px !important; 
                left: 0 !important; 
            }
        }

    }
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
