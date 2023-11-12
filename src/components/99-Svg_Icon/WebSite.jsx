import React from "react";
import "./webSite.scss";

const WebSite = ({ addClass }) => {
    return (
        <span className={`${addClass}`}>
            <svg
                viewBox="0 0 576 576"
                enableBackground="new 0 0 576 576"
                xmlSpace="preserve"
                className="webSite"
            >
                <path
                    className="webSite-icon"
                    d="M288 0C128.9 0 0 128.9 0 288s128.9 288 288 288 288-128.9 288-288S447.1 0 288 0zm179.5 266.9c-1.5-33.6-6.6-65.5-14.7-94.9 30.4 11.4 56.8 25.9 76.5 43.2 5.7 19 9.3 39 10.4 59.7-18.4-3.1-43-5.8-72.2-8zm-36-2.3c-34.9-1.9-74.3-3.1-116.5-3.5V252h-.2c-.5-38.7-1.6-75.1-3.4-107.5 36.1 1.6 71.7 7 104.3 15.7 8.7 32.7 14.1 68.3 15.8 104.4zM309.1 108.5c-2.2-29.2-4.9-53.8-8-72.1 20.7 1.1 40.6 4.6 59.7 10.4 17.3 19.7 31.8 46.1 43.2 76.5-29.4-8.2-61.3-13.3-94.9-14.8zm-34.2-72.2c-3.1 18.3-5.8 42.9-8 72.1-33.6 1.5-65.5 6.6-94.9 14.7 11.4-30.4 25.9-56.8 43.2-76.5 19-5.6 39-9.2 59.7-10.3zm-10.3 108.2c-1.7 32.4-2.9 68.7-3.4 107.5h-.2v9.1c-42.1.4-81.6 1.6-116.5 3.5 1.6-36.1 7-71.7 15.7-104.3 32.7-8.7 68.3-14.1 104.4-15.8zM108.5 266.9c-29.2 2.2-53.8 4.9-72.1 8 1.1-20.7 4.6-40.6 10.4-59.7 19.7-17.3 46.1-31.8 76.5-43.2-8.2 29.4-13.3 61.3-14.8 94.9zm-72.2 34.2c18.3 3.1 42.9 5.8 72.1 8 1.5 33.6 6.6 65.5 14.7 94.9-30.4-11.4-56.8-25.9-76.5-43.2-5.6-19-9.2-39-10.3-59.7zm108.2 10.3c34.9 1.9 74.3 3.1 116.5 3.5v9.1h.2c.5 38.7 1.6 75.1 3.4 107.5-36.1-1.6-71.7-7-104.3-15.7-8.7-32.7-14.1-68.3-15.8-104.4zm122.4 156.1c2.2 29.2 4.9 53.8 8 72.1-20.7-1.1-40.6-4.6-59.7-10.4-17.3-19.7-31.8-46.1-43.2-76.5 29.4 8.2 61.3 13.3 94.9 14.8zm34.2 72.2c3.1-18.3 5.8-42.9 8-72.1 33.6-1.5 65.5-6.6 94.9-14.7-11.4 30.4-25.9 56.8-43.2 76.5-19 5.6-39 9.2-59.7 10.3zm10.3-108.2c1.7-32.4 2.9-68.7 3.4-107.5h.2v-9.1c42.1-.4 81.6-1.6 116.5-3.5-1.6 36.1-7 71.7-15.7 104.3-32.7 8.7-68.3 14.1-104.4 15.8zm156.1-122.4c29.2-2.2 53.8-4.9 72.1-8-1.1 20.7-4.6 40.6-10.4 59.7-19.7 17.3-46.1 31.8-76.5 43.2 8.2-29.4 13.3-61.3 14.8-94.9zM514 176.4c-20.5-16.2-45.3-30.1-73.3-41.1-11-28.1-24.9-52.9-41.1-73.3 49.5 24.5 89.9 64.9 114.4 114.4zM176.4 62c-16.2 20.5-30.1 45.3-41.1 73.3-28.1 11-52.9 24.9-73.3 41.1C86.5 126.9 126.9 86.5 176.4 62zM62 399.6c20.5 16.2 45.3 30.1 73.3 41.1 11 28.1 24.9 52.9 41.1 73.3-49.5-24.5-89.9-64.9-114.4-114.4zM399.6 514c16.2-20.5 30.1-45.3 41.1-73.3 28.1-11 52.9-24.9 73.3-41.1-24.5 49.5-64.9 89.9-114.4 114.4z"
                />
            </svg>
        </span>
    );
};
export default React.memo(WebSite);