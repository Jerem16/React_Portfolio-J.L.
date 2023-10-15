import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../redux/reducers/languageSlice";

import LanguageIcon from "../99-Svg_Icon/LanguageIcon";

import en from "../../assets/img/flag/en.svg";
import fr from "../../assets/img/flag/fr.svg";
import de from "../../assets/img/flag/de.svg";
import it from "../../assets/img/flag/it.svg";
import es from "../../assets/img/flag/es.svg";
import er from "../../assets/img/flag/earth.svg";
import "../Globe/globe.scss";

const LanguageSelector = () => {
    const dispatch = useDispatch();
    const selectedLanguage = useSelector((state) => state.language.language);
    const [activeLanguage, setActiveLanguage] = useState(selectedLanguage);

    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
        setActiveLanguage(language);
    };

    return (
        <span className="flag">
            {/* <div className="free">
                <div className="globe">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
            </div> */}
            <LanguageIcon addClass="lang-icon" />
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
        </span>
    );
};

export default LanguageSelector;
const Globe = () => {
    return (
        <div className="free">
            <div className="globe">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <i class="fas fa-globe-americas"></i>
                {/* <h5 className="arobaz_globe">@</h5> */}
            </div>
        </div>
    );
};

// export default Globe;
