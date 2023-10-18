import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';

// COMPONENTS
import { FallbackError } from 'src/components/errors';

// STYLES
import 'src/features/info/components/styles.scss';

// UTILS
import { SupportedLangsType } from 'src/config/i18n';
import { content } from 'src/features/info/helpers/content';

export const ProjectInfo = () => {
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language as SupportedLangsType;
	const currentLangContent = content[currentLanguage] ?? content?.en;

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div className="project-info">
				<h1 className="project-info__heading">{t('general.projectName')}: GitHub Explorer</h1>
				<p>{t('general.author')}: Kacper Arendt</p>
				{currentLangContent && (
					<>
						<p className="project-info__list-header">{t('general.infoScreenDescription')}</p>
						{currentLangContent?.map((section, index) => (
							<section key={index}>
								<p className="project-info__section-title">{section.title}</p>
								<ul>
									{section.features.map((feature, featureIndex) => (
										<li key={featureIndex}>{feature}</li>
									))}
								</ul>
							</section>
						))}
					</>
				)}
			</div>
		</ErrorBoundary>
	);
};
