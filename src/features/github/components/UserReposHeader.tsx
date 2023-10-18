import { useTranslation } from 'react-i18next';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useReposListData } from 'src/features/github/context/useReposListContext';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { Form, Input } from 'src/components/form';
import { Button } from 'src/components/button';

// STYLES
import 'src/features/github/components/styles.scss';

export const UserReposHeader = () => {
	const { t } = useTranslation();
	const { form, setSearch } = useReposListData();

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<Form form={form} onSubmit={(item) => setSearch(item.search)} className="user-repos-header-form">
				<Input name="search" type="search" control={form.control} placeholder={t('general.typeUsername')} autoFocus />
				<Button type="submit">{t('general.search')}</Button>
			</Form>
		</ErrorBoundary>
	);
};
