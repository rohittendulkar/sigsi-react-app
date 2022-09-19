/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				oxygen: ["Oxygen", "sans-serif"],
				merriweather: ["Merriweather", "serif"],
			},
		},
	},
	plugins: [],
};
