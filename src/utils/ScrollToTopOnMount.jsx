import React, { useLayoutEffect, useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    // const { pathname } = useLocation();
    const [scrollValue, setScrollValue] = useState(0);

    const handleMouseWheel = (e) => {
        setScrollValue(scrollValue + e.deltaY);
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("home")?.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        window.onload = () => {
            const homeElement = document.getElementById("home");
            if (homeElement) {
                setTimeout(() => {
                    homeElement.scrollTo(0, 1000);
                }, 1000);
            }
        };
    }, []);

    return <div onWheel={handleMouseWheel}>{children}</div>;
};

export default ScrollToTop;
