import { combineReducers } from "redux";
import languageSlice from "./languageSlice";

const rootReducer = combineReducers({
    language: languageSlice,
});

export default rootReducer;
