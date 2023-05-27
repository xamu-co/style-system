const nano = {
	preset: [
		"advanced",
		{
			discardComments: { removeAll: true },
			zindex: false,
		},
	],
};

const createSort = require("sort-css-media-queries/lib/create-sort");
const sortCSSmq = createSort({ unitlessMqAlwaysFirst: true });

module.exports = {
	map: false,
	plugins: [
		// Optimizations
		require("cssnano")(nano),
		require("postcss-merge-selectors")({}),
		require("node-css-mqpacker")({
			sort: sortCSSmq.desktopFirst,
		}),
		require("postcss-precision")({}),
	],
	env: "production",
	preset: { stage: false },
};
