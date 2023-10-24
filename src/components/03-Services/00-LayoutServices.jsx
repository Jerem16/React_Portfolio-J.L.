import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import ModalService from "../Modal/ModalService/ModalService";
import Modal from "../Modal/Modal";
import ServiceDataLoader from "./ServiceDataLoader";
import CloseIcon from "../99-Svg_Icon/CloseIcon";

const ServicesComponent = () => {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <ServiceDataLoader>
            {(serviceData) => (
                <>
                    <div className="row_top">
                        <div className="section-title">
                            <h2>{serviceData.title}</h2>
                        </div>
                    </div>
                    <div className="row-center">
                        <div className="service_container">
                            {serviceData.services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="service-item"
                                    onClick={() => openModal(service)}
                                >
                                    <ServiceItem
                                        iconClass={service.icon}
                                        title={service.title}
                                        description={service.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col_end"></div>{" "}
                    {selectedService && (
                        <Modal
                            opened={true}
                            Content={
                                <div>
                                    <ModalService
                                        service={selectedService}
                                        iconClass={selectedService.icon}
                                    />
                                    <button type="button" onClick={closeModal}>
                                        <CloseIcon name="close" />
                                    </button>
                                </div>
                            }
                        ></Modal>
                    )}
                </>
            )}
        </ServiceDataLoader>
    );
};

export default ServicesComponent;
