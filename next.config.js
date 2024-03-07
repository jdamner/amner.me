const withPlugins = require('next-compose-plugins');
const withExportImages = require('next-export-optimize-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
module.exports = withPlugins(
	[ [ withExportImages, withBundleAnalyzer ] ],
	{
		output: 'export',
		reactStrictMode: true,
		poweredByHeader: false,
		trailingSlash: false,
	}
);

