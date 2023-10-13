import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// ROUTES
import { router } from 'src/routes';

// REDUX
import { persistor, store } from 'src/redux/store';

// STYLES
import 'src/app.scss';

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<RouterProvider router={router} />
		</PersistGate>
	</Provider>
);

export default App;
