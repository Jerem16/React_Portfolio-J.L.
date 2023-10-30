import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadLanguageData } from "./loadLanguageData";

function useLangData(langFileName) {
    const selectedLanguage = useSelector((state) => state.language.language);
    const [languageData, setLanguageData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await loadLanguageData(selectedLanguage, langFileName);
            setLanguageData(data);
        };

        fetchData();
    }, [selectedLanguage, langFileName]);

    return languageData;
}

export default useLangData;
