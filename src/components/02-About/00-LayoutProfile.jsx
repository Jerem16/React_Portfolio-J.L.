import React from "react";
import Button, { BUTTON_TYPES } from "../Button/Button";
// import shortid from "shortid";

import Timeline from "./02-TimeLine";
import Skills from "./PersonalSkills";
import PersonalInfo from "./PersonalInfo";
import CV from "../../assets/cv/cv2022.pdf";
import ProfileDataLoader from "./ProfileDataLoader";

function Profile() {
    const button1 = {
        class: "btn_left",
    };
    const button2 = {
        to: "/contact",
        class: "btn_right ",
    };

    return (
        <ProfileDataLoader>
            {(profileData) => (
                <>
                    <div className="row_top">
                        <div className="section-title">
                            <h2>{profileData.profile.section}</h2>
                        </div>
                    </div>
                    <div className="row_center">
                        <div className="about-content ">
                            <div className="row">
                                <div className="about-text">
                                    <h3>
                                        {profileData.profile.presentation}
                                        <span>
                                            {profileData.profile.jobTitle}
                                        </span>
                                    </h3>
                                    <p>{profileData.profile.description}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="personal-info">
                                    <PersonalInfo
                                        info={profileData.profile.personalInfo}
                                    />
                                </div>
                                <Skills skills={profileData.profile.skills} />
                                <div className="buttons">
                                    <Button
                                        children={
                                            profileData.profile.buttons.btnName1
                                        }
                                        href={CV}
                                        target="_blank"
                                        type={BUTTON_TYPES.DOWNLOAD}
                                        className={button1.class}
                                    />
                                    <Button
                                        children={
                                            profileData.profile.buttons.btnName2
                                        }
                                        to={button2.to}
                                        className={button2.class}
                                    />
                                </div>
                            </div>
                            <div className="height_val"></div>

                            <div className="row_timeLine">
                                <Timeline experiences={profileData.education} />
                                <Timeline
                                    experiences={profileData.experience}
                                    technologySymbols={
                                        profileData.technologySymbols
                                    }
                                    technologyImages={
                                        profileData.technologyImages
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col_end"></div>
                </>
            )}
        </ProfileDataLoader>
    );
}

export default Profile;
