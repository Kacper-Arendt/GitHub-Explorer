import { t } from 'i18next';

// STYLES
import 'src/components/errors/styles.scss';

export const FallbackError = () => (
	<div className="fallback-error">
		<h2 className="fallback-error__title">{t('errors.fallbackErrorMessage')}</h2>
	</div>
);
