import React from "react";
import useLangData from "../../utils/useLangData";

const PortfolioDataLoader = ({ children }) => {
    const portfolioData = useLangData("portfolioContent.json");

    if (!portfolioData) {
        return <div>Loading...</div>;
    }

    return children(portfolioData);
};

export default PortfolioDataLoader;
