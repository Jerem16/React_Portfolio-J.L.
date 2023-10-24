import React from "react";
import ExperienceEntry from "./ExperienceEntry";

function ExperienceItem({ experience, toggleArticle, openArticleStates }) {
    return (
        <div key={experience.sectionId} className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> {experience.year}
            </h3>
            <h4 className="timeline-title">{experience.title}</h4>
            {experience.entries.map((entry) => (
                <ExperienceEntry
                    key={entry.index}
                    entry={entry}
                    toggleArticle={toggleArticle}
                    openArticleStates={openArticleStates}
                />
            ))}
        </div>
    );
}

export default ExperienceItem;
