import axios from 'axios';

// CONFIG
import { envs } from 'src/config';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		Authorization: envs.githubToken,
	},
});

githubApi.interceptors.response.use(
	(response) => response.data,
	(error) => error,
);
