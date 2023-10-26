import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    toggleClasses,
    setAsideWidth,
} from "../../redux/reducers/classesSlice";

function NavToggler() {
    const dispatch = useDispatch();
    const addClass = useSelector((state) => state.classes.addClass);
    const addWidth = useSelector((state) => state.classes.asideWidth);

    const toggleClick = () => {
        const newClass = addClass === "open" ? "close" : "open";
        const newWidht = addWidth === "0" ? "270" : "0";
        dispatch(toggleClasses(newClass));
        dispatch(setAsideWidth(newWidht));
    };

    return (
        // <div className={`nav-toggler ${addClass}`} onClick={toggleClick}>
        <div className={`nav-toggler`} onClick={toggleClick}>
            <span></span>
        </div>
    );
}

export default NavToggler;
