import React from "react";


import ContactForm from "./02-ContactForm";
import ContactInfoItem from "./01-ContactInfoItem";

import contactIcon from "../../assets/data/contactIcon.json";
import contact from "../../assets/data/en/contact.json";


const LayoutContact = () => {
    return (
        <>
            <div className="row_top">
                <div className="section-title">
                    <h2>{contact.contact["section-title"]}</h2>
                </div>
            </div>
            <div className="row_center">
                <div className="about-content ">
                    <h3 className="contact-title">
                        {contact.contact["contact-title"]}
                    </h3>
                    <h4 className="contact-sub-title">
                        {contact.contact["contact-sub-title"]}
                    </h4>
                </div>
                {/* </div>
            <div className="row_center"> */}
                {contactIcon.contactInfoItem.map((item, index) => (
                    <ContactInfoItem
                        iconClass={item.icon}
                        title={contact.contact.contactInfo[index].title}
                        content={item.content}
                        key={item.id}
                    />
                ))}
                <div className="about-content">
                    <h3 className="contact-title">
                        {contact.contact["send-email-title"]}
                    </h3>
                    <h4 className="contact-sub-title">
                        {contact.contact["send-email-sub-title"]}
                    </h4>
                </div>{" "}
                <div className="about-content">
                    {/* 
                    <Modal
                        Content={
                            <div className="ModalMessage--success">
                                <div>Message envoyé !</div>
                                <p>
                                    Merci pour votre message nous tâcherons de
                                    vous répondre dans les plus brefs délais
                                </p>
                            </div>
                        }
                    >
                        {({ setIsOpened }) => (
                            <ContactForm
                                onSuccess={() => setIsOpened(true)}
                                onError={() => null}
                            />
                        )}
                    </Modal> 
                    */}
                    <ContactForm />
                </div>
            </div>

            <div className="col_end"></div>
        </>
    );
};

export default LayoutContact;
