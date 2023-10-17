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
} from 'src/features/factorial/models';

const initialState: ReducerInitialStateInterface = {
	factorial: null,
	error: null,
};

const useFactorialReducer = (state: ReducerInitialStateInterface, action: RegistrationReducerAction) => {
	switch (action.type) {
		case ActionTypes.setFactorial:
			return { ...state, factorial: action.payload, error: null };
		case ActionTypes.setError:
			return { ...state, error: action.payload };
		default:
			throw new Error();
	}
};

export const useFactorial = () => {
	const dispatch = useAppDispatch();
	const [state, reducerDispatch] = useReducer(useFactorialReducer, initialState);

	const setFactorial = (payload: SetFactorialType['payload']) =>
		reducerDispatch({ type: ActionTypes.setFactorial, payload });

	const setError = (payload: SetErrorType['payload']) => reducerDispatch({ type: ActionTypes.setError, payload });

	const factorialHandler = (n: number): number => {
		let p = 1;
		for (let i = n; i > 0; i--) p *= i;
		return p;
	};

	const calculateFactorial = ({ number }: { number: number }) => {
		try {
			const factorial = factorialHandler(number);

			setFactorial(factorial);
			dispatch(factorialUpdateHistory({ number, factorial }));
		} catch (e) {
			setError(t('errors.fallbackErrorMessage'));
		}
	};

	return { state, calculateFactorial };
};
