import { useQuery } from '@tanstack/react-query';
import { ExtractFnReturnType, QueryConfig } from 'src/config/react-query';

// API
import { githubApi } from 'src/features/github/api/axiosInstance';

// MODELS
import { CommitInterface } from 'src/features/github/models';

// UTILS
import { logger } from 'src/utils/logger';

interface GetRepoCommitsInterface {
	owner: string;
	repo: string;
	perPage?: number;
	signal: AbortSignal | undefined;
}

export const getRepoCommits = async ({
	owner,
	repo,
	perPage = 5,
	signal,
}: GetRepoCommitsInterface): Promise<CommitInterface[] | null> => {
	try {
		return await githubApi.get(`/repos/${owner}/${repo}/commits?per_page=${perPage}`, { signal });
	} catch (e) {
		logger.error('getRepoCommits', e);
		return null;
	}
};

type QueryFnType = typeof getRepoCommits;

type UseUsersOptions = {
	config?: QueryConfig<QueryFnType>;
	params: Omit<GetRepoCommitsInterface, 'signal'>;
};

export const useRepoCommits = ({ config, params }: UseUsersOptions) => {
	return useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryKey: ['commits', params.owner, params.repo],
		queryFn: ({ signal }) => getRepoCommits({ ...params, signal }),
	});
};
