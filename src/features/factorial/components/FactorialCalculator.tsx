// HOOKS
import { useFactorial } from 'src/features/factorial/hooks/useFactorial';

export const FactorialCalculator = () => {
	const { calculateFactorial, number, setNumber, result, history } = useFactorial();

	return (
		<div>
			<h2>Factorial Calculator</h2>
			<div>
				<label>Enter a number: </label>
				<input type="number" value={number} onChange={(e) => setNumber(e.target.value.slice(0, 3))} />
				<button onClick={calculateFactorial}>Calculate Factorial</button>
			</div>
			{result && <p>{`Factorial is ${result}`}</p>}
			<h3>Calculation History</h3>
			<ul>
				{history.map((entry, index) => (
					<li key={index}>
						Factorial of {entry.number} is {entry.factorial}
					</li>
				))}
			</ul>
		</div>
	);
};
