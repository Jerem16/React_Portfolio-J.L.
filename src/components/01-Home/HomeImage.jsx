import React from "react";
import profileWebp from "../../assets/img/Profile-2.webp";

function HomeImage({ imageSrc }) {
    return (
        <>
            <div className="blockImg">
                <div className="home-img padd-15px">
                    <div className="leftNB"></div>
                    <div className="centerNB">
                        <img
                            src={profileWebp}
                            alt="profile_image"
                            width={264}
                            height={275}
                            // loading="lazy"
                        />
                    </div>
                    <div className="rightNB"></div>
                </div>
            </div>
        </>
    );
}

export default HomeImage;
