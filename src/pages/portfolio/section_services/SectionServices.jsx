import React from "react";
import ServicesComponent from "../../../components/03-Services/00-LayoutServices";
import "./services.scss";

function SectionServices({ openModalService }) {
    return (
        <section className="service section" id="services">
            <div className="container">
                <ServicesComponent openModalService={openModalService} />
            </div>
        </section>
    );
}

export default SectionServices;
