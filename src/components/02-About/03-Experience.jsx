import React, { useState, useEffect } from "react";
import tech from "../../assets/data/technologie.json";

function Experience({ experiences }) {
    const [openArticleStates, setOpenArticleStates] = useState({});
    const [refreshCloseElements, setRefreshCloseElements] = useState(false);

    const toggleArticle = (id) => {
        setOpenArticleStates((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));

        setRefreshCloseElements(true);
    };

    useEffect(() => {
        const elementsWithOpacityZero = document.querySelectorAll(
            ".about-content .timeline .timeline-item .close"
        );
        const elementsOpen = document.querySelectorAll(
            ".about-content .timeline .timeline-item .open"
        );

        if (elementsWithOpacityZero) {
            elementsWithOpacityZero.forEach((element) => {
                if (
                    window
                        .getComputedStyle(element)
                        .getPropertyValue("opacity") === "0"
                ) {
                    element.classList.add("hidden");
                }
            });
        }

        if (elementsOpen) {
            elementsOpen.forEach((element) => {
                if (element.classList.contains("open")) {
                    element.classList.add("visible");
                    element.classList.remove("hidden");
                } else {
                    element.classList.remove("visible");
                }
            });
        }

        // Si un élément ouvert est refermé, attendez 0.5 seconde, puis réactualisez elementsWithOpacityZero
        if (refreshCloseElements) {
            setTimeout(() => {
                const updatedElementsWithOpacityZero =
                    document.querySelectorAll(
                        ".about-content .timeline .timeline-item .close"
                    );
                updatedElementsWithOpacityZero.forEach((element) => {
                    if (
                        window
                            .getComputedStyle(element)
                            .getPropertyValue("opacity") === "0"
                    ) {
                        element.classList.add("hidden");
                    }
                });
                setRefreshCloseElements(false); // Réinitialisez le drapeau après la mise à jour
            }, 500); // Attendre 500 ms (0.5s) avant de rafraîchir
        }
    }, [refreshCloseElements]);

    // Ajoutez un écouteur de clic à la fenêtre pour déclencher le rafraîchissement
    useEffect(() => {
        window.addEventListener("click", () => {
            setRefreshCloseElements(true);
        });

        // Retirez l'écouteur de clic lorsque le composant est démonté
        return () => {
            window.removeEventListener("click", () => {
                setRefreshCloseElements(true);
            });
        };
    }, []);

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
                                            className={`fa fa-chevron-up`}
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
                                            id="darkArrow"
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
                                        entry.description.class
                                    } ${
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
                                <a className="technologies">
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
                                </a>
                                <div className="bd_Last"></div>
                            </div>
                        </article>
                    ))}
                </div>
            ))}
        </>
    );
}

export default Experience;
