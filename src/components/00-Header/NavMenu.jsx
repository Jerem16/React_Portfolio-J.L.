import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

import { nanoid } from "nanoid";
import LanguageSelector from "./01-LanguageSelector";
import ThemeSelector from "./ThemeSelector/ThemeSelector";

function NavMenu({ navLinks, handleClick, language, id }) {
    // const location = useLocation();

    return (
        <ul className="nav" id={id}>
            {navLinks.map((link) => (
                <li onClick={handleClick} className="head-btn" key={nanoid()}>
                    <Link
                        to={link.to}
                        activeClass="active-link"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
                    >
                        <i className={`icon ${link.icon}`}></i>
                    </Link>
                    <Link
                        to={link.to}
                        activeClass="active-link"
                        spy={true}
                        smooth={true}
                        offset={-60}
                        duration={500}
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
