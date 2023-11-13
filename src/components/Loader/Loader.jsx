import React from "react";
import CircleLoader from "../99-Svg_Icon/CircleLoader";

import "./loader.scss";

const Loader = () => {
    return (
        <div className="loader-wrapper">
            <Loading />
        </div>
    );
};

export default Loader;

export const Loading = () => {
    return (
        <div className="loading">
            <CircleLoader />
        </div>
    );
};
