import React from "react";
import useLangData from "../../utils/useLangData";
import Loader from "../Loader/Loader";

const HeaderDataLoader = ({ children }) => {
    const headerData = useLangData("headerNav.json");

    if (!headerData) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return children(headerData);
};

export default React.memo(HeaderDataLoader);
