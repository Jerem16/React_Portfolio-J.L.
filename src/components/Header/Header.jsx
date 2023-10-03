import React from "react";
import { Link } from "react-router-dom";
import headerNav from "../../assets/data/headerNav.json";
import "./header.scss";

function Header() {
    const { logoTitle, logoSpanTitle, navLinks } = headerNav;

    return (
        <header>
            <div className="aside">
                <div className="logo">
                    <Link to={navLinks[0].to}>
                        <span>{logoTitle}</span>
                        {logoSpanTitle}
                    </Link>
                </div>
                <div className="nav-toggler">
                    <span></span>
                </div>
                <ul className="nav">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.to}
                                className={index === 0 ? "active-link" : ""}
                            >
                                <i className={link.icon}></i>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;
