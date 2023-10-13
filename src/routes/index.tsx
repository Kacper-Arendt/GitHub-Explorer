import { createBrowserRouter, Outlet } from 'react-router-dom';

// ROUTES
import { MainLayout, NotFound } from 'src/components/layout';
import { Search } from 'src/features/github';

const App = () => (
	<MainLayout>
		<Outlet />
	</MainLayout>
);

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Search />,
			},
		],
	},
]);
