import React, { useState, useEffect } from "react";

function OpenClose({ isOpen, children }) {
    const [showChildren, setShowChildren] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShowChildren(true);
        } else {
            const timer = setTimeout(() => {
                setShowChildren(false);
            }, 300); 
            return () => {
                clearTimeout(timer);
            };
        }
    }, [isOpen]);

    const className = isOpen ? "open" : "close";

    return showChildren ? <div className={className}>{children}</div> : null;
}

export default OpenClose;
