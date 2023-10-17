import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { Calculator, History } from 'src/features/factorial/components';

export const Factorial = () => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<Calculator />
		<History />
	</ErrorBoundary>
);
