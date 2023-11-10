import React from "react";
import { nanoid } from "nanoid";

function PersonalInfo({ info }) {
    return (
        <>
            {Object.entries(info).map(([key, value]) => (
                <div className="info-item" key={nanoid()}>
                    <p>
                        {key} : <span>{value}</span>
                    </p>
                </div>
            ))}
        </>
    );
}

export default React.memo(PersonalInfo);
