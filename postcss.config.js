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

module.exports = {
	// Add plugin names as key and arguments as value
	// Install them before as dependencies with npm or yarn
	map: false,
	plugins: [
		// Optimizations
		require("postcss-combine-media-query")({}),
		require("cssnano")(nano),
		require("postcss-merge-selectors")({}),
		require("postcss-precision")({}),
		// optimize again
		require("cssnano")(nano),
		// More weight by polyfilling
		require("autoprefixer")({}),
		require("postcss-custom-properties")({}),
	],
	env: "production",
	preset: { stage: false },
};
