import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    darkMode: false,
    showArabic: true,
    reciter: 'ar.mahermuaiqly',
};

// Define the slice
const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
        },
        toggleShowArabic(state) {
            state.showArabic = !state.showArabic;
        },
        setReciter(state, action) {
            state.reciter = action.payload;
        },
    },  // This was the misplaced comma
});

// Export the actions
export const { toggleDarkMode, toggleShowArabic, setReciter } = settingsSlice.actions;

// Export the reducer
export default settingsSlice.reducer;
