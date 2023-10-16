import { SupportedLangsType } from 'src/config/i18n';

export const content: Record<SupportedLangsType, { title: string; features: string[] }[]> = {
	pl: [
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
				'Aplikacja jest zaimplementowana zgodnie z zasadami BEM.',
				'Stylizacja jest oparta na LESS/SASS.',
				'Co drugi element w każdej liście jest wyróżniony kolorem.',
				'Projekt jest hostowany na platformie, a jego kod jest dostępny publicznie.',
			],
		},
		{
			title: 'Dodatkowe Wymagania',
			features: [
				'W projekcie wykorzystano middlewary Redux, zapewniając bardziej zaawansowane zarządzanie stanem aplikacji.',
			],
		},
	],
	en: [
		{
			title: 'GitHub Project Search',
			features: [
				'The application uses the public GitHub API, allowing the user to search for projects on GitHub.',
				'After entering a user login, the application validates it and handles non-existing logins.',
				'It displays a maximum of 5 projects, sorting them by the latest update.',
				'For each project, it displays a maximum of 5 commits.',
			],
		},
		{
			title: 'Factorial Calculator',
			features: [
				'The second screen of the application allows the user to calculate the factorial for a given number.',
				'The application stores the history of previous calculations.',
			],
		},
		{
			title: 'General Information',
			features: [
				'The application is implemented following the BEM principles.',
				'Styling is based on LESS/SASS.',
				'Every other item in each list is highlighted with color.',
				'The project is hosted on a platform, and its code is publicly available.',
			],
		},
		{
			title: 'Additional Requirements',
			features: ['The project uses Redux middleware, providing more advanced state management for the application.'],
		},
	],
};
