import React from "react";
import "./button.scss";

function Button({ href, btnName, btnClass }) {
    return (
        <a href={href} className={`btn ${btnClass}`}>
            {btnName}
        </a>
    );
}

export default Button;
