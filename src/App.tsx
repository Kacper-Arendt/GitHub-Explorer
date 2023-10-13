import { RouterProvider } from 'react-router-dom';

// ROUTES
import { router } from 'src/routes';

const App = () => (
	<>
		<RouterProvider router={router} />
	</>
);

export default App;
