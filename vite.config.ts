import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import sass from 'sass';

export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			src: path.resolve('src/'),
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
			},
		},
	},

	server: {
		open: true,
	},
});
