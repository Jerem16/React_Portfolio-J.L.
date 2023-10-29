import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeSelector from "./ThemeSelector/ThemeSelector";
import HeaderDataLoader from "./HeaderDataLoader";
import navLink from "../../assets/data/link.json" 
import { useDispatch } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";
import NavMenu from "./NavMenu";

import "./header.scss";

function Header() {
    const location = useLocation();
    const dispatch = useDispatch();
    const handleClick = () => {
        // Dispatch l'action pour changer la classe lorsque l'élément est cliqué
        dispatch(toggleClasses("open")); // Remplacez "open" par la classe que vous souhaitez utiliser
    };

    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 992px)").matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 992px)");
        const updateIsMobile = (event) => {
            setIsMobile(event.matches);
        };

        // Ajoutez un écouteur pour suivre les changements d'état de la Media Query
        mediaQuery.addListener(updateIsMobile);

        // Nettoyage de l'écouteur lorsque le composant est démonté
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
                            <Link to={headerData.navLinks[0].to}>
                                <span>{headerData.logoTitle}</span>
                                {headerData.logoSpanTitle}
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
                                // handleClick={handleClick}
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
