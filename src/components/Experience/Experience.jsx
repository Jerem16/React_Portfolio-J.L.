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
                        <article
                            key={entry.index}
                            className="timeline-text"
                            style={{ marginBottom: `${entry.size}px` }}
                        >
                            <h4 className="">{entry.jobTitle}</h4>
                            <p className="Technologies">
                                <strong>{entry.techTitle}</strong>
                                {entry.technologies}
                            </p>
                            <div className="timeline-text">
                                <ul>
                                    <li>{entry.description.describe}</li>
                                    <li>{entry.description.place}</li>
                                </ul>
                            </div>

                            <p className="timeline-text">
                                {entry.description.paragraph}
                            </p>
                            <div className="hidden timeline-text">
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
