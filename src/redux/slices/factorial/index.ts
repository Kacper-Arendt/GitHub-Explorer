import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// MODELS
import { RootState } from 'src/redux/store';
import { HistoryInterface, InitialState } from 'src/redux/slices/factorial/models';

const initialState: InitialState = {
	history: [],
};

export const factorialSlice = createSlice({
	name: 'factorial',
	initialState,
	reducers: {
		factorialUpdateHistory: (state, action: PayloadAction<HistoryInterface>) => {
			state.history.unshift(action.payload);
		},
	},
});

export const { factorialUpdateHistory } = factorialSlice.actions;

export const selectFactorial = (state: RootState) => state.factorial;

export default factorialSlice.reducer;
