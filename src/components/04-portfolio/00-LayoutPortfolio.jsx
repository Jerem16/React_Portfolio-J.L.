import React from "react";
import PortfolioDataLoader from "./PortfolioDataLoader";
import PortfolioItems from "./PortfolioItems";

function PortfolioComp({ openModalPortfolio }) {
    return (
        <PortfolioDataLoader>
            {(portfolioData) => (
                <>
                    <div className="row_top">
                        <div className="section-title">
                            <h2>{portfolioData.portfolioTitle}</h2>
                        </div>
                        <div className="portfolio-heading">
                            <h3>{portfolioData.lastProjectsTitle}</h3>
                        </div>
                    </div>
                    <div className="row-center">
                        <div className="service_container">
                            <PortfolioItems openModal={openModalPortfolio} />
                        </div>
                    </div>
                    <div className="col_end"></div>
                </>
            )}
        </PortfolioDataLoader>
    );
}

export default React.memo(PortfolioComp);
