/** @format */
module.exports = {
	// Add plugin names as key and arguments as value
	// Install them before as dependencies with npm or yarn
	map: false,
	plugins: [
		// Disable a plugin by passing false as value
		require("postcss-custom-properties")({}),
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
				},
			],
		}),
	],
	env: "production",
	preset: { stage: false },
};
