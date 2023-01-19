// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
	output: 'standalone',
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	images: {
		optimized: false // enable in the future when I work out how...
	},
};
