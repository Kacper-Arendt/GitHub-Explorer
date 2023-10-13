import { configureStore } from '@reduxjs/toolkit';

// REDUCERS
import { reducer } from 'src/redux/slices/reducer';

export const store = configureStore({
	reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
