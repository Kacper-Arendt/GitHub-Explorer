import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// MODELS
import { LogInterface } from 'src/redux/slices/debug/models';
import { RootState } from 'src/redux/store';

const initialState = {};

export const debugSlice = createSlice({
	name: 'debug',
	initialState,
	reducers: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		debugSetItem: (state, action: PayloadAction<LogInterface>) => state,
	},
});

export const { debugSetItem } = debugSlice.actions;

export const selectDebug = (state: RootState) => state.debug;

export default debugSlice.reducer;
