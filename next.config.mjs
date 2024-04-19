import createMDX from '@next/mdx'

const withMDX = createMDX({});

// @ts-check
/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: true,
	poweredByHeader: false,
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
}

export default withMDX(config);
