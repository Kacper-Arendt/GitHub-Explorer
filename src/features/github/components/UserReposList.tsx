import { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useUserProjects } from 'src/features/github/hooks/useUserProjects';
import { useDebounce } from 'src/utils/hooks/useDebounce';

// COMPONENTS
import { RepoListItem } from 'src/features/github/components/RepoListItem';
import { FallbackError } from 'src/components/errors';

// STYLES

// UTILS

export const UserReposList = () => {
	const { getProjects, projects } = useUserProjects();
	const [search, setSearch] = useState('');

	const searchValueDebounced = useDebounce(search, 1000);

	useEffect(() => {
		if (search.length > 2) getProjects({ username: search });
	}, [searchValueDebounced]);

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<div>
				<div>
					<input type="search" value={search} onChange={(e) => setSearch(e.currentTarget.value)} />
				</div>
				<ul>{projects?.map((el) => <RepoListItem key={el.id} {...el} />)}</ul>
			</div>
		</ErrorBoundary>
	);
};
