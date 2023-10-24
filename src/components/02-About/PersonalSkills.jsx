import React from "react";

function Skills({ skills }) {
    return (
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
                        <div className="skill-percent">{skill.percent}%</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Skills;
