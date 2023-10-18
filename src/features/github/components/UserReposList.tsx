import { t } from 'i18next';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useReposListData } from 'src/features/github/context/useReposListContext';

// COMPONENTS
import { RepoListItem } from 'src/features/github/components/RepoListItem';
import { FallbackError } from 'src/components/errors';
import { StatusWrapper } from 'src/components/wrappers/StatusWrapper';

// STYLES

export const UserReposList = () => {
	const { useUserRepoQuery } = useReposListData();
	const { data, isError, isSuccess, isFetched, isInitialLoading } = useUserRepoQuery;

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
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
