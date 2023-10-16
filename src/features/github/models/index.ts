export interface RepoInterface {
	id: string;
	name: string;
	updated_at: string;
	commits_url: string;

	owner: { login: string };
}

export interface CommitInterface {
	node_id: string;
	commit: {
		author: {
			name: string;
			email: string;
			date: string;
		};
		committer: {
			name: string;
			email: string;
			date: string;
		};
		message: string;
		tree: {
			sha: string;
			url: string;
		};
		url: string;
	};
}
