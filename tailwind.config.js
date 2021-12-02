module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
				"10v": "10vh",
				"20v": "20vh",
				"30v": "30vh",
				"40v": "40vh",
        "45v": "45vh",
				"50v": "50vh",
				"60v": "60vh",
				"70v": "70vh",
				"80v": "80vh",
				"90v": "90vh",
				"100v": "100vh",
			},
      width: {
				"10v": "10vw",
				"20v": "20vw",
				"30v": "30vw",
				"40v": "40vw",
        "45v": "45vw",
				"50v": "50vw",
				"60v": "60vw",
				"70v": "70vw",
				"80v": "80vw",
				"90v": "90vw",
				"100v": "100vw",
			},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
