import React from "react";

const TopContact = ({ data }) => {
    return (
        <div className="row_top">
            <div className="section-title">
                <h2>{data.contact["section-title"]}</h2>
            </div>
            <div className="contact-content ">
                <h3 className="contact-title">
                    {data.contact["contact-title"]}
                </h3>
                <h4 className="contact-sub-title">
                    {data.contact["contact-sub-title"]}
                </h4>
            </div>
        </div>
    );
};

export default React.memo(TopContact);
