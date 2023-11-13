import React from "react";
import useLangData from "../../utils/useLangData";
import Loader from "../Loader/Loader";

const ProfileDataLoader = ({ children }) => {
    const profileData = useLangData("about.json");

    if (!profileData?.profile) {
        return <div><Loader /></div>;
    }
    return children(profileData);
};

export default ProfileDataLoader;
