import { devices, PlaywrightTestConfig } from '@playwright/test'
import path from 'path'

const PORT = process.env.PORT || 3000
const baseURL = `http://localhost:${PORT}`

const config: PlaywrightTestConfig = {
  timeout: 30 * 1000,
  testDir: path.join(__dirname, 'tests'),
  testMatch: '**/*.test.ts',
  retries: 2,
  outputDir: 'tests/results/',
  webServer: {
    command: 'npm run dev',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: false,
  },
  use: {
    baseURL,
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: {...devices['iPhone 12'] }
    },
    {
      name: 'Desktop Chrome Dark Mode',
      use: { ...devices['Desktop Chrome'], colorScheme: 'dark' },
    },
    {
      name: 'Mobile Chrome Dark Mode',
      use: { ...devices['Pixel 5'], colorScheme: 'dark' },
    },
    {
      name: 'Mobile Safari Dark Mode',
      use: {...devices['iPhone 12'], colorScheme: 'dark' }
    },
  ],
  reporter: [['junit', { outputFile: 'results.xml' }]],
}

export default config