import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // currentTheme: "#fa5b0f",
    currentTheme: "#3bc4fd",
    // currentTheme: "#1FBF44",

};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.currentTheme = action.payload;
        },
    },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
