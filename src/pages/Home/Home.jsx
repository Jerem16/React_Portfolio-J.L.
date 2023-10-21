import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js"; // Importez Typed.js
import CanvasBackground from "../../components/CanvasBackground/CanvasBackground";
import CanvasBackground2 from "../../components/CanvasBackground/CanvasBackground2";
// import Triangle from "../../components/Triangle/Triangle";
import HomeInfo from "../../components/01-Home/HomeInfo";
import HomeImage from "../../components/01-Home/HomeImage";
import data from "../../assets/data/en/home.json";

// import about from "../../assets/data/en/about.json";

import { useSelector } from "react-redux";
import { loadLanguageData } from "../../utils/loadLanguageData";
import "./home.scss";

function Home() {
    const selectedLanguage = useSelector((state) => state.language.language);
    const [languageData, setLanguageData] = useState(null);

    const data = languageData;

    const typedRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadLanguageData(selectedLanguage, "home.json");
            setLanguageData(data);
        };

        fetchData();
    }, [selectedLanguage]);

    useEffect(() => {
        if (!data || !data.home || !languageData) {
            return;
        }

        const { typedStrings } = data.home;

        const options = {
            strings: typedStrings,
            typeSpeed: 120,
            backSpeed: 60,
            loop: true,
        };

        typedRef.current = new Typed(".typing", options);

        return () => {
            if (typedRef.current) {
                typedRef.current.destroy();
            }
        };
    }, [data, languageData]);

    if (!data || !data.home || !languageData) {
        return <div>Loading...</div>;
    }

    const {
        welcome,
        name,
        presentation,
        description,
        question,
        answer,
        imageSrc,
        hireButtonText,
    } = data.home;

    return (
        <section className="home section" id="home">
            <div className="container">
                <div className="row_top"></div>
                <div className="bgDraw">
                    <CanvasBackground />
                </div>
                <div className="row_center">
                    <div className="row">
                        <HomeInfo
                            welcome={welcome}
                            name={name}
                            presentation={presentation}
                            description={description}
                            question={question}
                            answer={answer}
                            hireButtonText={hireButtonText}
                        />
                        <HomeImage imageSrc={imageSrc} />
                    </div>
                </div>
                <div className="bgDraw2">
                    <CanvasBackground2 />
                </div>
                <div className="col_end"></div>
            </div>
        </section>
    );
}

export default Home;
