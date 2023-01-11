const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
	preset: "jest-runner-remark",
}

module.exports = createJestConfig(customJestConfig)