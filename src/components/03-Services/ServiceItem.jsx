import React from "react";

const ServiceItem = ({ iconClass, title, description }) => {
    return (
        <div className="service-item-inner">
            <div className="icon">
                <i className={iconClass}></i>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default React.memo(ServiceItem);
