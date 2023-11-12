import React from "react";
import ProfileDataLoader from "../02-About/ProfileDataLoader";
import ItemLi from "../02-About/Experience/ItemLi";
import CloseIcon from "../99-Svg_Icon/CloseIcon";
import TechnologyIcons from "../02-About/Experience/TechnologyIcons";
import GitHub from "../99-Svg_Icon/GitHub";
import WebSite from "../99-Svg_Icon/WebSite";


const PortfolioModalContent = React.memo(
    ({ selectedPortfolio, closeModal }) => (
        <ProfileDataLoader>
            {(profileData) => {
                if (selectedPortfolio) {
                    const experienceEntries = profileData.experience[1].entries
                        ? profileData.experience[1].entries
                        : [];
                    const experienceInfo = experienceEntries.find(
                        (item) => item.id === selectedPortfolio.id
                    );

                    if (experienceInfo) {
                        return (
                            <>
                                <div
                                    className="service-item"
                                    id="modalPortfolio"
                                >
                                    <div className="portfolio-item-inner">
                                        <img
                                            className="lazy"
                                            alt={selectedPortfolio.title}
                                            src={require(`../../assets/img/webSite/${selectedPortfolio.imagePath}`)}
                                        />
                                    </div>
                                    <div className="modalPortfolio-description">
                                        <h4 className="jobTitle">
                                            {experienceInfo.jobTitle}
                                        </h4>
                                        <p className={`timeline-anime open`}>
                                            {
                                                experienceInfo.description
                                                    .paragraph
                                            }
                                        </p>
                                        {experienceInfo.description.itemLi &&
                                            experienceInfo.description.itemLi
                                                .length > 0 && (
                                                <ItemLi
                                                    entry={experienceInfo}
                                                    description={
                                                        experienceInfo.description
                                                    }
                                                />
                                            )}
                                        <div className="link">
                                            <span className="button">
                                                <a
                                                    href={
                                                        experienceInfo.siteLink
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {
                                                        profileData
                                                            .experience[1]
                                                            .siteLink
                                                    }
                                                </a>
                                                <WebSite />
                                            </span>
                                            <span className="button">
                                                <a
                                                    href={
                                                        experienceInfo.githubLink
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {
                                                        profileData
                                                            .experience[1]
                                                            .githubLink
                                                    }
                                                </a>
                                                <GitHub />
                                            </span>
                                        </div>
                                        <TechnologyIcons
                                            entry={experienceInfo}
                                        />
                                    </div>
                                </div>
                                <button type="button" onClick={closeModal}>
                                    <CloseIcon name="close" />
                                </button>
                            </>
                        );
                    }
                }
                return null;
            }}
        </ProfileDataLoader>
    )
);

export default PortfolioModalContent;
