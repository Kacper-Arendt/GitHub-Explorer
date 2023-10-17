import { useReducer } from 'react';
import { t } from 'i18next';

// REDUX
import { useAppDispatch } from 'src/redux/hooks';
import { factorialUpdateHistory } from 'src/redux/slices/factorial';

// MODELS
import {
	ActionTypes,
	ReducerInitialStateInterface,
	RegistrationReducerAction,
	SetErrorType,
	SetFactorialType,
	SetNumberType,
} from 'src/features/factorial/models';

const initialState: ReducerInitialStateInterface = {
	number: 0,
	factorial: null,
	error: null,
};

const useFactorialReducer = (state: ReducerInitialStateInterface, action: RegistrationReducerAction) => {
	switch (action.type) {
		case ActionTypes.setNumber:
			return { ...state, number: action.payload.number, result: null };
		case ActionTypes.setFactorial:
			return { ...state, factorial: action.payload.factorial, number: 0 };
		case ActionTypes.setError:
			return { ...state, error: action.payload.error, result: null, number: 0 };
		default:
			throw new Error();
	}
};

export const useFactorial = () => {
	const dispatch = useAppDispatch();
	const [state, reducerDispatch] = useReducer(useFactorialReducer, initialState);

	const setNumber = (payload: SetNumberType['payload']) => reducerDispatch({ type: ActionTypes.setNumber, payload });

	const setFactorial = (payload: SetFactorialType['payload']) =>
		reducerDispatch({ type: ActionTypes.setFactorial, payload });

	const setError = (payload: SetErrorType['payload']) => reducerDispatch({ type: ActionTypes.setError, payload });

	const factorialHandler = (n: number): number => {
		let p = 1;
		for (let i = n; i > 0; i--) p *= i;
		return p;
	};

	const calculateFactorial = () => {
		try {
			const factorial = factorialHandler(state.number);

			setFactorial({ factorial });
			dispatch(factorialUpdateHistory({ number: state.number, factorial }));
		} catch (e) {
			setError({ error: t('errors.fallbackErrorMessage') });
		}
	};

	return { state, calculateFactorial, setNumber };
};
