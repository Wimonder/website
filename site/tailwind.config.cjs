const colors = {
	background: 'rgb(249 250 251)',
	primary: 'rgb(17 24 39)',
	accent: 'rgb(17 24 39)',
	secondary: 'rgb(75 85 99)',
	soft: 'rgb(156 163 175)',
	'background-dark': 'rgb(17 24 39)',
	'primary-dark': 'rgb(243 244 246)',
	'accent-dark': 'rgb(243 244 246)',
	'secondary-dark': 'rgb(156 163 175)',
	'soft-dark': 'rgb(209 213 219)'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', './src/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: colors,
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': colors.primary,
						'--tw-prose-headings': colors.accent,
						'--tw-prose-invert-body': colors['primary-dark'],
						'--tw-prose-invert-headings': colors['accent-dark']
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
