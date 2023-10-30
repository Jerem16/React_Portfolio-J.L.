import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { nanoid } from "nanoid";
import LanguageSelector from "./01-LanguageSelector";

function NavMenu({ navLinks, handleClick, language, id }) {
    return (
        <ul className="nav" id={id}>
            {navLinks.map((link) => (
                <li className="head-btn" key={nanoid()}>
                    <Link
                        rel="nofollow"
                        href={`#${link.to}`}
                        activeClass="active-link"
                        spy={true}
                        smooth={true}
                        offset={link.offset}
                        duration={500}
                        to={link.to}
                    >
                        <i className={`icon ${link.icon}`}></i>
                        <span onClick={handleClick}>{link.text}</span>
                    </Link>
                </li>
            ))}
            <LanguageSelector text={language} />
        </ul>
    );
}

export default NavMenu;
