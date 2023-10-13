import { combineReducers } from "redux";
import languageSlice from "./languageSlice";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
    language: languageSlice,
    theme: themeSlice,
});

export default rootReducer;
