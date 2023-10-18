import { t } from 'i18next';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useReposList } from 'src/features/github/hooks/useReposList';

// COMPONENTS
import { RepoListItem } from 'src/features/github/components/RepoListItem';
import { FallbackError } from 'src/components/errors';
import { StatusWrapper } from 'src/components/wrappers/StatusWrapper';
import { Form, Input } from 'src/components/form';
import { Button } from 'src/components/button';
import { UserReposHeader } from 'src/features/github/components/UserReposHeader';

// STYLES

export const UserReposList = () => {
	const { useUserRepoQuery } = useReposList();
	const { data, isError, isSuccess, isFetched, isInitialLoading } = useUserRepoQuery;

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<UserReposHeader />

			<div>
				<StatusWrapper isError={isError} isSuccess={isSuccess} isLoading={isInitialLoading}>
					{isFetched && !data && <p>{t('general.userNotFound')}</p>}
					{isFetched && data?.length === 0 && <p>{t('general.noUserRepositoriesMessage')}</p>}

					{data && <ul>{data?.map((el) => <RepoListItem key={el.id} {...el} />)}</ul>}
				</StatusWrapper>
			</div>
		</ErrorBoundary>
	);
};
