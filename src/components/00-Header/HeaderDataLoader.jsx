import React from "react";
import useLangData from "../../utils/useLangData";

const HeaderDataLoader = ({ children }) => {
    const headerData = useLangData("headerNav.json");

    if (!headerData) {
        return <div>Loading...</div>;
    }

    return children(headerData);
};

export default HeaderDataLoader;
