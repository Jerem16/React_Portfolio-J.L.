import React, { useLayoutEffect, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    const [scrollValue, setScrollValue] = useState(0);

    // Gère l'événement de la molette de la souris
    const handleMouseWheel = (e) => {
        // e.deltaY contient la quantité de défilement effectuée par la molette
        setScrollValue(scrollValue + e.deltaY);
    };

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("home")?.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        // Attendez que la fenêtre soit entièrement chargée
        window.onload = () => {
            const homeElement = document.getElementById("home");
            if (homeElement) {
                // Utilisez setTimeout pour retarder le mouvement de la molette au démarrage
                setTimeout(() => {
                    homeElement.scrollTo(0, 1000); // Réglez la position de défilement souhaitée
                }, 1000); // Attendez 1 seconde avant de déclencher le défilement
            }
        };
    }, []);

    return <div onWheel={handleMouseWheel}>{children}</div>;
};

export default ScrollToTop;
