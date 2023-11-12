import React, { lazy, Suspense } from "react";
const LazyExperienceArticle = lazy(() => import("./ExperienceArticle"));

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
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyExperienceArticle entry={entry} />
                </Suspense>
            )}
        </article>
    );
}

export default React.memo(ExperienceEntry);
