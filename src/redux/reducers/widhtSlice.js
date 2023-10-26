import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    desktopLarge: "",
};

const classesSlice = createSlice({
    name: "classes",
    initialState,
    reducers: {
        toggleClasses: (state, action) => {
            if (state.addClass === action.payload) {
                state.addClass = "";
            } else {
                state.addClass = action.payload;
            }
        },
    },
});

export const { toggleClasses } = classesSlice.actions;

export default classesSlice.reducer;
