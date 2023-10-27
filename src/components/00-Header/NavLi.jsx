import React from "react";

const NavLi = ({ children }) => {
    return (
        <>
            <li className="nav-language">{children}</li>
        </>
    );
};

export default React.memo(NavLi);
