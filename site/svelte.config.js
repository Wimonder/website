import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: vercel(),
		prerender: {
			default: true
		},
		alias: {
			$lib: 'src/lib',
			$api: 'src/api',
			$components: 'src/components/'
		}
	}
};

export default config;
