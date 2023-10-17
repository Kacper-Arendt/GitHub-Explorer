import { ErrorBoundary } from 'react-error-boundary';

// REDUX

// HOOKS

// MODELS

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { FactorialCalculator } from 'src/features/factorial/components';

// STYLES

// UTILS

export const Factorial = () => {
	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<FactorialCalculator />
		</ErrorBoundary>
	);
};
