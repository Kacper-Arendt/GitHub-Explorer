import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors';

// UTILS
import { ProjectInfo } from 'src/features/info/components';

export const Info = () => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<ProjectInfo />
	</ErrorBoundary>
);
