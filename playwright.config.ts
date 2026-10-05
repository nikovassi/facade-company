import { defineConfig, devices } from '@playwright/test'

const PORT = 4390

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: `http://localhost:${PORT}/facade-company/`,
    trace: 'retain-on-failure',
    locale: 'bg-BG',
  },
  projects: [
    { name: 'mobile-chrome', use: { ...devices['Pixel 7'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 13'] } },
    { name: 'desktop-chrome', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
    { name: 'desktop-firefox', use: { ...devices['Desktop Firefox'], viewport: { width: 1440, height: 900 } } },
  ],
  // Production build with a test endpoint (intercepted in the tests) served like GitHub Pages
  webServer: {
    command: 'npm run build:e2e && npm run preview:e2e',
    url: `http://localhost:${PORT}/facade-company/`,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
  },
})
