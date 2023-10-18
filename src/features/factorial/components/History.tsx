import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';

// REDUX
import { useAppSelector } from 'src/redux/hooks';
import { selectFactorial } from 'src/redux/slices/factorial';

// COMPONENTS
import { FallbackError } from 'src/components/errors';

// STYLES
import 'src/features/factorial/components/styles.scss';

export const History = () => {
	const { t } = useTranslation();
	const { history } = useAppSelector(selectFactorial);

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div className="factorial-history">
				{history?.length > 0 && (
					<>
						<p>{t('general.calculationHistory')}</p>
						<ul>
							{history.map((entry, index) => (
								<li key={index}>
									{i18next.t('general.factorialResultInter', { number: entry.number, factorial: entry.factorial })}
								</li>
							))}
						</ul>
					</>
				)}
			</div>
		</ErrorBoundary>
	);
};
