import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleClasses } from "../../redux/reducers/classesSlice";

function NavToggler() {
    const dispatch = useDispatch();
    const addClass = useSelector((state) => state.classes.addClass);

    const toggleClick = () => {
        const newClass = addClass === "open" ? "close" : "open";
        dispatch(toggleClasses(newClass));
    };

    return (
        <div className={`nav-toggler`} id="nav-toggler" onClick={toggleClick}>
            <span></span>
        </div>
    );
}

export default React.memo(NavToggler);
