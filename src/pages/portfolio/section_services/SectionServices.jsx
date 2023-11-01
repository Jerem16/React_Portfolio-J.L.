import React from "react";
import ServicesComponent from "../../../components/03-Services/00-LayoutServices";
import "./services.scss";

function SectionServices() {
    return (
        <section className="service section" id="services">
            <div className="container">
                <ServicesComponent />
            </div>
        </section>
    );
}

export default SectionServices;
