import React from "react";

function Experience({ experiences }) {
    return (
        <>
            {experiences.map((experience, index) => (
                <div key={experience.id} className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> {experience.year}
                    </h3>
                    <h4 className="timeline-title">{experience.title}</h4>
                    {experience.entries.map((entry) => (
                        <article key={entry.index} className="timeline-text">
                            <h4 className="exp_h4">{entry.jobTitle}</h4>
                            <p className="Technologies">
                                <strong>{entry.techTitle}</strong>
                                {entry.technologies}
                            </p>
                            <p>
                                <ul>
                                    <li>{entry.description.describe}</li>
                                    <li>{entry.description.place}</li>
                                </ul>
                            </p>
                            <div className="hidden">
                                <p>{entry.description.paragraph}</p>
                                {entry.description.itemLi &&
                                    entry.description.itemLi.length > 0 && (
                                        <ul>
                                            {entry.description.itemLi.map(
                                                (item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                            </div>
                        </article>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Experience;
