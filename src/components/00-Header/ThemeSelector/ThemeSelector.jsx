import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
    changeTheme,
    changeLightTheme,
    changeDarkTheme,
    changeDarkedTheme,
} from "../../../redux/reducers/themeSlice";

function ThemeSelector() {
    const dispatch = useDispatch();

    const [isSelectorOpen, setIsSelectorOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleSelector = () => {
        setIsSelectorOpen(!isSelectorOpen);
    };

    const changeToTheme = (themeColor, lightTheme, darkTheme, darkedTheme) => {
        dispatch(changeTheme(themeColor));
        dispatch(changeLightTheme(lightTheme));
        dispatch(changeDarkTheme(darkTheme));
        dispatch(changeDarkedTheme(darkedTheme));
        setIsSelectorOpen(!isSelectorOpen);
    };

    const toggleDarkMode = useCallback(() => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }

        const dayNightIcon = document.querySelector(".day-night i");
        if (dayNightIcon) {
            dayNightIcon.classList.remove("fa-sun", "fa-moon");
            dayNightIcon.classList.add(isDarkMode ? "fa-sun" : "fa-moon");
        }
    }, [isDarkMode]);

    useEffect(() => {
        if (!document.body.classList.contains("dark")) {
            toggleDarkMode();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="switcher-container">
            <div className="switcher-block">
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
                        onClick={() =>
                            changeToTheme(
                                "#ec1839",
                                "#ea5b71",
                                "#a1172c",
                                "#581620"
                            )
                        }
                    ></span>
                    <span
                        className="color-2"
                        onClick={() =>
                            changeToTheme(
                                "#fa5b0f",
                                "#ed8655",
                                "#aa4311",
                                "#5c2b13"
                            )
                        }
                    ></span>
                    <span
                        className="color-3"
                        onClick={() =>
                            changeToTheme(
                                "#37b182",
                                "#6fbd9f",
                                "#2b7a5c",
                                "#204537"
                            )
                        }
                    ></span>
                    <span
                        className="color-4"
                        onClick={() =>
                            changeToTheme(
                                "#1854b4",
                                "#5b81bf",
                                "#173e7c",
                                "#162946"
                            )
                        }
                    ></span>
                    <span
                        className="color-5"
                        onClick={() =>
                            changeToTheme(
                                "#f021b2",
                                "#e760be",
                                "#a31d7b",
                                "#591946"
                            )
                        }
                    ></span>
                </div>
            </div>
        </div>
    );
}

export default React.memo(ThemeSelector);
