import { useQuery } from 'react-query';

// API
import { githubApi } from 'src/features/github/api/axiosInstance';

// MODELS
import { CommitInterface } from 'src/features/github/models';
import { ExtractFnReturnType, QueryConfig } from 'src/config/react-query';

interface GetRepoCommitsInterface {
	owner: string;
	repo: string;
	perPage?: number;
}

export const getRepoCommits = ({ owner, repo, perPage = 5 }: GetRepoCommitsInterface): Promise<CommitInterface[]> =>
	githubApi.get(`/repos/${owner}/${repo}/commits?per_page=${perPage}`);

type QueryFnType = typeof getRepoCommits;

type UseUsersOptions = {
	config?: QueryConfig<QueryFnType>;
	params: GetRepoCommitsInterface;
};

export const useRepoCommits = ({ config, params }: UseUsersOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['commits'],
		queryFn: () => getRepoCommits(params),
	});
};
