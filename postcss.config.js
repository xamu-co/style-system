/** @format */
module.exports = {
	// Add plugin names as key and arguments as value
	// Install them before as dependencies with npm or yarn
	map: false,
	plugins: [
		// Disable a plugin by passing false as value
		require("postcss-combine-media-query")({}),
		require("cssnano")({
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
		}),
		require("autoprefixer"),
		require("postcss-custom-properties")({}),
		require("postcss-csso")({
			comments: false,
			forceMediaMerge: true,
		}),
	],
	env: "production",
	preset: { stage: false },
};
