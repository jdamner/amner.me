module.exports = {
	output: 'standalone',
	images: {
		unoptimized: true,
	},
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: false,
	webpack(config) {
		config.resolve.fallback = {
			...config.resolve.fallback, 
			fs: false,
		};

		return config;
	},
};