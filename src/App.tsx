import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// ROUTES
import { router } from 'src/routes';

// REDUX
import { persistor, store } from 'src/redux/store';

// STYLES
import 'src/app.scss';

// CONFIG
import { initializeI18n } from 'src/config/i18n';
import { queryClient } from 'src/config/react-query';

initializeI18n();

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</PersistGate>
	</Provider>
);

export default App;
