import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

// REDUCERS
import { reducer } from 'src/redux/slices/reducer';

// SAGA
import rootSaga from 'src/redux/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer,
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
