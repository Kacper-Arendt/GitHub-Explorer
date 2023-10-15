import { t } from 'i18next';
import { Link } from 'react-router-dom';

// STYLES
import 'src/components/errors/styles.scss';

// UTILS
import { routes } from 'src/routes';

export const NotFound = () => (
	<div className="not-found">
		<h1 className="not-found__title">{t('errors.pageNotFound')}</h1>
		<p className="not-found__description">{t('errors.pageNotFound-desc')}</p>
		<Link to={routes.userProjects.path} className="not-found__go-back">
			{t('general.goBackToHomePage')}
		</Link>
	</div>
);
