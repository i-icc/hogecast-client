import { configureStore } from '@reduxjs/toolkit';
import episodeReducer from './slices/episodeSlice';

export const store = configureStore({
    reducer: {
        episode: episodeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
