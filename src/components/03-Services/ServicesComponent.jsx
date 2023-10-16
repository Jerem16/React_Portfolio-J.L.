import React from "react";
import ServiceItem from "./ServiceItem";
import dataServices from "../../assets/data/fr/dataServices.json";

const ServicesComponent = () => {
    const services = dataServices.services;
    console.log("services", services);

    return (
        <section className="service section" id="service">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="service_container">
                        {services.map((service, index) => (
                            <ServiceItem
                                key={index}
                                iconClass={service.icon} // Utilisez service.icon au lieu de service.iconClass
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesComponent;
