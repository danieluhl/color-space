/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			text: {
				'3xl': '1.8rem',
				'4xl': '2rem'
			}
		}
	},
	plugins: []
};
