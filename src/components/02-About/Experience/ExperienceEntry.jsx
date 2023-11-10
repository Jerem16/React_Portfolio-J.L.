import React from "react";
import ItemLi from "./ItemLi";
import TechnologyIcons from "./TechnologyIcons";

function ExperienceEntry({ entry, toggleArticle, openArticleStates }) {
    const isOpen = openArticleStates[entry.id];

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
                        <i
                            className={`fa fa-chevron-up icon`}
                            style={{
                                display: `${entry.display}`,
                                transformOrigin: "center",
                                transform: `rotate(${
                                    isOpen ? "180deg" : "270deg"
                                }`,
                                transition: "transform 0.3s ease-in-out",
                            }}
                            id="darkArrow"
                        ></i>
                    </div>
                </div>
            </h4>
            {isOpen && (
                <div
                    className={`div-anime open`}
                    style={{
                        display: `${entry.display}`,
                    }}
                >
                    <p className={`timeline-anime open`}>
                        {entry.description.paragraph}
                    </p>
                    {entry.description.itemLi &&
                    entry.description.itemLi.length > 0 ? (
                        <ItemLi entry={entry} description={entry.description} />
                    ) : null}
                    <TechnologyIcons entry={entry} />
                    <div className="bd_Last"></div>
                </div>
            )}
        </article>
    );
}

export default React.memo(ExperienceEntry);
