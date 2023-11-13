import React from "react";
import "./button.scss";

export const BUTTON_TYPES = {
    DEFAULT: 1,
    DOWNLOAD: 2,
    SUBMIT: 3,
};

const Button = ({
    type = BUTTON_TYPES.DEFAULT,
    to,
    className,
    href,
    target,
    children, 
    title,
    onClick,
    disabled,
}) => {
    switch (type) {
        case BUTTON_TYPES.DOWNLOAD:
            return (
                <a href={href} target={target} className={`btn_a ${className}`}>
                    {children}
                </a>
            );
        case BUTTON_TYPES.SUBMIT:
            return (
                <input
                    disabled={disabled}
                    className={`btn ${className}`}
                    type="submit"
                    value={children}
                    onClick={onClick}
                    title={title}
                />
            );
        default:
            return (
                <a href={href} target={target} className={`btn_a ${className}`}>
                    {children}
                </a>
            );
    }
};

export default React.memo(Button);
