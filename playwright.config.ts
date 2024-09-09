import { devices, PlaywrightTestConfig } from '@playwright/test';

process.env.TS_NODE_PROJECT = './tsconfig.json';

interface TestConfig extends PlaywrightTestConfig {
  baseUrl: string;
  apiUrl: string;
  environment: string;
}

const defaultConfig: PlaywrightTestConfig = {
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 3 : 1,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};

// set config for dev env
const devConfig: TestConfig = {
  baseUrl: 'https://www.dev-google.com',
  apiUrl: 'https://dev.api.google.com',
  environment: 'dev',
};

// set config for stage env
const stageConfig: TestConfig = {
  baseUrl: 'https://www.stg-google.com',
  apiUrl: 'https://stage.api.google.com',
  environment: 'stage',
};

// set config for prod env
const prodConfig: TestConfig = {
  baseUrl: 'https://www.prod-google.com',
  apiUrl: 'https://prod.api.google.com',
  environment: 'prod',
};

// get the environment type from command line. If this is empty, use dev
const environment = process.env.TEST_ENV ?? 'dev';

let selectedConfig: TestConfig;
if (environment === 'stage') {
  selectedConfig = stageConfig;
} else if (environment === 'prod') {
  selectedConfig = prodConfig;
} else {
  selectedConfig = devConfig;
}

const config: TestConfig = {
  ...defaultConfig,
  ...selectedConfig,
  environment,
};

export default config;
