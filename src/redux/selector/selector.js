// selector.js
export const selectColors = (state) => state.theme.currentTheme;
export const addClass = (state) => state.classes.addClass;
console.log(addClass);
console.log(selectColors);
