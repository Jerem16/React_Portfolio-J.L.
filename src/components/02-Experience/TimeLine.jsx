import React from "react";
import Experience from "./Experience";

function Timeline({ experiences }) {
    const myTitle = experiences.length > 0 ? experiences[0].sectionTitle : "";
    return (
        <div className="experience padd-15px">
            <h3 className="title">{myTitle}</h3>
            <div className="row padd-15px">
                <div className="timeline-box">
                    <div className="timeline shadow-dark">
                        <Experience experiences={experiences} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
