export const envs = {
	dev: import.meta.env.DEV,
	prod: import.meta.env.PROD,
	mode: import.meta.env.MODE,
	githubToken: import.meta.env.VITE_GITHUB_TOKEN,
	enableDebug: import.meta.env.VITE_ENABLE_DEBUG === 'true',
} as const;
