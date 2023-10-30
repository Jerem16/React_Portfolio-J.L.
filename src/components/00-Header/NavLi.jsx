import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// import shortid from "shortid";
import { nanoid } from "nanoid";
import LanguageSelector from "./01-LanguageSelector";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

function NavLi({ navLinks, handleClick, language, id }) {
    const location = useLocation();

    return (
        <ul className="nav" id={id}>
            {navLinks.map((link) => (
                <li onClick={handleClick} className="head-btn" key={nanoid()}>
                    <i
                        className={`${
                            location.pathname === link.to ? "active-link " : ""
                        }${link.icon}`}
                    ></i>
                    <NavLink
                        to={link.to}
                        className={
                            location.pathname === link.to ? "active-link" : ""
                        }
                    >
                        {link.text}
                    </NavLink>
                </li>
            ))}
            <LanguageSelector text={language} />
        </ul>
    );
}

export default React.memo(NavLi);
