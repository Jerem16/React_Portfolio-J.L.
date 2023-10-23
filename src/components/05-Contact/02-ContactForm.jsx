import React, { useCallback, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "./Field/Field";

import Button, { BUTTON_TYPES } from "../../components/Button/Button";
import "./form.scss";
import { useForm, ValidationError } from "@formspree/react";
import Modal from "../Modal/Modal";
import ModalForm from "../Modal/ModalForm/ModalForm";
import CloseIcon from "../99-Svg_Icon/CloseIcon";
import contactFormContent from "../../assets/data/en/contactFormContent.json";

const ContactForm = ({ onSuccess, onError }) => {
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const openModal = () => {
        setIsSuccessModalOpen(true);
    };

    const closeModal = () => {
        setIsSuccessModalOpen(false);
    };

    const [sending, setSending] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [resetSelect, setResetSelect] = useState(false);
    const [errorFields, setErrorFields] = useState({
        nom: "",
        prenom: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    });
    const formRef = useRef(null);
    const [state, handleSubmit] = useForm("xvojloaj");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const resetForm = () => {
        setErrorFields({
            nom: "",
            email: "",
            subject: "",
            message: "",
        });

        if (formRef.current) {
            formRef.current.reset();
        }

        setFormSubmitted(false);
        setResetSelect(true);
    };

    const sendContact = useCallback(
        async (evt) => {
            evt.preventDefault();
            const form = evt.target;
            const formData = new FormData(form);
            let hasErrors = false;

            const requiredFields = ["nom", "email", "subject", "message"];
            const errors = {};
            requiredFields.forEach((fieldName) => {
                if (!formData.get(fieldName)) {
                    errors[fieldName] = contactFormContent.formErrors.required;
                    hasErrors = true;
                }
            });

            if (!emailRegex.test(formData.get("email"))) {
                errors["email"] = contactFormContent.formErrors.invalidEmail;
                hasErrors = true;
            }

            setErrorFields(errors);

            if (hasErrors) {
                return;
            }

            setSending(true);
            try {
                await handleSubmit(evt);
                setSending(false);
                setFormSubmitted(true);
                onSuccess();
                setIsSuccessModalOpen(true);
            } catch (err) {
                setSending(false);
                onError(err);
            }
        },
        [onSuccess, onError, handleSubmit]
    );

    useEffect(() => {
        let timeoutId;

        if (formSubmitted) {
            timeoutId = setTimeout(() => {
                resetForm();
            }, 1500);
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [formSubmitted]);

    return (
        <>
            <form className="contact-form" ref={formRef} onSubmit={sendContact}>
                <div className="row">
                    <div className="form-item col-6">
                        <div className="form-group">
                            <Field
                                id="nom"
                                placeholder={
                                    contactFormContent.formFields.lastName
                                }
                                name="nom"
                                error={errorFields.nom}
                                autoComplete="family-name"
                            />
                            <ValidationError
                                prefix="Last Name"
                                field="nom"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="form-item col-6">
                        <div className="form-group">
                            <Field
                                id="email"
                                placeholder={
                                    contactFormContent.formFields.email
                                }
                                name="email"
                                error={errorFields.email}
                                autoComplete="on"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-item col-12">
                        <div className="form-group">
                            <Field
                                id="subject"
                                placeholder={
                                    contactFormContent.formFields.subject
                                }
                                name="subject"
                                error={errorFields.subject}
                            />
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-item col-12">
                        <div className="form-group">
                            <Field
                                id="message"
                                name="message"
                                placeholder={
                                    contactFormContent.formFields.message
                                }
                                type={FIELD_TYPES.TEXTAREA}
                                error={errorFields.message}
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-item col-12">
                        <Button
                            type={BUTTON_TYPES.SUBMIT}
                            className="btn"
                            children={contactFormContent.buttonText.send}
                            disabled={sending || state.submitting}
                        >
                            {sending
                                ? contactFormContent.buttonText.sending
                                : contactFormContent.buttonText.send}
                        </Button>
                    </div>
                </div>
            </form>
            {isSuccessModalOpen && (
                <Modal
                    opened={true}
                    Content={
                        <>
                            <ModalForm
                                title={contactFormContent.successMessage.title}
                                description={
                                    contactFormContent.successMessage
                                        .description
                                }
                                description2={
                                    contactFormContent.successMessage
                                        .description2
                                }
                            />
                            <button type="button" onClick={closeModal}>
                                <CloseIcon name="close" />
                            </button>
                        </>
                    }
                />
            )}
        </>
    );
};

ContactForm.propTypes = {
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
};

ContactForm.defaultProps = {
    onError: () => null,
    onSuccess: () => null,
};

export default ContactForm;
