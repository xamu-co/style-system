const nano = {
	preset: [
		"advanced",
		{
			discardComments: {
				removeAll: true,
			},
			calc: false,
			zindex: false,
			autoprefixer: false,
		},
	],
};

const sortCSSmq = require("sort-css-media-queries");

module.exports = {
	// Add plugin names as key and arguments as value
	// Install them before as dependencies with npm or yarn
	map: false,
	plugins: [
		// Optimizations
		require("node-css-mqpacker")({ sort: false }),
		require("cssnano")(nano),
		require("postcss-merge-selectors")({}),
		require("postcss-precision")({}),
		// optimize again
		require("node-css-mqpacker")({ sort: sortCSSmq.desktopFirst }),
		require("cssnano")(nano),
		// More weight by polyfilling
		require("autoprefixer")({}),
		require("postcss-custom-properties")({}),
	],
	env: "production",
	preset: { stage: false },
};
