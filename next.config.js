/* Define ENV variables */
process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY = process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY || 'a575d40e9c408bdf7cfb'

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
		loader: 'custom',
		loaderFile: './node_modules/@uploadcare/nextjs-loader/build/loader.js',
	},
};
