import React from "react";
import tech from "../../../assets/data/technologie.json";
import { nanoid } from "nanoid";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ExperienceEntry({ entry, toggleArticle, openArticleStates }) {
    return (
        <article
            className={`timeline-text ${entry.addClass}`}
            key={entry.id}
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
                        <FontAwesomeIcon
                            icon={faChevronUp}
                            className="icon"
                            style={{
                                display: `${entry.display}`,
                                transformOrigin: "center",
                                transform: `rotate(${
                                    openArticleStates[entry.id]
                                        ? "180deg"
                                        : "270deg"
                                })`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                            id="darkArrow"
                        />
                    </div>
                </div>
            </h4>
            <div
                className={`div-anime ${
                    openArticleStates[entry.id] ? "open" : "close"
                }`}
                style={{
                    display: `${entry.display}`,
                }}
            >
                <p
                    className={`timeline-anime ${
                        openArticleStates[entry.id] ? "open" : "close"
                    }`}
                >
                    {entry.description.paragraph}
                </p>
                {entry.description.itemLi &&
                    entry.description.itemLi.length > 0 && (
                        <ul
                            className={`ul-anime ${
                                openArticleStates[entry.id] ? "open" : "close"
                            }`}
                        >
                            {entry.description.itemLi.map((item, itemIndex) => (
                                <li
                                    className={`ul-anime ${
                                        openArticleStates[entry.id]
                                            ? "open"
                                            : "close"
                                    }`}
                                    key={nanoid()}
                                    style={{
                                        transitionDelay: `${itemIndex * 0.1}s`,
                                    }}
                                >
                                    <i className="fas fa-check"></i>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                <div className="technologies">
                    {Object.keys(tech.technologyImages).map(
                        (technology, index) =>
                            entry.technologies &&
                            entry.technologies[technology] === true && (
                                <div key={nanoid()}>
                                    <abbr
                                        title={
                                            tech.technologySymbols[technology]
                                                ? tech.technologySymbols[
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
                                                    src={require(`../../../assets/img/skillsIcons/${tech.technologyImages[technology]}`)}
                                                    alt={technology}
                                                    width={30}
                                                    height={20}
                                                />
                                            )}
                                    </abbr>
                                </div>
                            )
                    )}
                </div>
                <div className="bd_Last"></div>
            </div>
        </article>
    );
}

export default ExperienceEntry;
