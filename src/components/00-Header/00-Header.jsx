import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// import { Link } from "react-router-dom";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import HeaderDataLoader from "./HeaderDataLoader";
import { useDispatch, useSelector } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";
import NavMenu from "./NavMenu";

import "./header.scss";

function Header() {
    const dispatch = useDispatch();

    const handleClick = () => {
        setTimeout(() => {
            dispatch(toggleClasses("open"));
        }, 500);
    };

    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 992px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 992px)");
        const updateIsMobile = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addListener(updateIsMobile);

        return () => {
            mediaQuery.removeListener(updateIsMobile);
        };
    }, []);

    return (
        <HeaderDataLoader>
            {(headerData) => (
                <header>
                    <div className={`aside`}>
                        <div className="aside_bg">
                            <div className="aside_bg_top"></div>
                            <div className="aside_bg_center"></div>
                            <div className="aside_bg_bottom"></div>
                        </div>

                        <div className="logo">
                            <Link
                                rel="nofollow"
                                href="#home"
                                to="home"
                                spy={true}
                                smooth={true}
                                // offset={-60}
                                duration={500}
                            >
                                <div 
                                // onClick={handleClick}
                                >
                                    <span>{headerData.logoTitle}</span>
                                    {headerData.logoSpanTitle}
                                </div>
                            </Link>
                        </div>

                        {isMobile ? (
                            <NavMenu
                                id="tablet"
                                navLinks={headerData.navLinks}
                                handleClick={handleClick}
                                language={headerData.language}
                            />
                        ) : (
                            <NavMenu
                                id="desktop"
                                navLinks={headerData.navLinks}
                                language={headerData.language}
                            />
                        )}

                        <ThemeSelector />
                    </div>
                </header>
            )}
        </HeaderDataLoader>
    );
}

export default React.memo(Header);
