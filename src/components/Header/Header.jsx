import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadLanguageData } from "../../utils/loadLanguageData";
import "./header.scss";
import LanguageSelector from "./LanguageSelector";
function Header() {
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
