import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentTheme: "#fa5b0f",
    lightTheme: "#ed8655",
    darkTheme: "#aa4311",
    darkedTheme: "#5c2b13",
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.currentTheme = action.payload;
        },
        changeLightTheme: (state, action) => {
            state.lightTheme = action.payload;
        },
        changeDarkTheme: (state, action) => {
            state.darkTheme = action.payload;
        },
        changeDarkedTheme: (state, action) => {
            state.darkedTheme = action.payload;
        },
    },
});

export const { changeTheme, changeLightTheme, changeDarkTheme, changeDarkedTheme } = themeSlice.actions;

export default themeSlice.reducer;
