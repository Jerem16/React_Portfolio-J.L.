import React from "react";
import LayoutContact from "../../components/05-Contact/00-LayoutContact";
// import "../Services/services.scss";
import "./contact.scss";

function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <LayoutContact />
            </div>
        </section>
    );
}

export default Contact;
