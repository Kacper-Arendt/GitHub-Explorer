// EFFECTS
import { call, takeEvery } from 'redux-saga/effects';

// REDUX
import { debugSetItem } from 'src/redux/slices/debug';

// MODELS
import { PayloadAction } from '@reduxjs/toolkit';
import { LogInterface } from 'src/redux/slices/debug/models';

// REQUESTS
import { sendLog } from 'src/redux/sagas/debug/debugRequest';

function* handleDebugFlow({ payload }: PayloadAction<LogInterface>) {
	try {
		// --------------------------------------
		// ---> 1. SEND ERROR <---
		// --------------------------------------r
		yield call(sendLog, {
			logData: payload?.value,
			type: payload.type,
		});
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error('handleDebugFlow', err);
	}
}

export default function* watcherDebug() {
	yield takeEvery(debugSetItem, handleDebugFlow);
}
