'use client';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { getPlaceholderDataApi } from '@/appFsd/api/getPlaceholderData';

import modalSlice from './slice/modalSlice';

const rootReducer = combineReducers({
    modalSlice,
    [getPlaceholderDataApi.reducerPath]: getPlaceholderDataApi.reducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware().concat(getPlaceholderDataApi.middleware)
    });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
