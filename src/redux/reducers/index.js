import { combineReducers } from "redux";
import languageSlice from "./languageSlice";
import themeSlice from "./themeSlice";
import classesSlice from "./classesSlice";

const rootReducer = combineReducers({
    language: languageSlice,
    theme: themeSlice,
    classes: classesSlice,
});

export default rootReducer;
