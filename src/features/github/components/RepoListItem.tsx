import { ErrorBoundary } from 'react-error-boundary';

// HOOKS
import { useRepoCommits } from 'src/features/github/api/getRepoCommits';

// MODELS
import { RepoInterface } from 'src/features/github/models';

// COMPONENTS
import { FallbackError } from 'src/components/errors';
import { StatusWrapper } from 'src/components/wrappers/StatusWrapper';

// STYLES

export const RepoListItem = (item: RepoInterface) => {
	const { data, isSuccess, isError, isInitialLoading } = useRepoCommits({
		params: { repo: item.name, owner: item.owner.login },
	});

	return (
		<ErrorBoundary FallbackComponent={FallbackError}>
			<li>
				<p>{item.name}</p>
				<StatusWrapper isError={isError} isSuccess={isSuccess} isLoading={isInitialLoading}>
					<ul>
						{data?.map((el) => (
							<li key={el.node_id}>
								<p>{el.commit.message}</p>
							</li>
						))}
					</ul>
				</StatusWrapper>
			</li>
		</ErrorBoundary>
	);
};
