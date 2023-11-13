import React from "react";
import useLangData from "../../utils/useLangData";
import Loader from "../Loader/Loader";

const ServiceDataLoader = ({ children }) => {
    const serviceData = useLangData("dataServices.json");

    if (!serviceData?.services) {
        return <div><Loader /></div>;
    }

    return children(serviceData);
};

export default ServiceDataLoader;
