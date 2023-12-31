import React, { useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/reducers/languageSlice";
import { setClass } from "../../redux/reducers/classesSlice";

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
    const activeLinkClass = useSelector((state) => state.classes.menuSwitcher);

    const [activeLanguage, setActiveLanguage] = useState(selectedLanguage);
    const [isSelectorOpen, setIsSelectorOpen] = useState(false);

    const flagRef = useRef(null);

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
        const newClass =
            activeLinkClass === "langClose" ? "langOpen" : "langClose";

        dispatch(setClass(newClass));
    };

    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
        setActiveLanguage(language);
        setIsSelectorOpen(false);
    };

    return (
        <li
            className={`flag nav-language ${isSelectorOpen ? "open" : "close"}`}
            onClick={toggleSelector}
            ref={flagRef}
        >
            <i>
                <LanguageIcon addClass="lang-icon" />
            </i>
            <p className="lang" id="lang">
                {text}
            </p>

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
                            width={30}
                            height={30}
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "fr" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("fr")}
                            src={fr}
                            alt="flag-fr"
                            width={30}
                            height={30}
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "de" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("de")}
                            src={de}
                            alt="flag-de"
                            width={30}
                            height={30}
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "it" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("it")}
                            src={it}
                            alt="flag-it"
                            width={30}
                            height={30}
                        />
                        <img
                            className={`flagLogo ${
                                activeLanguage === "es" ? "active" : ""
                            }`}
                            onClick={() => changeLanguage("es")}
                            src={es}
                            alt="flag-es"
                            width={30}
                            height={30}
                        />
                    </>
                )}
            </span>
        </li>
    );
};

export default React.memo(LanguageSelector);
