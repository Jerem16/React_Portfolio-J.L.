import React from "react";
import ServiceItem from "./ServiceItem";
import ServiceDataLoader from "./ServiceDataLoader";

const ServicesComponent = ({ openModalService }) => {
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
                                    onClick={() => openModalService(service)}
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
                </>
            )}
        </ServiceDataLoader>
    );
};

export default React.memo(ServicesComponent);
