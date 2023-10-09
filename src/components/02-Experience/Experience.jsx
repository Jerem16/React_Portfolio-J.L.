import React, { useState } from "react";
import tech from "../../assets/data/technologie.json"; // Utilisez "tech" au lieu de "technologie"

function Experience({ experiences }) {
    const [openArticleStates, setOpenArticleStates] = useState({});

    const toggleArticle = (id) => {
        setOpenArticleStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <>
            {experiences.map((experience) => (
                <div key={experience.sectionId} className="timeline-item">
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
                            <div>
                                <ul>
                                    <li>{entry.description.describe}</li>
                                    <li>{entry.description.place}</li>
                                </ul>
                            </div>
                            <h4 className="">
                                <i
                                    className={`fa fa-chevron-up`}
                                    onClick={() => toggleArticle(entry.id)}
                                    style={{
                                        display: `${entry.display}`,
                                        transformOrigin: "center",
                                        transform: `rotate(${
                                            openArticleStates[entry.id]
                                                ? "180deg"
                                                : "90deg"
                                        })`,
                                        transition:
                                            "transform 0.3s ease-in-out",
                                    }}
                                ></i>{" "}
                                {entry.jobTitle}
                            </h4>
                            <div className="technologies">
                                {/* <strong>Technologies :</strong> */}

                                {Object.keys(tech.technologyImages).map(
                                    (technology, index) =>
                                        entry.technologies &&
                                        entry.technologies[technology] ===
                                            true && (
                                            <div key={index}>
                                                <abbr
                                                    title={
                                                        tech.technologySymbols[
                                                            technology
                                                        ]
                                                            ? tech
                                                                  .technologySymbols[
                                                                  technology
                                                              ]
                                                            : ""
                                                    }
                                                >
                                                    {technology &&
                                                        tech.technologyImages[
                                                            technology
                                                        ] && (
                                                            <img
                                                                src={require(`../../assets/img/skillsIcons/${tech.technologyImages[technology]}`)}
                                                                alt={technology}
                                                            />
                                                        )}
                                                </abbr>
                                            </div>
                                        )
                                )}
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
