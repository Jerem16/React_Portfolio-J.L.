import React from "react";

const ContactInfoItem = ({ iconClass, title, content }) => {
    return (
        <div className="contact-info-item">
            <div className="icon">
                <i className={iconClass}></i>
            </div>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
};

export default React.memo(ContactInfoItem);
