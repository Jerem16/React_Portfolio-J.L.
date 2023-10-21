import React, { useCallback, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "./Field/Field";
import Select from "./Select/Select";
import Button, { BUTTON_TYPES } from "../../components/Button/Button";
import "./form.scss";
import { useForm, ValidationError } from "@formspree/react";

// ... (autres parties du code restent inchangées)

const Form = ({ onSuccess, onError }) => {
    const [sending, setSending] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [resetSelect, setResetSelect] = useState(false);
    const [errorFields, setErrorFields] = useState({
        nom: "",
        prenom: "",
        email: "",
        type: "",
    });
    const formRef = useRef(null);
    const [state, handleSubmit] = useForm("xvojloaj");

    const [isSendContactValid, setIsSendContactValid] = useState(false);

    const resetForm = () => {
        setErrorFields({
            nom: "",
            prenom: "",
            email: "",
            type: "",
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

            const requiredFields = [
                "nom",
                "prenom",
                "email",
                "type",
                "message",
            ];
            const errors = {};
            requiredFields.forEach((fieldName) => {
                if (!formData.get(fieldName)) {
                    errors[fieldName] = "Ce champ est obligatoire";
                    hasErrors = true;
                }
            });

            setErrorFields(errors);

            if (hasErrors) {
                return;
            }

            setIsSendContactValid(true); // La validation réussit
            setSending(true);

            try {
                await mockContactApi();
                setSending(false);
                setFormSubmitted(true);
                onSuccess();
            } catch (err) {
                setSending(false);
                onError(err);
            }
        },
        [onSuccess, onError]
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

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form
            ref={formRef}
            onSubmit={(e) => isSendContactValid && handleSubmit(e)}
        >
            {/* ... le reste de votre code */}
        </form>
    );
};

// ... (PropTypes et defaultProps)

export default Form;
