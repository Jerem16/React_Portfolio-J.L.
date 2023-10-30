import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addClass: "",
    asideWidth: "270",
    desktop1280: "1280",
    tab1080: "1080",
    menuSwitcher: "",
};

const classesSlice = createSlice({
    name: "classes",
    initialState,
    reducers: {
        setAsideWidth: (state, action) => {
            state.asideWidth = action.payload;
            state.desktop1280 = 1010 + parseInt(action.payload, 10);
            state.tab1080 = 810 + parseInt(action.payload, 10);
        },

        toggleClasses: (state, action) => {
            if (state.addClass === action.payload) {
                state.addClass = "";
            } else {
                state.addClass = action.payload;
            }
        },
        setClass: (state, action) => {
            state.menuSwitcher = action.payload;
        },
    },
});

export const { setAsideWidth, toggleClasses, setClass } = classesSlice.actions;

export default classesSlice.reducer;
