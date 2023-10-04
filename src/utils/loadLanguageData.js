// languageUtils.js
export const loadLanguageData = async (language, fileName) => {
    try {
        const data = await import(`../assets/data/${language}/${fileName}`);
        console.log("data", data.default);
        return data.default;
    } catch (error) {
        console.error(
            `Erreur lors du chargement des données en ${language}.`,
            error
        );
        return {}; 
    }
};
