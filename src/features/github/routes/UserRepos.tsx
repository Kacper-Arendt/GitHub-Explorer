import { ErrorBoundary } from 'react-error-boundary';

// REDUX

// HOOKS

// MODELS

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { UserReposList } from 'src/features/github/components';

// STYLES

// UTILS

export const UserRepos = () => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<UserReposList />
	</ErrorBoundary>
);
