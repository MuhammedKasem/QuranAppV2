// rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import settingsReducer from './SettingsSlice';

// Add all the other reducers in your application here
const rootReducer = combineReducers({
    settings: settingsReducer,
    // otherReducer: otherReducer,
    // anotherReducer: anotherReducer,
});

export default rootReducer;
