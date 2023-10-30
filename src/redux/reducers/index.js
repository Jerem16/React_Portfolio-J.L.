import { combineReducers } from "redux";
import languageSlice from "./languageSlice";
import themeSlice from "./themeSlice";
import Reducer from "./classesSlice";

const rootReducer = combineReducers({
    language: languageSlice,
    theme: themeSlice,
    classes: Reducer,
});

export default rootReducer;
