const colors = {
	background: 'rgb(249 250 251)',
	foreground: {
		accent: 'rgb(17 24 39)',
		DEFAULT: 'rgb(17 24 39)'
	},
	primary: 'rgb(17 24 39)',
	secondary: 'rgb(75 85 99)',
	soft: 'rgb(156 163 175)'
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: colors,
			fontFamily: {
				inter: ['Inter', 'sans-serif']
			},
			typography: {
				DEFAULT: {
					css: {
						'--tw-prose-body': colors.foreground.DEFAULT,
						'--tw-prose-headings': colors.foreground.accent
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
