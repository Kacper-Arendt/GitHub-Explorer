import { useState } from 'react';
import { z } from 'zod';

// HOOKS
import { useUserRepo } from 'src/features/github/api/getUserRepos';
import { useForm } from 'src/components/form';

const userReposListSchema = z.object({
	search: z.string().min(1),
});

export const useReposList = () => {
	const [search, setSearch] = useState('');
	const useUserRepoQuery = useUserRepo({ params: { username: search } });

	const form = useForm({
		schema: userReposListSchema,
		defaultValues: { search },
	});

	return { form, setSearch, useUserRepoQuery };
};
