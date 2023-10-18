import { useTranslation } from 'react-i18next';

// UTILS
import { supportedI18nLangs } from 'src/config/i18n';

export const LanguageSelect = () => {
	const { t, i18n } = useTranslation();

	return (
		<select name="appLang" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.currentTarget.value)}>
			{supportedI18nLangs.map((el) => (
				<option key={el} value={el}>
					{t(`langs.${el}`)}
				</option>
			))}
		</select>
	);
};
