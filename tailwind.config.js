/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		colors: {
			paleBlue: "hsl(225, 100%, 94%)",
			brightBlue: "hsl(245, 75%, 52%)",
			veryPaleBlue: "hsl(225, 100%, 98%)",
			desaturatedBlue: "hsl(224, 23%, 55%)",
			darkBlue: "hsl(223, 47%, 23%)",
		},
		fontFamily: {
			redHat: "'Red Hat Display', sans-serif",
		},
		extend: {},
	},
	plugins: [],
};
