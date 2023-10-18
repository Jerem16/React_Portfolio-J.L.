import React from "react";

const ServiceItem = ({ iconClass, title, description }) => {
    return (
        <div className="service-item-inner">
            <div className="icon">
                <i className={iconClass}></i>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

export default ServiceItem;
