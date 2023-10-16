// REDUX

// HOOKS

// MODELS

// COMPONENTS

// STYLES

// UTILS

import { ErrorBoundary } from 'react-error-boundary';
import { FallbackError } from 'src/components/errors';

const content = [
	{
		title: 'Wyszukiwarka projektów Githubowych',
		features: [
			'Aplikacja wykorzystuje publiczne API GitHuba, umożliwiając użytkownikowi wyszukiwanie projektów na Githubie.',
			'Po wprowadzeniu loginu użytkownika, aplikacja waliduje go i obsługuje nieistniejące loginy.',
			'Wyświetla maksymalnie 5 projektów, sortując je według ostatniej aktualizacji.',
			'Dla każdego projektu wyświetla maksymalnie 5 commitów.',
		],
	},
	{
		title: 'Wyliczanie Silni',
		features: [
			'Drugi ekran aplikacji umożliwia użytkownikowi obliczanie silni dla podanej liczby.',
			'Aplikacja przechowuje historię poprzednich obliczeń.',
		],
	},
	{
		title: 'Ogólne Informacje',
		features: [
			'Aplikacja jest zaimplementowana zgodnie z zasadami BEM',
			'Stylizacja jest oparta na LESS/SASS.',
			'Co drugi element w każdej liście jest wyróżniony kolorem.',
			'Projekt jest hostowany na platformie, a jego kod jest dostępny publicznie',
		],
	},
	{
		title: 'Dodatkowe Wymagania',
		features: ['W projekcie wykorzystano middlewary Redux, zapewniając bardziej zaawansowane zarządzanie stanem aplikacji.'],
	},
];
export const Info = () => {
	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<h1>Info o Projekcie</h1>
			<h2>Nazwa Projektu: GitHub Explorer</h2>
			<h3>Autor: Kacper Arendt</h3>
			<p>Aplikacja składa się z trzech głównych ekranów:</p>
			{content.map((section, index) => (
				<section key={index}>
					<h3>{section.title}</h3>
					<ul>
						{section.features.map((feature, featureIndex) => (
							<li key={featureIndex}>{feature}</li>
						))}
					</ul>
				</section>
			))}
		</ErrorBoundary>
	);
};
