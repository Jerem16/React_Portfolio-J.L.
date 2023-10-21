import React, { useState, useEffect } from "react";
import Button, { BUTTON_TYPES } from "../Button/Button";
// import about from "../../assets/data/en/about.json";

import Timeline from "./02-TimeLine";
import { useSelector } from "react-redux";
import { loadLanguageData } from "../../utils/loadLanguageData";
import CV from "../../assets/cv/cv2022.pdf";



function Profile() {
    const selectedLanguage = useSelector((state) => state.language.language);
    const [languageData, setLanguageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadLanguageData(selectedLanguage, "about.json");
            setLanguageData(data);
        };

        fetchData();
    }, [selectedLanguage]);

    const data = languageData;

    if (!data || !data.profile || !languageData) {
        return <div>Loading...</div>;
    }

    const {
        section,
        presentation,
        jobTitle,
        description,
        personalInfo,
        buttons,
        skills,
    } = data.profile;

    const button1 = {
        to: "/contact",
        class: "hire-me",
    };
    const button2 = {
        href: "/assets/cv/CV-2022.pdf",
        // src: `process.env.PUBLIC_URL + "/assets/cv/CV-2022.pdf"`,
        class: "hire-me",
    };

    return (
        <>
            <div className="row_top">
                <div className="section-title">
                    <h2>{section}</h2>
                </div>
            </div>
            <div className="row_center">
                <div className="about-content ">
                    <div className="row">
                        <div className="about-text">
                            <h3>
                                {presentation}
                                <span>{jobTitle}</span>
                            </h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="personal-info">
                            {Object.entries(personalInfo).map(
                                ([key, value]) => (
                                    <div className="info-item" key={key}>
                                        <p>
                                            {key} : <span>{value}</span>
                                        </p>
                                    </div>
                                )
                            )}

                            <div className="buttons">
                                <Button
                                    // btnName={buttons.btnName1}
                                    children={buttons.btnName1}
                                    to={button1.to}
                                    className={button1.buttonClass}
                                />{" "}
                                <Button
                                    // btnName={buttons.btnName2}
                                    children={buttons.btnName2}
                                    href={CV}
                                    target="_blank"
                                    type={BUTTON_TYPES.DOWNLOAD}
                                    // src={button2.src}
                                    className={button2.class}
                                />
                            </div>
                        </div>
                        <div className="skills">
                            {skills.map((skill) => (
                                <div className="skill-item" key={skill.name}>
                                    <h4>{skill.name}</h4>
                                    <div className="progress">
                                        <div
                                            className="progress-in"
                                            style={{
                                                width: `${skill.percent}%`,
                                            }}
                                        ></div>
                                        <div className="skill-percent">
                                            {skill.percent}%
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row_timeLine">
                        <Timeline experiences={data.education} />
                        <Timeline
                            experiences={data.experience}
                            technologySymbols={data.technologySymbols}
                            technologyImages={data.technologyImages}
                        />
                    </div>
                </div>
            </div>
            <div className="col_end"></div>
        </>
    );
}

export default Profile;
