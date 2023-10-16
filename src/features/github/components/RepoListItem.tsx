import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useRepoCommits } from 'src/features/github/api/getRepoCommits';

// MODELS
import { RepoInterface } from 'src/features/github/models';

// COMPONENTS
import { Loader } from 'src/components/loaders';
import { FallbackError } from 'src/components/errors';

// STYLES

export const RepoListItem = (item: RepoInterface) => {
	const { data, isLoading } = useRepoCommits({
		params: { repo: item.name, owner: item.owner.login },
	});

	if (isLoading) return <Loader />;

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<li>
				<p>{item.name}</p>
				<ul>
					{data?.map((el) => (
						<li key={el.node_id}>
							<p>{el.commit.message}</p>
						</li>
					))}
				</ul>
			</li>
		</ErrorBoundary>
	);
};
