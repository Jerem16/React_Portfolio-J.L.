import React from "react";
import Experience from "./03-Experience";

function Timeline({ experiences, technologySymbols, technologyImages }) {
    const myTitle = experiences.length > 0 ? experiences[0].sectionTitle : "";
    return (
        <div className="experience">
            <h3 className="title">{myTitle}</h3>
            <div className="row ">
                <div className="timeline-box">
                    <div className="timeline shadow-dark">
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
