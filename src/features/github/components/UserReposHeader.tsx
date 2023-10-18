import { ErrorBoundary } from 'react-error-boundary';
import { t } from 'i18next';

// HOOKS
import { useReposListData } from 'src/features/github/context/useReposListContext';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { Form, Input } from 'src/components/form';
import { Button } from 'src/components/button';

// STYLES

export const UserReposHeader = () => {
	const { form, setSearch } = useReposListData();

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<Form form={form} onSubmit={(item) => setSearch(item.search)} className="factorial-calculator__form">
				<Input name="search" type="text" control={form.control} placeholder={t('general.typeUsername')} autoFocus />
				<Button type="submit" flexible>
					{t('general.search')}
				</Button>
			</Form>
		</ErrorBoundary>
	);
};
