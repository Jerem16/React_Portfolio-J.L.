import React from "react";

import CloseIcon from "../99-Svg_Icon/CloseIcon";

const renderModalContent = (selectedService, closeModal) => {
    if (selectedService) {
        return (
            <>
                <div className="service-item " id="modalPortfolio">
                    <div className="portfolio-item-inner shadow-dark">
                        <img
                            alt={selectedService.title}
                            src={require(`../../assets/img/webSite/${selectedService.imagePath}`)}
                        />
                    </div>
                </div>
                <button type="button" onClick={closeModal}>
                    <CloseIcon name="close" />
                </button>
            </>
        );
    }
};

export default renderModalContent;
