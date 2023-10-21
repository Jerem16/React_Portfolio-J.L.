import React, { useCallback, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "./Field/Field";
import Select from "./Select/Select";
import Button, { BUTTON_TYPES } from "../../components/Button/Button";
import "./form.scss";
import { useForm, ValidationError } from "@formspree/react";

// Fonction simulant une API de contact
const mockContactApi = () =>
    new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

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

            setSending(true);
            try {
                await handleSubmit(evt); // Exécute handleSubmit avec l'événement
                setSending(false);
                setFormSubmitted(true);
                onSuccess();
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

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    return (
        <form ref={formRef} onSubmit={sendContact}>
            <div className="row">
                <div className="col">
                    <Field
                        id="nom"
                        placeholder="Entrez votre nom"
                        label="Nom"
                        name="nom"
                        error={errorFields.nom}
                    />
                    <ValidationError
                        prefix="Nom"
                        field="nom"
                        errors={state.errors}
                    />
                    <Field
                        id="prenom"
                        placeholder="Entrez votre prénom"
                        label="Prénom"
                        name="prenom"
                        error={errorFields.prenom}
                    />
                    <ValidationError
                        prefix="Prénom"
                        field="prenom"
                        errors={state.errors}
                    />
                    <Select
                        id="type"
                        selection={["Personne", "Entreprise"]}
                        onChange={() => null}
                        label="Personne / Entreprise"
                        name="type"
                        type="large"
                        titleEmpty
                        error={errorFields.type}
                        reset={resetSelect}
                        placeholder="type"
                    />
                    <ValidationError
                        prefix="Type"
                        field="type"
                        errors={state.errors}
                    />
                    <Field
                        id="email"
                        placeholder="Entrez votre email"
                        label="Email"
                        name="email"
                        error={errorFields.email}
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <Button
                        data-testid="button-test-id"
                        type={BUTTON_TYPES.SUBMIT}
                        disabled={sending || state.submitting}
                    >
                        {sending ? "En cours" : "Envoyer"}
                    </Button>
                </div>
                <div className="col">
                    <Field
                        id="message"
                        name="message"
                        label="Message"
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
        </form>
    );
};

Form.propTypes = {
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
};

Form.defaultProps = {
    onError: () => null,
    onSuccess: () => null,
};

export default Form;
