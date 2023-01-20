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
		unoptimized: true, // disable once I work out how to serve these statically
	},
	redirects: async () => {
		return [
			{
				source: '/ouath/',
				destination: '/oauth/auth',
				permanent: true,
			}
		]
	},
};
