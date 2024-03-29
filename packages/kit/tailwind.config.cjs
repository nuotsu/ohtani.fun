/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				'sans': "'Chakra Petch'",
			},
			colors: {
				'accent': '#e00101',
				'ink': '#011d28',
			},
			screens: {
				'<xs': { max: '428px' },
				'<sm': { max: '640px' },
				'<md': { max: '768px' },
				'<lg': { max: '1024px' },
				'<xl': { max: '1280px' },
				'<2xl': { max: '1536px' }
			},
		},
	},
	plugins: [],
}
