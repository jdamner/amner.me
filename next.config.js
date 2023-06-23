const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withBundleAnalyzer({
	output: 'export',
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	images: {
		unoptimized: true,
	}
});
