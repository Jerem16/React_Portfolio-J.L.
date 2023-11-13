import React from "react";
import profileWebp1k from "../../assets/img/profile-1k.webp";
import profileWebp2k from "../../assets/img/profile-2k.webp";
import profileWebp4k from "../../assets/img/profile-4k.webp";

function HomeImage() {
    return (
        <div className="blockImg">
            <div className="home-img">
                <div className="leftNB"></div>
                <div className="centerNB">
                    <img
                        alt="profile_image"
                        srcSet={`                        
                        ${profileWebp1k}     1920w,
                        ${profileWebp2k}      2560w,
                        ${profileWebp4k}      3840w,`}
                        sizes="(max-width: 1920px) 100vw, (max-width: 2560px) 100vw, 3840px"
                        width={446}
                        height={465}
                    />
                </div>
                <div className="rightNB"></div>
            </div>
        </div>
    );
}

export default React.memo(HomeImage);
