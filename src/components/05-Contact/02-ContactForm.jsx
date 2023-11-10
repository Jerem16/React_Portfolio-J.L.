import React, {
    useCallback,
    useState,
    useRef,
    useEffect,
    useMemo,
} from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "./Field/Field";

import Button, { BUTTON_TYPES } from "../../components/Button/Button";
import { useForm, ValidationError } from "@formspree/react";
import { useDispatch } from "react-redux";
import { setModalContact } from "../../redux/reducers/classesSlice";

const ContactForm = ({
    onSuccess,
    onError,
    lastName,
    email,
    subject,
    message,
    send,
    isSending,
    formErrors,
}) => {
    const dispatch = useDispatch();

    const [sending, setSending] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errorFields, setErrorFields] = useState({
        nom: "",
        email: "",
        subject: "",
        message: "",
    });
    const formRef = useRef(null);
    const [state, handleSubmit] = useForm("xyyqowjk");

    const emailRegex = useMemo(() => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    }, []);

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
    };

    const sendContact = useCallback(
        async (evt) => {
            evt.preventDefault();
            const form = evt.target;
            const formData = new FormData(form);
            let hasErrors = false;

            const requiredFields = ["nom", "email", "subject", "message"];
            const errors = {};
            if (!emailRegex.test(formData.get("email"))) {
                errors["email"] = formErrors.invalidEmail;
                hasErrors = true;
            }
            requiredFields.forEach((fieldName) => {
                if (!formData.get(fieldName)) {
                    errors[fieldName] = formErrors.required;
                    hasErrors = true;
                }
            });

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
                dispatch(setModalContact(true));
            } catch (err) {
                setSending(false);
                onError(err);
            }
        },
        [
            onSuccess,
            onError,
            handleSubmit,
            emailRegex,
            formErrors.invalidEmail,
            formErrors.required,
            dispatch,
        ]
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
        <form className="contact-form" ref={formRef} onSubmit={sendContact}>
            <div className="row">
                <div className="form-item col-6">
                    <div className="form-group">
                        <Field
                            id="nom"
                            placeholder={lastName}
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
                            placeholder={email}
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
                            placeholder={subject}
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
                            placeholder={message}
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
                        className=""
                        // children={send}
                        disabled={sending || state.submitting}
                    >
                        {sending ? isSending : send}
                    </Button>
                </div>
            </div>
        </form>
    );
};

ContactForm.propTypes = {
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    lastName: PropTypes.string,
    email: PropTypes.string,
    subject: PropTypes.string,
    message: PropTypes.string,
    send: PropTypes.string,
    isSending: PropTypes.string,
};

ContactForm.defaultProps = {
    onError: () => null,
    onSuccess: () => null,
};

export default React.memo(ContactForm);
