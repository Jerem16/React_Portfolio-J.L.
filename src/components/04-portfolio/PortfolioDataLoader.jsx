import React from "react";
import useLangData from "../../utils/useLangData";
import Loader from "../Loader/Loader";

const PortfolioDataLoader = ({ children }) => {
    const portfolioData = useLangData("portfolioContent.json");

    if (!portfolioData) {
        return <div> <Loader /></div>;
    }

    return children(portfolioData);
};

export default PortfolioDataLoader;
