import React, { useState, useEffect } from "react";
import ExperienceItem from "./ExperienceItem";

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
        const handleOpacityZeroElements = () => {
            const closeElements = document.querySelectorAll(
                ".about-content .timeline .timeline-item .close"
            );
            const openElements = document.querySelectorAll(
                ".about-content .timeline .timeline-item .open"
            );

            closeElements.forEach((element) => {
                if (
                    window
                        .getComputedStyle(element)
                        .getPropertyValue("opacity") === "0"
                ) {
                    element.classList.add("hidden");
                }
            });

            openElements.forEach((element) => {
                if (element.classList.contains("open")) {
                    element.classList.add("visible");
                    element.classList.remove("hidden");
                } else {
                    element.classList.remove("visible");
                }
            });
        };

        handleOpacityZeroElements();
    }, [refreshCloseElements]);

    return (
        <>
            {experiences.map((experience) => (
                <ExperienceItem
                    key={experience.sectionId}
                    experience={experience}
                    toggleArticle={toggleArticle}
                    openArticleStates={openArticleStates}
                />
            ))}
        </>
    );
}

export default React.memo(Experience);
