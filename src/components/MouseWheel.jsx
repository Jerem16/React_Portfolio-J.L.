import React, { useState } from "react";

function MouseWheel() {
    const [scrollValue, setScrollValue] = useState(0);

    // Gère l'événement de la molette de la souris
    const handleMouseWheel = (e) => {
        // e.deltaY contient la quantité de défilement effectuée par la molette
        setScrollValue(scrollValue + e.deltaY);
    };

    return (
        <div
            onWheel={handleMouseWheel}
            style={{ height: "300px", overflow: "scroll" }}
        >
            <h1>Valeur de défilement de la molette :</h1>
            <p>Scroll : {scrollValue}</p>
        </div>
    );
}

export default MouseWheel;
