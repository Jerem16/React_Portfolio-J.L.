import React from "react";
import portfolio_img from "../../assets/data/portfolio_img.json";
import shortid from "shortid";

const renderPortfolioItems = (openModal) => {
    return portfolio_img.map((item) => (
        <div
            className="service-item"
            key={shortid.generate()}
            onClick={() => openModal(item)}
        >
            <div className="portfolio-item-inner shadow-dark">
                <img
                    alt={item.title}
                    src={require(`../../assets/img/webSite/${item.imagePath}`)}
                />
            </div>
        </div>
    ));
};

export default renderPortfolioItems;