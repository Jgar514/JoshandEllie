/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#050816",
				secondary: "#d0312d",
				tertiary: "#151030",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#f3f3f3",
				blue1: "#10628D",
				green1: "#7F936E",
				neutral: "#FBF3D9",
				yellow1: "#F9C22C",
				yellow2: "#f1d592",
				yellow3: "#F3F2EF",
				"gray-dark": "#273444",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
		},
	},
	plugins: [],
};
