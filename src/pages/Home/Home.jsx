import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js"; // Importez Typed.js

import HomeInfo from "../../components/00-Header/01-Home_Elements/HomeInfo";
import HomeImage from "../../components/00-Header/01-Home_Elements/HomeImage";
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

        const {
            typedStrings, // Accédez aux chaînes depuis les données
        } = data.home;

        const options = {
            strings: typedStrings, // Utilisez les chaînes de Typed.js depuis les données
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
        // profession,
        description,
        question,
        answer,
        imageSrc,
        hireButtonText,
    } = data.home;

    return (
        <main className="main-content">
            <section className="home section" id="home">
                <div className="container">
                    <div className="row padd-15px">
                        <HomeInfo
                            welcome={welcome}
                            name={name}
                            presentation={presentation}
                            // profession={profession}
                            description={description}
                            question={question}
                            answer={answer}
                            hireButtonText={hireButtonText}
                        />
                        <HomeImage imageSrc={imageSrc} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
