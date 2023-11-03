import React from "react";
import Experience from "./Experience/03-Experience";

function Timeline({ experiences, technologySymbols, technologyImages }) {
    const myTitle = experiences.length > 0 ? experiences[0].sectionTitle : "";
    const classTitle = experiences.length > 0 ? experiences[0].classTitle : "";
    return (
        <div className="experience">
            <h3 className={`title ${classTitle}`}>{myTitle}</h3>
            <div className="row ">
                <div className="timeline-box">
                    <div className="timeline">
                        <Experience
                            experiences={experiences}
                            technologySymbols={technologySymbols}
                            technologyImages={technologyImages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
