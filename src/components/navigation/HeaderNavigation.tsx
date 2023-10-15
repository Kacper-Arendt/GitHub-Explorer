import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

// COMPONENTS
import { FallbackError } from 'src/components/errors';

// STYLES
import 'src/components/navigation/styles.scss';

// UTILS
import { routes } from 'src/routes';

export const HeaderNavigation = () => {
	const { t } = useTranslation();

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div className="header-navigation">
				<nav className="header-navigation__nav">
					{Object.values(routes).map(({ name, path }) => (
						<NavLink
							key={path}
							to={path}
							className={({ isActive }) =>
								clsx('header-navigation__nav__item', { 'header-navigation__nav__item--active': isActive })
							}
						>
							{t(name)}
						</NavLink>
					))}
				</nav>
			</div>
		</ErrorBoundary>
	);
};
