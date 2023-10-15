import { createBrowserRouter, Outlet } from 'react-router-dom';

// COMPONENTS
import { AppLayout } from 'src/components/layout';
import { NotFound } from 'src/components/errors';

// ROUTES
import { Search } from 'src/features/github';

export const routes = {
	userProjects: {
		path: '/',
		// TODO ADD I18N
		name: 'User Projects',
	},
	factorial: {
		path: '/factorial',
		name: 'Factorial',
	},
	info: {
		path: '/info',
		name: 'Info',
	},
};

const App = () => (
	<AppLayout>
		<Outlet />
	</AppLayout>
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
