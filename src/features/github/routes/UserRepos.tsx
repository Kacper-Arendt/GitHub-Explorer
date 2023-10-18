import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { ContextProvider } from 'src/features/github/context/useReposListContext';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { UserReposList, UserReposHeader } from 'src/features/github/components';

// STYLES

export const UserRepos = () => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<ContextProvider>
			<UserReposHeader />
			<UserReposList />
		</ContextProvider>
	</ErrorBoundary>
);
