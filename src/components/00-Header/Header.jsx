import React from "react";
import { Link, useLocation } from "react-router-dom";
import shortid from "shortid";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import LanguageSelector from "./LanguageSelector";
import HeaderDataLoader from "./HeaderDataLoader";
import NavToggler from "./NavToggler";
import { useSelector } from "react-redux";

import "./header.scss";

function Header() {
    const location = useLocation();
    const asideClass = useSelector((state) => state.classes.addClass);

    return (
        <HeaderDataLoader>
            {(headerData) => (
                <header>
                    <div className={`aside`}>
                        <div className="logo">
                            <Link to={headerData.navLinks[0].to}>
                                <span>{headerData.logoTitle}</span>
                                {headerData.logoSpanTitle}
                            </Link>
                        </div>
                        {/* <NavToggler /> */}
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
