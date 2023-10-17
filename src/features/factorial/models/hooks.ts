// ====================
// --> START useFactorial <--
// ====================

export interface ReducerInitialStateInterface {
	factorial: number | null;
	error: string | null;
}

export enum ActionTypes {
	setFactorial,
	setError,
}

export type SetFactorialType = {
	type: ActionTypes.setFactorial;
	payload: ReducerInitialStateInterface['factorial'];
};

export type SetErrorType = {
	type: ActionTypes.setError;
	payload: ReducerInitialStateInterface['error'];
};

export type RegistrationReducerAction = SetFactorialType | SetErrorType;
// --> END useFactorial <--
