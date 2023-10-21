import React, { useState, useEffect } from "react";
import ServiceItem from "./ServiceItem";
import ModalService from "../Modal/ModalService/ModalService";
import Modal from "../Modal/Modal"; // Assurez-vous d'importer Icon depuis le bon emplacement

import { useSelector } from "react-redux";
import { loadLanguageData } from "../../utils/loadLanguageData";

import CloseIcon from "../99-Svg_Icon/CloseIcon";
const ServicesComponent = () => {
    const [selectedService, setSelectedService] = useState(null);

    const openModal = (service) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    const selectedLanguage = useSelector((state) => state.language.language);
    const [languageData, setLanguageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadLanguageData(
                selectedLanguage,
                "dataServices.json"
            );
            setLanguageData(data);
        };

        fetchData();
    }, [selectedLanguage]);

    const data = languageData;

    if (!data || !data.services || !languageData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="row_top">
                <div className="section-title">
                    <h2>Services</h2>
                </div>
            </div>

            <div className="row-center">
                <div className="service_container">
                    {data.services.map((service, index) => (
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
    );
};

export default ServicesComponent;
