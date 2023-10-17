import React from "react";
import ServicesComponent from "../../components/03-Services/ServicesComponent";
import "./services.scss";

function Services() {
    return (
        <main className="main-content">
            <section className="service section" id="service">
                <div className="container">
                    <ServicesComponent />
                </div>
            </section>
        </main>
    );
}

export default Services;
