export interface InitialStateInterface {
	logs: LogInterface[];
}

export interface LogInterface {
	value: unknown;
	title: string;
	type: 'error' | 'info';
}
