import React from "react";
import shortid from "shortid";

function PersonalInfo({ info }) {
    return (
        <>
            {Object.entries(info).map(([key, value]) => (
                <div className="info-item" key={shortid.generate()}>
                    <p>
                        {key} : <span>{value}</span>
                    </p>
                </div>
            ))}
        </>
    );
}

export default PersonalInfo;
