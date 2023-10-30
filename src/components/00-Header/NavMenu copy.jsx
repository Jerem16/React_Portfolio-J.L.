import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { nanoid } from "nanoid";
import LanguageSelector from "./01-LanguageSelector";

function NavMenu({ navLinks, language, id }) {
    return (
        <ul className="nav" id={id}>
            {navLinks.map((link) => (
                <li className="head-btn" key={nanoid()}>
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
