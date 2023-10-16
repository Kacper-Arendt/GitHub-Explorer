import { ErrorBoundary } from 'react-error-boundary';
import i18n, { t } from 'i18next';

// MODELS
import { SupportedLangsType } from 'src/config/i18n';

// COMPONENTS
import { FallbackError } from 'src/components/errors';

// STYLES

// UTILS
import { content } from 'src/features/info/helpers/content';

export const Info = () => {
	const currentLanguage = i18n.language as SupportedLangsType;
	const currentLangContent = content[currentLanguage] ?? content?.en;

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<h1>{t('general.projectInfo')}</h1>
			<h2>{t('general.projectName')}: GitHub Explorer</h2>
			<h3>{t('general.author')}: Kacper Arendt</h3>
			{currentLangContent && (
				<>
					<p>{t('general.infoScreenDescription')}</p>
					{currentLangContent?.map((section, index) => (
						<section key={index}>
							<h3>{section.title}</h3>
							<ul>
								{section.features.map((feature, featureIndex) => (
									<li key={featureIndex}>{feature}</li>
								))}
							</ul>
						</section>
					))}
				</>
			)}
		</ErrorBoundary>
	);
};
