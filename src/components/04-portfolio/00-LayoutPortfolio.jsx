import React, { useState } from "react";
import Modal from "../Modal/Modal";
import PortfolioDataLoader from "./PortfolioDataLoader";
import renderModalContent from "./01-renderModalContent";
import renderPortfolioItems from "./01-renderPortfolioItems";

function PortfolioComp() {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (data) => {
        setSelectedService(data);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

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
                            {renderPortfolioItems(openModal)}
                        </div>
                    </div>
                    <div className="col_end"></div>
                    {selectedService && (
                        <Modal
                            opened={true}
                            Content={renderModalContent(
                                selectedService,
                                closeModal
                            )}
                        />
                    )}
                </>
            )}
        </PortfolioDataLoader>
    );
}

export default React.memo(PortfolioComp);
