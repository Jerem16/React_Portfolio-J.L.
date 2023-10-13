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
                            className={`timeline-text ${experience.addClass}`}
                            key={entry.index}
                            onClick={() => toggleArticle(entry.id)}
                            style={{ marginBottom: `${entry.size}px` }}
                        >
                            <div>
                                <ul>
                                    <li>{entry.description.describe}</li>
                                    <li>{entry.description.place}</li>
                                </ul>
                            </div>
                            <h4 className="jobTitle">
                                {entry.jobTitle}
                                <div className="bd_Bottom">
                                    <div className="fa-Circle">
                                        <i
                                            className={`fa fa-chevron-up `}
                                            style={{
                                                display: `${entry.display}`,
                                                transformOrigin: "center",
                                                transform: `rotate(${
                                                    openArticleStates[entry.id]
                                                        ? "180deg"
                                                        : "270deg"
                                                })`,
                                                transition:
                                                    "transform 0.3s ease-in-out",
                                            }}
                                        ></i>
                                    </div>
                                </div>
                            </h4>
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
                                                        <i className="fas fa-check"></i>
                                                        {item}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    )}
                                <div
                                    className={`technologies `}
                                >
                                    {/* <strong></strong> */}
                                    {/* {experience.techTitle} */}

                                    {Object.keys(tech.technologyImages).map(
                                        (technology, index) =>
                                            entry.technologies &&
                                            entry.technologies[technology] ===
                                                true && (
                                                <div key={index}>
                                                    <abbr
                                                        title={
                                                            tech
                                                                .technologySymbols[
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
                                                            tech
                                                                .technologyImages[
                                                                technology
                                                            ] && (
                                                                <img
                                                                    src={require(`../../assets/img/skillsIcons/${tech.technologyImages[technology]}`)}
                                                                    alt={
                                                                        technology
                                                                    }
                                                                />
                                                            )}
                                                    </abbr>
                                                </div>
                                            )
                                    )}
                                </div>
                                <div
                                    className={`bd_Last ${
                                        openArticleStates ? "open" : "close"
                                    }`}
                                ></div>
                            </div>
                        </article>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Experience;
