import React from "react";
import { Link, useLocation } from "react-router-dom";
import shortid from "shortid";
import LanguageSelector from "./01-LanguageSelector";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

function NavMenu({ navLinks, handleClick, language, id }) {
    const location = useLocation();

    return (
        <ul className="nav" id={id}>
            {navLinks.map((link) => (
                <li
                    onClick={handleClick}
                    className="head-btn"
                    key={shortid.generate()}
                >
                    <i
                        className={`${
                            location.pathname === link.to ? "active-link " : ""
                        }${link.icon}`}
                    ></i>
                    <Link
                        to={link.to}
                        className={
                            location.pathname === link.to ? "active-link" : ""
                        }
                    >
                        {link.text}
                    </Link>
                </li>
            ))}
            <LanguageSelector text={language} />
        </ul>
    );
}


export default NavMenu;
