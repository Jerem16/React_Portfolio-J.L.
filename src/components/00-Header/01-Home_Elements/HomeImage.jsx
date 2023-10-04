import React from "react";

function HomeImage({ imageSrc }) {
    return (
        <div className="home-img padd-15px">
            <img
                src={require(`../../../assets/img/${imageSrc}`)}
                alt="profile_image"
            />
        </div>
    );
}

export default HomeImage;
