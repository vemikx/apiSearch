import { configureStore } from '@reduxjs/toolkit';
import cardReducer from '../features/counter/counter-slice';

export const store = configureStore({
  reducer: {
    selectedCards: cardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
