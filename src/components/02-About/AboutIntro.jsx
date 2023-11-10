import React from "react";

const AboutIntro = ({ profileData }) => {
    return (
        <div className="row">
            <div className="about-text">
                <h3>
                    {profileData.profile.presentation}
                    <span>{profileData.profile.jobTitle}</span>
                </h3>
                <p>{profileData.profile.description}</p>
            </div>
        </div>
    );
};

export default React.memo(AboutIntro);
