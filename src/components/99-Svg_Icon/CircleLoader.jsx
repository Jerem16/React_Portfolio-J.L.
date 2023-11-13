import React from "react";
import "./gitHub.scss";

const CircleLoader = ({ addClass }) => {
    return (
        <span className={`${addClass}`}>
            <svg
                viewBox="0 0 288 288"
                // enableBackground="new 0 0 128 128"
                xmlSpace="preserve"
                className="loaderCircle"
            >
                <path
                    className="loader-icon"
                    d="M72 144c0 39.8 32.2 72 72 72s72-32.2 72-72h72C288 64.5 223.5 0 144 0v72c-39.8 0-72 32.2-72 72z"
                />
            </svg>
        </span>
    );
};
export default React.memo(CircleLoader);

// <?xml version="1.0" encoding="utf-8"?>
// <!-- Generator: Adobe Illustrator 25.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
// <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
// 	 viewBox="0 0 288 288" style="enable-background:new 0 0 288 288;" xml:space="preserve">
// <path d="M144,216c-39.8,0-72-32.2-72-72c0-39.8,32.2-72,72-72V0C64.5,0,0,64.5,0,144s64.5,144,144,144s144-64.5,144-144h-72
// 	C216,183.8,183.8,216,144,216z"/>
// </svg>
