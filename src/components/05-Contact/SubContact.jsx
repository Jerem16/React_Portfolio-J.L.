import React from "react";

const SubContact = ({ data }) => {
    return (
        <div className="contact-content">
            <h3 className="contact-title">
                {data.contact["send-email-title"]}
            </h3>
            <h4 className="contact-sub-title">
                {data.contact["send-email-sub-title"]}
            </h4>
        </div>
    );
};

export default React.memo(SubContact);
