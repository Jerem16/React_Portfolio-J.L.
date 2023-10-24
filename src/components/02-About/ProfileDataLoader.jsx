// ProfileDataLoader.js
import React from "react";
import useLangData from "../../utils/useLangData";

const ProfileDataLoader = ({ children }) => {
    const profileData = useLangData("about.json");

    if (!profileData?.profile || !profileData?.profile ) {
        return <div>Loading...</div>;
    }
    return children(profileData); // Transmettez profileData comme prop
};

export default ProfileDataLoader;
