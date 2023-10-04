import React, { useState, useEffect } from "react";

// import about from "../../assets/data/en/about.json";

import Timeline from "../../components/Experience/TimeLine";
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

    return (
        <>
            <div className="row">
                <div className="section-title padd-15px">
                    <h2>{section}</h2>
                </div>
            </div>
            <div className="row">
                <div className="about-content padd-15px">
                    <div className="row">
                        <div className="about-text padd-15px">
                            <h3>
                                {presentation}
                                <span>{jobTitle}</span>
                            </h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="personal-info padd-15px">
                            <div className="row padd-15px">
                                {Object.entries(personalInfo).map(
                                    ([key, value]) => (
                                        <div className="info-item" key={key}>
                                            <p>
                                                {key} : <span>{value}</span>
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                            <div className="row padd-15px">
                                <div className="buttons">
                                    <a
                                        href="../../assets/data/experience.json"
                                        className="btn"
                                    >
                                        {buttons.btnName1}
                                    </a>{" "}
                                    <a
                                        href="../../assets/data/experience.json"
                                        className="btn hire-me"
                                    >
                                        {buttons.btnName2}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="skills padd-15px">
                            <div className="row padd-15px">
                                {skills.map((skill) => (
                                    <div
                                        className="skill-item"
                                        key={skill.name}
                                    >
                                        <h5>{skill.name}</h5>
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
                    </div>
                    <div className="row">
                        <Timeline experiences={data.education} />
                        <Timeline experiences={data.experience} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
