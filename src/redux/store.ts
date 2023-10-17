import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

// REDUCERS
import { reducer } from 'src/redux/slices/reducer';

// SAGA
import rootSaga from 'src/redux/sagas/rootSaga';

// UTILS
import { envs } from 'src/config';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
	...reducer,
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['factorial'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: [sagaMiddleware],
	devTools: envs.dev,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
