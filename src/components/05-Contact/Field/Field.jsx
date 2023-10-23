import PropTypes from "prop-types";
import React from "react";
import "./form.scss";

export const FIELD_TYPES = {
    INPUT_TEXT: 1,
    TEXTAREA: 2,
};

const Field = ({
    type = FIELD_TYPES.TEXTAREA,
    label,
    name,
    placeholder,
    error,
    onChange,
    autoComplete,
}) => {
    let component;
    switch (type) {
        case FIELD_TYPES.INPUT_TEXT:
            component = (
                <input
                    label={label}
                    autoComplete={autoComplete}
                    className="form-control"
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    data-testid={`field-testid-${name}`} // Ajout du data-testid pour les tests unitaires
                    onChange={onChange} // Ajout du changement de contenu
                />
            );
            break;
        case FIELD_TYPES.TEXTAREA:
            component = (
                <textarea
                    className="form-control"
                    name={name}
                    placeholder={placeholder}
                    data-testid={`field-testid-${name}`} // Ajout du data-testid pour les tests unitaires
                />
            );
            break;
        default:
            component = (
                <input
                    className="form-control"
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    data-testid={name}
                />
            );
    }
    return (
        <div className={`inputField ${error ? "error" : ""}`}>
            {/* <label htmlFor={name}>{label}</label> */}
            {component}
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

Field.propTypes = {
    type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
};

Field.defaultProps = {
    label: "",
    placeholder: "",
    type: FIELD_TYPES.INPUT_TEXT,
    name: "field-name",
    error: "",
    onChange: () => {},
};

export default Field;
