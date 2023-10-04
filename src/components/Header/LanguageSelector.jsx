import React from "react";
import { useDispatch } from "react-redux";
import { setLanguage } from "../../redux/reducers/languageSlice";
import en from "../../assets/img/flag/en.svg";
import fr from "../../assets/img/flag/fr.svg";
import de from "../../assets/img/flag/de.svg";
import it from "../../assets/img/flag/it.svg";
import es from "../../assets/img/flag/es.svg";

const fra = fr;
const gb = en;
const al = de;
const esp = es;
const ita = it;

const LanguageSelector = () => {
    const dispatch = useDispatch();

    const changeLanguage = (language) => {
        dispatch(setLanguage(language));
    };

    return (
        <span className="flag">
            <img
                className="flagLogo"
                onClick={() => changeLanguage("en")}
                src={gb}
                alt="flag-en"
            />
            <img
                className="flagLogo"
                onClick={() => changeLanguage("fr")}
                src={fra}
                alt="flag-fr"
            />
            <img
                className="flagLogo"
                onClick={() => changeLanguage("en")}
                src={al}
                alt="flag-en"
            />
            <img
                className="flagLogo"
                onClick={() => changeLanguage("fr")}
                src={esp}
                alt="flag-fr"
            />
            <img
                className="flagLogo"
                onClick={() => changeLanguage("fr")}
                src={ita}
                alt="flag-fr"
            />
        </span>
    );
};

export default LanguageSelector;
