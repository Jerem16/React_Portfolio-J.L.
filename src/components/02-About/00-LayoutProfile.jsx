import React from "react";
import Button, { BUTTON_TYPES } from "../Button/Button";
import Timeline from "./02-TimeLine";
import Skills from "./PersonalSkills";
import PersonalInfo from "./PersonalInfo";
import CV from "../../assets/cv/cv2022.pdf";
import ProfileDataLoader from "./ProfileDataLoader";
import AboutIntro from "./AboutIntro";

function Profile() {
    const button1 = {
        class: "btn_left",
    };
    const button2 = {
        to: "#contact",
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
                            <AboutIntro profileData={profileData} />
                            <div className="row row-skills">
                                <div className="personal-info">
                                    <PersonalInfo
                                        info={profileData.profile.personalInfo}
                                    />
                                </div>
                                <Skills skills={profileData.profile.skills} />
                                <div className="buttons">
                                    <Button
                                        href={CV}
                                        target="_blank"
                                        type={BUTTON_TYPES.DOWNLOAD}
                                        className={button1.class}
                                    >
                                        {profileData.profile.buttons.btnName1}
                                    </Button>
                                    <Button
                                        href="#contact"
                                        type={BUTTON_TYPES.DOWNLOAD}
                                        className={button2.class}
                                    >
                                        {profileData.profile.buttons.btnName2}
                                    </Button>
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

export default React.memo(Profile);
