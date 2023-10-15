import React from "react";
import CanvasBackground from "../CanvasBackground/CanvasBackground";

function HomeImage({ imageSrc }) {
    return (
        <>
            <div className="blockImg">
                <div className="home-img padd-15px">
                    <div className="leftNB"></div>
                    <div className="centerNB">
                        <img
                            src={require(`../../assets/img/${imageSrc}`)}
                            alt="profile_image"
                        />
                    </div>
                    <div className="rightNB"></div>{" "}
                </div>
            </div>{" "}

        </>
    );
}

export default HomeImage;
