import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import ServiceDataLoader from "../../03-Services/ServiceDataLoader";
import CloseIcon from "../../99-Svg_Icon/CloseIcon";

const ModalService = ({ selectedService, closeModal }) => {
    return (
        <ServiceDataLoader>
            {(serviceData) => {
                if (selectedService) {
                    const serviceItem = serviceData.services.find(
                        (item) => item.id === selectedService.id
                    );

                    if (serviceItem) {
                        return (
                            <div className="modal-background">
                                <div className="service-item" id="modalService">
                                    <div className="service-item-inner">
                                        <div className="icon">
                                            <i className={serviceItem.icon}></i>
                                        </div>
                                        <h4>{serviceItem.title}</h4>
                                        <p>{serviceItem.modalDescription}</p>
                                        <ul>
                                            {serviceItem.details.map(
                                                (detail) => (
                                                    <li key={shortid.generate()}>
                                                        <i className="fas fa-check"></i>
                                                        {detail}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                        <a
                                            className="btn"
                                            href={serviceItem.link.url}
                                            onClick={closeModal}
                                        >
                                            {serviceItem.link.title}
                                        </a>
                                    </div>
                                </div>
                                <button type="button" onClick={closeModal}>
                                    <CloseIcon name="close" />
                                </button>
                            </div>
                        );
                    }
                }
            }}
        </ServiceDataLoader>
    );
};

ModalService.propTypes = {
    selectedService: PropTypes.object,
    closeModal: PropTypes.func.isRequired,
};

export default React.memo(ModalService);
