import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadLanguageData } from "../../utils/loadLanguageData";
import ContactForm from "./02-ContactForm";
import ContactInfoItem from "./01-ContactInfoItem";
import ContactDataLoader from "./ContactDataLoader";
import contactIcon from "../../assets/data/contactIcon.json";

const LayoutContact = () => {
    return (
        <ContactDataLoader>
            {(data) => (
                <>
                    <div className="row_top">
                        <div className="section-title">
                            <h2>{data.contact["section-title"]}</h2>
                        </div>
                    </div>
                    <div className="row_center">
                        <div className="about-content ">
                            <h3 className="contact-title">
                                {data.contact["contact-title"]}
                            </h3>
                            <h4 className="contact-sub-title">
                                {data.contact["contact-sub-title"]}
                            </h4>
                        </div>
                        <div className="row-col">
                            {contactIcon.contactInfoItem.map((item, index) => (
                                <ContactInfoItem
                                    iconClass={item.icon}
                                    title={
                                        data.contact.contactInfo[index].title
                                    }
                                    content={item.content}
                                    key={item.id}
                                />
                            ))}
                        </div>
                        <div className="about-content">
                            <h3 className="contact-title">
                                {data.contact["send-email-title"]}
                            </h3>
                            <h4 className="contact-sub-title">
                                {data.contact["send-email-sub-title"]}
                            </h4>
                        </div>{" "}
                        <div className="about-content">
                            <ContactForm
                                lastName={data.contact.formFields.lastName}
                                email={data.contact.formFields.email}
                                subject={data.contact.formFields.subject}
                                message={data.contact.formFields.message}
                                send={data.contact.buttonText.send}
                                isSending={data.contact.buttonText.isSending}
                                title={data.contact.successMessage.title}
                                description={
                                    data.contact.successMessage.description
                                }
                                description2={
                                    data.contact.successMessage.description2
                                }
                                formErrors={data.contact.formErrors}
                            />
                        </div>
                    </div>

                    <div className="col_end"></div>
                </>
            )}
        </ContactDataLoader>
    );
};

export default LayoutContact;
