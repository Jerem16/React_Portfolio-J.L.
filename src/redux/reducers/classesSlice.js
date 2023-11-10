import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalContact: false,
    addClass: "",
    asideWidth: "270",
    desktop1280: "1280",
    tab1080: "1080",
    menuSwitcher: "langClose",
    navScroll: "top",
};

const classesSlice = createSlice({
    name: "classes",
    initialState,
    reducers: {
        setAsideWidth: (state, action) => {
            state.asideWidth = action.payload;
            state.desktop1280 = 1010 + parseInt(action.payload, 10);
            state.tab1080 = 740 + parseInt(action.payload, 10);
        },

        toggleClasses: (state, action) => {
            if (state.addClass === action.payload) {
                state.addClass = "";
            } else {
                state.addClass = action.payload;
            }
        },
        setModalContact: (state, action) => {
            state.modalContact = action.payload;
        },
        setClass: (state, action) => {
            state.menuSwitcher = action.payload;
        },
        setNavScroll: (state, action) => {
            state.navScroll = action.payload;
        },
    },
});

export const {
    setAsideWidth,
    toggleClasses,
    setClass,
    setNavScroll,
    setModalContact,
} = classesSlice.actions;

export default classesSlice.reducer;
