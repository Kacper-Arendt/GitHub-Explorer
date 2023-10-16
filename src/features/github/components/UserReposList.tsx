import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useUserRepo } from 'src/features/github/api/getUserRepos';
import { useDebounce } from 'src/utils/hooks/useDebounce';

// COMPONENTS
import { RepoListItem } from 'src/features/github/components/RepoListItem';
import { FallbackError } from 'src/components/errors';
import { StatusWrapper } from 'src/components/wrappers/StatusWrapper';
import { t } from 'i18next';

// STYLES

// UTILS

export const UserReposList = () => {
	const [search, setSearch] = useState('');
	const searchValueDebounced = useDebounce(search, 500);
	const { data, isError, isSuccess, isFetched, isInitialLoading } = useUserRepo({
		params: { username: searchValueDebounced },
	});

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div>
				<div>
					<input type="search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
				</div>
				<StatusWrapper isError={isError} isSuccess={isSuccess} isLoading={isInitialLoading}>
					{isFetched && !data && <p>{t('general.userNotFound')}</p>}
					{isFetched && data?.length === 0 && <p>{t('general.noUserRepositoriesMessage')}</p>}

					{data && <ul>{data?.map((el) => <RepoListItem key={el.id} {...el} />)}</ul>}
				</StatusWrapper>
			</div>
		</ErrorBoundary>
	);
};
