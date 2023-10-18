import { createContext, ReactNode, useContext, useState } from 'react';
import { z } from 'zod';

// HOOKS
import { useUserRepo } from 'src/features/github/api/getUserRepos';
import { useForm } from 'src/components/form';

const userReposListSchema = z.object({
	search: z.string().min(1),
});

export const useReposListContext = () => {
	const [search, setSearch] = useState('');
	const useUserRepoQuery = useUserRepo({ params: { username: search } });

	const form = useForm({
		schema: userReposListSchema,
		defaultValues: { search },
	});

	return { form, setSearch, useUserRepoQuery };
};

export const ContextData = createContext({} as ReturnType<typeof useReposListContext>);
export const useReposListData = () => useContext(ContextData);

export const ContextProvider = ({ children }: { children: ReactNode }) => (
	<ContextData.Provider value={useReposListContext()}>{children}</ContextData.Provider>
);
