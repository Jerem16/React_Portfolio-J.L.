import React, { useState } from "react";
import ServiceItem from "./ServiceItem";
import dataServices from "../../assets/data/fr/dataServices.json";
import ModalService from "../Modal/ModalService/ModalService";
import Modal from "../Modal/Modal"; // Assurez-vous d'importer Icon depuis le bon emplacement
import CloseIcon from "../99-Svg_Icon/CloseIcon";
const ServicesComponent = () => {
    const services = dataServices.services;
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <>
            <div className="row_top">
                <div className="section-title">
                    <h2>Services</h2>
                </div>
            </div>

            <div className="row-center">
                <div className="service_container">
                    {services.map((service, index) => (
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
            <div className="col_end"></div>

            {/* Le composant Modal avec le composant ModalService (si un service est sélectionné) */}
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
                                <CloseIcon name="close" />{" "}
                                {/* Ajoutez l'icône "close" cliquable ici */}
                            </button>
                        </div>
                    }
                >
                    {({ isOpened, setIsOpened }) => (
                        <button
                            type="button"
                            onClick={closeModal}
                            className="hidden"
                        >
                            Fermer le modal
                        </button>
                    )}
                </Modal>
            )}
        </>
    );
};

export default ServicesComponent;
