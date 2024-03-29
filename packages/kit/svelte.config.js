import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		})
	],
	kit: {
		adapter: adapter(),
		alias: {
			'@': 'src',
		}
	}
}

export default config
