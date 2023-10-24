import React from "react";
import { Link, useLocation } from "react-router-dom";
import shortid from "shortid";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import HeaderDataLoader from "./HeaderDataLoader";

import "./header.scss";

function Header() {
    const location = useLocation();
    return (
        <HeaderDataLoader>
            {(headerData) => (
                <header>
                    <div className="aside">
                        <div className="logo">
                            <Link to={headerData.navLinks[0].to}>
                                <span>{headerData.logoTitle}</span>
                                {headerData.logoSpanTitle}
                            </Link>
                        </div>

                        <div className="nav-toggler">
                            <span></span>
                        </div>
                        <ul className="nav">
                            {headerData.navLinks.map((link, index) => (
                                <li key={shortid.generate()}>
                                    <i
                                        className={`${
                                            location.pathname === link.to
                                                ? "active-link "
                                                : ""
                                        }${link.icon}`}
                                    ></i>
                                    <Link
                                        to={link.to}
                                        className={
                                            location.pathname === link.to
                                                ? "active-link"
                                                : ""
                                        }
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}

                            <LanguageSelector text={headerData.language} />
                        </ul>
                        <ThemeSelector />
                    </div>
                </header>
            )}
        </HeaderDataLoader>
    );
}

export default React.memo(Header);
