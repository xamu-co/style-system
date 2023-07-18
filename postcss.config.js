module.exports = {
	map: false,
	plugins: [
		// Optimizations
		require("postcss-preset-env")({
			stage: 4,
			features: { "nesting-rules": { noIsPseudoSelector: true } },
			minimumVendorImplementations: 3,
			autoprefixer: false,
		}),
		require("cssnano")({
			preset: [
				"advanced",
				{
					discardComments: { removeAll: true },
					zindex: false,
				},
			],
		}),
		require("postcss-merge-selectors")({}),
		require("postcss-sort-media-queries")({
			sort: "desktop-first",
			configuration: { unitlessMqAlwaysFirst: true },
		}),
		require("postcss-merge-at-rules")({ nest: true }),
		require("postcss-precision")({}),
	],
};
