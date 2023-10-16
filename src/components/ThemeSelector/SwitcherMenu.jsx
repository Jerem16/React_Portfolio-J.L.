import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../redux/reducers/themeSlice";

function SwitcherMenu({ setIsThemeSelectorOpen }) {
    const dispatch = useDispatch();

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false); // État pour gérer le mode sombre

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
        setIsThemeSelectorOpen(!isSelectorOpen); // Passez l'état à Header
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
        <>
            <div id="switcher-block">
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
        </>
    );
}

export default SwitcherMenu;
