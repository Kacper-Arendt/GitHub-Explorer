import { t } from 'i18next';
import { z } from 'zod';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useFactorial } from 'src/features/factorial/hooks/useFactorial';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { Form, Input, useForm } from 'src/components/form';

const calculatorSchema = z.object({
	number: z.preprocess((x) => Number(x), z.number().positive().max(170)),
});

export const Calculator = () => {
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
			<div>
				<h2>{t('routes.factorial')}</h2>
				<Form form={form} onSubmit={(item) => calculateFactorial(item)}>
					<Input name="number" type="number" control={form.control} label={t('general.number')} autoFocus />
					<button type="submit">{t('general.calculate')}</button>
				</Form>

				{factorial && <p>{`${t('general.factorialResult')} ${factorial}`}</p>}
			</div>
		</ErrorBoundary>
	);
};
