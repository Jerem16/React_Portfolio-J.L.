import React from "react";
import PortfolioComp from "../../../components/04-portfolio/00-LayoutPortfolio";
import "../section_services/services.scss";
import "./portfolio.scss";

function SectionPortfolio () {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <PortfolioComp />
            </div>
        </section>
    );
}

export default SectionPortfolio ;
