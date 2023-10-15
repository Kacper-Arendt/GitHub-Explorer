import { Link } from 'react-router-dom';

// STYLES
import 'src/components/errors/styles.scss';
// UTILS
import { routes } from 'src/routes';

export const NotFound = () => (
	<div className="not-found">
		<h1 className="not-found__title">Page Not Found</h1>
		<p className="not-found__description">Sorry, the page you are looking for does not exist.</p>
		<Link to={routes.userProjects.path} className="not-found__go-back">
			Go back to the home page
		</Link>
	</div>
);
