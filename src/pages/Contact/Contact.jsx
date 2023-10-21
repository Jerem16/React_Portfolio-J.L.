import React from "react";
import Form from "../../components/05-Contact/FormTest";
import "../Services/services.scss";
import "./Contact.scss";

function Contact() {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <Form />
            </div>
        </section>
    );
}

export default Contact;
