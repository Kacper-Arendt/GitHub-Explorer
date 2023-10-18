// REDUX
import { store } from 'src/redux/store';
import { debugSetItem } from 'src/redux/slices/debug';

// CONFIG
import { envs } from 'src/config';

export const logger = {
	error: (place: string, message: unknown) => {
		if (envs?.enableDebug) store.dispatch(debugSetItem({ type: 'error', title: place, value: message }));
	},
	log: (place: string, message: unknown) => {
		if (envs?.enableDebug) store.dispatch(debugSetItem({ type: 'info', title: place, value: message }));
	},
};
