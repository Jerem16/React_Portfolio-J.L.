import React, { useState } from "react";

function Experience({ experiences }) {
    // Créez un objet d'états pour suivre l'état d'ouverture de chaque article par ID
    const [openArticleStates, setOpenArticleStates] = useState({});

    // Fonction pour basculer l'état d'ouverture d'un article par ID
    const toggleArticle = (id) => {
        setOpenArticleStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            {experiences.map((experience, experienceIndex) => (
                <div key={experience.sectionId} className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> {experience.year}
                    </h3>
                    <h4 className="timeline-title">{experience.title}</h4>
                    {experience.entries.map((entry, entryIndex) => (
                        <article
                            key={entry.index}
                            className="timeline-text"
                            style={{ marginBottom: `${entry.size}px` }}
                        >
                            <h4 className="">
                                {entry.jobTitle}{" "}
                                <i
                                    className={`fa fa-chevron-up`} // Utilisation de l'état pour le chevron
                                    onClick={() => toggleArticle(entry.id)} // Inversion de l'état lors du clic
                                    style={{
                                        display: `${entry.display}`,
                                        // color: "lightgrey",
                                        transformOrigin: "center",
                                        transform: `rotate(${
                                            openArticleStates[entry.id]
                                                ? "180deg"
                                                : "90deg"
                                        })`,
                                        transition:
                                            "transform 0.3s ease-in-out", // Ajustez la transition ici
                                    }}
                                ></i>
                            </h4>
                            <p className="Technologies">
                                <strong>{entry.techTitle}</strong>
                                {entry.technologies}
                            </p>
                            <div>
                                <ul>
                                    <li>{entry.description.describe}</li>
                                    <li>{entry.description.place}</li>
                                </ul>
                            </div>
                            <div
                                className={`div-anime ${
                                    openArticleStates[entry.id]
                                        ? "open"
                                        : "close"
                                }`}
                                style={{
                                    display: `${entry.display}`,
                                }}
                            >
                                <p
                                    className={`timeline-anime ${
                                        openArticleStates[entry.id]
                                            ? "open"
                                            : "close"
                                    }`}
                                >
                                    {entry.description.paragraph}
                                </p>
                                {entry.description.itemLi &&
                                    entry.description.itemLi.length > 0 && (
                                        <ul
                                            className={`ul-anime ${
                                                openArticleStates[entry.id]
                                                    ? "open"
                                                    : "close"
                                            }`}
                                        >
                                            {entry.description.itemLi.map(
                                                (item, itemIndex) => (
                                                    <li
                                                        className={`ul-anime ${
                                                            openArticleStates[
                                                                entry.id
                                                            ]
                                                                ? "open"
                                                                : "close"
                                                        }`}
                                                        key={itemIndex}
                                                        style={{
                                                            transitionDelay: `${
                                                                itemIndex * 0.1
                                                            }s`,
                                                        }}
                                                    >
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
