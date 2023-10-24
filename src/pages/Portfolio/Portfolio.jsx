import React from "react";
import PortfolioComp from "../../components/04-portfolio/00-LayoutPortfolio";
import "../Services/services.scss";
import "./portfolio.scss";

function Portfolio() {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <PortfolioComp />
            </div>
        </section>
    );
}

export default Portfolio;
