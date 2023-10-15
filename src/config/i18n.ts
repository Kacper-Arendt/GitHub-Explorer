import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

// TRANSLATIONS
import pl from 'src/utils/translations/pl.json';
import en from 'src/utils/translations/en.json';

export const fallbackLng = 'en';
export const supportedI18nLangs = [fallbackLng, 'pl'] as const;
export type SupportedLangsType = (typeof supportedI18nLangs)[number];

export const initializeI18n = () =>
	i18n
		.use(detector)
		.use(initReactI18next)
		.init({
			resources: {
				en: {
					translation: en,
				},
				pl: {
					translation: pl,
				},
			},
			fallbackLng,

			interpolation: {
				escapeValue: false,
			},
		});
