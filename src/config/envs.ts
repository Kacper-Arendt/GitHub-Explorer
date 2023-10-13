export const envs = {
	dev: import.meta.env.DEV,
	prod: import.meta.env.PROD,
	mode: import.meta.env.MODE,
} as const;
