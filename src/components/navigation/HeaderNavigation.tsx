import { ErrorBoundary } from 'react-error-boundary';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

// REDUX

// HOOKS

// MODELS

// COMPONENTS

// STYLES
import 'src/components/navigation/styles.scss';

// UTILS
import { routes } from 'src/routes';

export const HeaderNavigation = () => (
	<ErrorBoundary FallbackComponent={() => null}>
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
						{name}
					</NavLink>
				))}
			</nav>
		</div>
	</ErrorBoundary>
);
