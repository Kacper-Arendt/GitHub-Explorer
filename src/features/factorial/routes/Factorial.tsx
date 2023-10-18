import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { Calculator, History } from 'src/features/factorial/components';

// STYLES
import 'src/features/factorial/routes/styles.scss';

export const Factorial = () => (
	<ErrorBoundary FallbackComponent={FallbackError}>
		<div className="factorial">
			<Calculator />
			<History />
		</div>
	</ErrorBoundary>
);
