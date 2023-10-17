import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useFactorial } from 'src/features/factorial/hooks/useFactorial';

// COMPONENTS
import { FallbackError } from 'src/components/errors';

export const Calculator = () => {
	const {
		state: { number, factorial },
		calculateFactorial,
		setNumber,
	} = useFactorial();

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div>
				<h2>Factorial Calculator</h2>
				<div>
					<label>Enter a number: </label>
					<input
						type="number"
						value={number}
						onChange={({ currentTarget }) => setNumber({ number: parseInt(currentTarget.value) })}
					/>
					<button onClick={calculateFactorial}>Calculate Factorial</button>
				</div>
				{factorial && <p>{`Factorial is ${factorial}`}</p>}
			</div>
		</ErrorBoundary>
	);
};
