import { devices } from '@playwright/test'
import path from 'path'

// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || 3000

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`

// Reference: https://playwright.dev/docs/test-configuration
const config = {
  timeout: 30 * 1000,
  testDir: path.join(__dirname, 'vr-tests'),
  retries: 2,
  outputDir: 'vr-tests/results/',
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
  ],
}

export default config