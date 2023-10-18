import { LogInterface } from 'src/redux/slices/debug/models';

export const sendLog = ({ type, logData }: { type: LogInterface['type']; logData: unknown }) => {
	try {
		setTimeout(() => {
			console.log(`${type} -> ${logData}`);
		}, 1500);
	} catch (e) {
		// eslint-disable-next-line no-console
		console.error('sendLog', e);
	}
};
