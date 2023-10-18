import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useFactorial } from 'src/features/factorial/hooks/useFactorial';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { Form, Input, useForm } from 'src/components/form';
import { Button } from 'src/components/button';

// STYLES
import 'src/features/factorial/components/styles.scss';

const calculatorSchema = z.object({
	number: z.preprocess((x) => Number(x), z.number().positive().max(170)),
});

export const Calculator = () => {
	const { t } = useTranslation();
	const {
		state: { factorial },
		calculateFactorial,
	} = useFactorial();

	const form = useForm({
		schema: calculatorSchema,
		defaultValues: { number: undefined },
	});

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div className="factorial-calculator">
				<Form form={form} onSubmit={(item) => calculateFactorial(item)} className="factorial-calculator__form">
					<Input name="number" type="number" control={form.control} placeholder={t('general.number')} autoFocus />
					<Button type="submit" flexible>
						{t('general.calculate')}
					</Button>
				</Form>

				{factorial && (
					<p className="factorial-calculator__result">
						{t('general.factorialResult')} <strong className="factorial-calculator__result--strong">{factorial}</strong>
					</p>
				)}
			</div>
		</ErrorBoundary>
	);
};
