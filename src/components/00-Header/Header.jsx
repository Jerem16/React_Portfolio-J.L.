import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import ThemeSelector from "../ThemeSelector/ThemeSelector";
import LanguageSelector from "./LanguageSelector";

import { loadLanguageData } from "../../utils/loadLanguageData";

import "./header.scss";

function Header() {
    const location = useLocation();
    const selectedLanguage = useSelector((state) => state.language.language);
    const [languageData, setLanguageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadLanguageData(
                selectedLanguage,
                "headerNav.json"
            );
            setLanguageData(data);
        };

        fetchData();
    }, [selectedLanguage]);

    if (!languageData) {
        return <div>Loading...</div>;
    }

    const { logoTitle, logoSpanTitle, navLinks } = languageData;

    return (
        <header>
            <div className="aside">
                <div className="logo">
                    <LanguageSelector />
                    {/* <ThemeSelector /> */}
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
                            <i className={link.icon}></i>
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
                </ul>
                <ThemeSelector />
            </div>
        </header>
    );
}

export default Header;
