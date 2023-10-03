import React from "react";
import profileData from "../../assets/data/About/profile.json";
import experience from "../../assets/data/About/experience.json";
import education from "../../assets/data/About/education.json";
import Timeline from "../../components/Experience/TimeLine";

function Profile() {
    const experiences = experience;
    const educations = education;

    const {
        section,
        presentation,
        jobTitle,
        description,
        personalInfo,
        buttons,
        skills,
    } = profileData;

    return (
        <>
            <div className="section-title padd-15px">
                <h2>{section}</h2>
            </div>
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
                                </a>
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
                                <div className="skill-item" key={skill.name}>
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
                    <div className="row">
                        <Timeline experiences={educations} />
                        <Timeline experiences={experiences} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
