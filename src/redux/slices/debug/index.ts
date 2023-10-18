import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// MODELS
import { InitialStateInterface, LogInterface } from 'src/redux/slices/debug/models';
import { RootState } from 'src/redux/store';

const initialState: InitialStateInterface = {
	logs: [],
};

export const debugSlice = createSlice({
	name: 'debug',
	initialState,
	reducers: {
		debugSetItem: (state, action: PayloadAction<LogInterface>) => {
			state.logs.unshift(action.payload);
			if (state.logs.length > 50) state.logs.pop();
		},
	},
});

export const { debugSetItem } = debugSlice.actions;

export const selectDebug = (state: RootState) => state.debug;

export default debugSlice.reducer;
