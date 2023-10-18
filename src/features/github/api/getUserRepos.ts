import { useQuery } from '@tanstack/react-query';
import { ExtractFnReturnType, QueryConfig } from 'src/config/react-query';

// API
import { githubApi } from 'src/features/github/api/axiosInstance';

// MODELS
import { RepoInterface } from 'src/features/github/models';

// UTILS
import { logger } from 'src/utils/logger';

interface GetUserReposInterface {
	username: string;
	sort?: 'updated';
	perPage?: number;
	signal: AbortSignal | undefined;
}

export const getUserRepos = async ({
	username,
	sort = 'updated',
	perPage = 5,
	signal,
}: GetUserReposInterface): Promise<RepoInterface[] | null> => {
	try {
		return await githubApi.get(`users/${username}/repos?sort=${sort}&per_page=${perPage}`, { signal });
	} catch (e) {
		logger.error('getUserRepos', e);
		return null;
	}
};

type QueryFnType = typeof getUserRepos;

type UseUsersOptions = {
	config?: QueryConfig<QueryFnType>;
	params: Omit<GetUserReposInterface, 'signal'>;
};

export const useUserRepo = ({ config, params }: UseUsersOptions) =>
	useQuery<ExtractFnReturnType<QueryFnType>>({
		...config,
		queryFn: ({ signal }) => getUserRepos({ ...params, signal }),
		queryKey: ['repos', params?.username],
		enabled: params?.username?.length > 0,
	});
