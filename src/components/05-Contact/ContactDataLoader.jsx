import React from "react";
import useLangData from "../../utils/useLangData";

const ContactDataLoader = ({ children }) => {
    const contactData = useLangData("contact.json");

    if (!contactData?.contact) {
        return <div>Loading...</div>;
    }

    return children(contactData);
};

export default ContactDataLoader;
