import { all } from 'redux-saga/effects';

import watcherDebug from 'src/redux/sagas/debug/debugHandler';

export default function* rootSaga() {
	yield all([watcherDebug()]);
}
