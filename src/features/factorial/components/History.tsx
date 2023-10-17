import { ErrorBoundary } from 'react-error-boundary';

// REDUX
import { useAppSelector } from 'src/redux/hooks';
import { selectFactorial } from 'src/redux/slices/factorial';

// HOOKS

// MODELS

// COMPONENTS
import { FallbackError } from 'src/components/errors';

// STYLES

// UTILS

export const History = () => {
	const { history } = useAppSelector(selectFactorial);

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			{history?.length > 0 && (
				<>
					<h3>Calculation History</h3>
					<ul>
						{history.map((entry, index) => (
							<li key={index}>
								Factorial of {entry.number} is {entry.factorial}
							</li>
						))}
					</ul>
				</>
			)}
		</ErrorBoundary>
	);
};
