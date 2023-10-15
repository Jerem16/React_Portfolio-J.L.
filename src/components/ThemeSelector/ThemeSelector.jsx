import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../redux/reducers/themeSlice";

function ThemeSelector() {
    const dispatch = useDispatch();

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // État pour gérer le mode sombre

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
    };

    const changeToTheme = (themeColor) => {
        dispatch(changeTheme(themeColor));
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark");
    };

    useEffect(() => {
        if (document.body.classList.contains("dark")) {
            setIsDarkMode(true);
        }
    }, []);

    return (
        <div className="switcher-container">
            <div id="blck">
                <div
                    className="s-icon style-switcher-toggler"
                    onClick={toggleSelector}
                >
                    <i className="fas fa-cog fa-spin"></i>
                </div>
                <div className="s-icon day-night" onClick={toggleDarkMode}>
                    <i
                        className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}
                    ></i>
                </div>
            </div>
            <div className={`style-switcher ${isSelectorOpen ? "open" : ""}`}>
                <h4>Theme Colors</h4>
                <div className="colors">
                    <span
                        className="color-1"
                        onClick={() => changeToTheme("#ec1839")}
                    ></span>
                    <span
                        className="color-2"
                        onClick={() => changeToTheme("#fa5b0f")}
                    ></span>
                    <span
                        className="color-3"
                        onClick={() => changeToTheme("#37b182")}
                    ></span>
                    <span
                        className="color-4"
                        onClick={() => changeToTheme("#1854b4")}
                    ></span>
                    <span
                        className="color-5"
                        onClick={() => changeToTheme("#f021b2")}
                    ></span>
                </div>
            </div>
        </div>
    );
}

export default ThemeSelector;