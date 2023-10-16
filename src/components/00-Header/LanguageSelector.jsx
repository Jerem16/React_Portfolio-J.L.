import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/reducers/languageSlice";

import LanguageIcon from "../99-Svg_Icon/LanguageIcon";

import en from "../../assets/img/flag/en.svg";
import fr from "../../assets/img/flag/fr.svg";
import de from "../../assets/img/flag/de.svg";
import it from "../../assets/img/flag/it.svg";
import es from "../../assets/img/flag/es.svg";

import "./languageSelector.scss";

const LanguageSelector = ({ text }) => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.language.language);
    const [activeLanguage, setActiveLanguage] = useState(selectedLanguage);
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
    };

    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
        setActiveLanguage(language);
        setIsSelectorOpen(false); // Ferme le menu après avoir sélectionné une langue
    };

    return (
        <li
            className={`flag ${isSelectorOpen ? "open" : ""}`}
            onClick={toggleSelector}
        >
            <i>
                <LanguageIcon addClass="lang-icon" />
            </i>
            <p className="lang">{text}</p>
            <span className="language-menu">
                {isSelectorOpen && (
                    <>
                        <img
                            className={`flagLogo ${
                                activeLanguage === "en" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("en")}
                            src={en}
                            alt="flag-en"
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "fr" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("fr")}
                            src={fr}
                            alt="flag-fr"
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "de" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("de")}
                            src={de}
                            alt="flag-de"
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "it" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("it")}
                            src={it}
                            alt="flag-it"
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "es" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("es")}
                            src={es}
                            alt="flag-es"
                        />
                    </>
                )}
            </span>
        </li>
    );
};

export default LanguageSelector;
