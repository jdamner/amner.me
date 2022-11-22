const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	moduleNameMapper: {
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
	},
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
}

module.exports = createJestConfig(customJestConfig)