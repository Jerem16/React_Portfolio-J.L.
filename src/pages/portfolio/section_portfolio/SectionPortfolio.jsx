import React from "react";
import PortfolioComp from "../../../components/04-portfolio/00-LayoutPortfolio";
import "../section_services/services.scss";
import "./portfolio.scss";

function SectionPortfolio({ openModalPortfolio }) {
    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <PortfolioComp openModalPortfolio={openModalPortfolio} />
            </div>
        </section>
    );
}

export default SectionPortfolio;
