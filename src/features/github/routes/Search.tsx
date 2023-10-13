import { ErrorBoundary } from 'react-error-boundary';

// REDUX
import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { increment, selectCounter } from 'src/redux/slices/example/example';

// HOOKS

// MODELS

// COMPONENTS

// STYLES

// UTILS

export const Search = () => {
	const dispatch = useAppDispatch();
	const { value } = useAppSelector(selectCounter);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<p>Search</p>

			<div>
				<p>Count: {value}</p>
				<button type="button" onClick={() => dispatch(increment())}>
					Click
				</button>
			</div>
		</ErrorBoundary>
	);
};
