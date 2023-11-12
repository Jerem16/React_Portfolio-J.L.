import React, { useState, useEffect } from "react";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import HeaderDataLoader from "./HeaderDataLoader";
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";
import NavMenu from "./NavMenu";
import dataBase from "../../assets/data/header.json";
import "./header.scss";

function Header() {
    const data = dataBase;
    const dispatch = useDispatch();

    const handleClick = () => {
        setTimeout(() => {
            dispatch(toggleClasses("open"));
        }, 500);
    };

    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 1024px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
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
                            <a
                                rel="nofollow"
                                href="#home"
                            >
                                <div
                                
                                >
                                    <span>{data.logoTitle}</span>
                                    {data.logoSpanTitle}
                                </div>
                            </a>
                        </div>

                        {isMobile ? (
                            <NavMenu
                                id="tablet"
                                navLinks={headerData.navLinks}
                                handleClick={handleClick}
                                language={headerData.language}
                                startLinks={headerData.startLinks}
                            />
                        ) : (
                            <NavMenu
                                id="desktop"
                                navLinks={headerData.navLinks}
                                language={headerData.language}
                                startLinks={headerData.startLinks}
                            />
                        )}

                        <ThemeSelector />
                    </div>
                </header>
            )}
        </HeaderDataLoader>
    );
}

export default Header;
