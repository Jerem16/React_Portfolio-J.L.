import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
// import about from "../../assets/data/en/about.json";

import Timeline from "../../components/02-Experience/TimeLine";
import { useSelector } from "react-redux";
import { loadLanguageData } from "../../utils/loadLanguageData";

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
        href: "../../assets/data/experience.json",
        btnClass: "",
    };
    const button2 = {
        href: "../../assets/data/experience.json",
        btnClass: "",
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
                                    btnName={buttons.btnName2}
                                    href={button2.href}
                                    className={button2.btnClass}
                                />{" "}
                                <Button
                                    btnName={buttons.btnName1}
                                    href={button1.href}
                                    className={button1.btnClass}
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
