/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			padding: {
				"custom": '0 100px',
			},
			maxHeight: {
				'900px': '56.25rem'
			}
		},
	},
	plugins: [],
}
