import React from "react";
import useLangData from "../../utils/useLangData";

const HomeDataLoader = ({ children }) => {
    const homeData = useLangData("home.json");

    if (!homeData?.home || !homeData) {
        return <div>Loading...</div>;
    }

    const typing = homeData.home;

    return children(homeData, typing);
};

export default HomeDataLoader;

