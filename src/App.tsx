import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

// ROUTES
import { router } from 'src/routes';

// REDUX
import { store } from 'src/redux/store';

const App = () => (
	<>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</>
);

export default App;
