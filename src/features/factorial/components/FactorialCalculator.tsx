// REDUX
import { useAppSelector } from 'src/redux/hooks';
import { selectFactorial } from 'src/redux/slices/factorial';

// HOOKS
import { useFactorial } from 'src/features/factorial/hooks/useFactorial';

export const FactorialCalculator = () => {
	const { history } = useAppSelector(selectFactorial);
	const {
		state: { number, factorial },
		calculateFactorial,
		setNumber,
	} = useFactorial();

	return (
		<div>
			<h2>Factorial Calculator</h2>
			<div>
				<label>Enter a number: </label>
				<input type="number" value={number} onChange={(e) => setNumber({ number: parseInt(e.target.value.slice(0, 3)) })} />
				<button onClick={calculateFactorial}>Calculate Factorial</button>
			</div>
			{factorial && <p>{`Factorial is ${factorial}`}</p>}

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
		</div>
	);
};
