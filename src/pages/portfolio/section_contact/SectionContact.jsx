import React, { useEffect } from "react";
import LayoutContact from "../../../components/05-Contact/00-LayoutContact";

import "./contact.scss";

function SectionContact() {
    // useEffect(() => {
    //     setTimeout(
    //         () => window.scrollTo(0, localStorage.getItem("position")),
    //         500
    //     );
    // }, []);

    // useEffect(() => {
    //     const scrollToBottom = () => {
    //         window.scrollTo(0, document.body.scrollHeight); 
    //     };

    //     const scrollToTop = () => {
    //         window.scrollTo(0, 0); 
    //     };
    //     scrollToBottom();
    //     setTimeout(() => {
    //         scrollToTop();
    //     }, 500);
    // }, []);
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <LayoutContact />
            </div>
        </section>
    );
}

export default SectionContact;
