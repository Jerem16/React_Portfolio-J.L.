import React from "react";
import PortfolioComp from "../../components/04-portfolio/PortfolioComp";
import "../Services/services.scss";
import "./porfolio.scss"

function Portfolio() {
    return (
        <main className="main-content">
            <section className="portfolio section" id="portfolio">
                <div className="container">
                    <PortfolioComp />
                </div>
            </section>
        </main>
    );
}

export default Portfolio;
