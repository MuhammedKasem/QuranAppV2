import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['settings'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST'],  // Ignore 'persist/PERSIST' action
        },
    }),
});

export const persistor = persistStore(store);
