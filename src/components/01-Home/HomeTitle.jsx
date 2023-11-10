import React from "react";
import MyName from "./MyName";

const HomeTitle = ({ welcome }) => {
    return (
        <h3 className="home-title">
            {welcome}
            <MyName />
        </h3>
    );
};

export default HomeTitle;
