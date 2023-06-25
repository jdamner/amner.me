const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

const withExportImages = require('next-export-optimize-images');

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
const config = {
	output: 'export',
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
}

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withExportImages(
	withBundleAnalyzer(
		config
	)
);

