// ====================
// --> START useFactorial <--
// ====================

export interface ReducerInitialStateInterface {
	factorial: number | null;
	number: number;
	error: string | null;
}

export enum ActionTypes {
	setNumber,
	setFactorial,
	setError,
}

export type SetNumberType = {
	type: ActionTypes.setNumber;
	payload: Pick<ReducerInitialStateInterface, 'number'>;
};

export type SetFactorialType = {
	type: ActionTypes.setFactorial;
	payload: Pick<ReducerInitialStateInterface, 'factorial'>;
};

export type SetErrorType = {
	type: ActionTypes.setError;
	payload: Pick<ReducerInitialStateInterface, 'error'>;
};

export type RegistrationReducerAction = SetFactorialType | SetErrorType | SetNumberType;
// --> END useFactorial <--
