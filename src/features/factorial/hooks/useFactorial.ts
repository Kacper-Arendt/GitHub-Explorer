// REDUX

// HOOKS

// MODELS

// COMPONENTS

// STYLES

// UTILS

import { useState } from 'react';

export const useFactorial = () => {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState<number | null>(null);
	const [history, setHistory] = useState<{ number: number; factorial: number }[]>([]);

	const factorial = (n: number): number => {
		let p = 1;
		for (let i = n; i > 0; i--) p *= i;
		return p;
	};

	const calculateFactorial = () => {
		const n = parseInt(number);

		if (!isNaN(n)) {
			const fact = factorial(n);

			setResult(fact);
			setHistory((prevState) => [...prevState, { number: n, factorial: fact }]);
			setNumber('');
		}
	};

	return { calculateFactorial, number, setNumber, result, history };
};
