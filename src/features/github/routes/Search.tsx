import { ErrorBoundary } from 'react-error-boundary';

// REDUX
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { increment, selectCounter } from 'src/redux/slices/example/example';

// HOOKS

// MODELS

// COMPONENTS
import { FallbackError } from 'src/components/errors';

// STYLES

// UTILS

export const Search = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector(selectCounter);
	const throwError = () => {
		throw new Error('Hulk smash!');
	};

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<p>Search</p>

			<div>
				<p>Count: {value}</p>
				<button type="button" onClick={() => dispatch(increment())}>
					Click
				</button>

				<button type="button" onClick={throwError}>
					Click to Throw Error
				</button>
			</div>
		</ErrorBoundary>
	);
};
