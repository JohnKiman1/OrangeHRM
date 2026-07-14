# OrangeHRM Playwright Automation Framework

## Project Overview
This repository contains a scalable, enterprise-style Playwright + TypeScript automation framework for the OrangeHRM Demo application. It is built around a maintainable Page Object Model (POM), reusable fixtures, JSON-based test data, storage-state authentication, and rich reporting.

## Framework Architecture
- Playwright with TypeScript
- Page Object Model for modular UI automation
- Reusable fixtures for authenticated sessions and shared test setup
- Externalized JSON-based test data
- Logical test organization for smoke, sanity, regression, authentication, dashboard, admin, PIM, leave, time, recruitment, and my info
- HTML and Allure reporting support
- CI/CD-ready workflow for GitHub Actions

## Root Directory Structure
```text
.
├── .github/
│   └── workflows/
├── docs/
├── report/
│   ├── playwright-report/
│   └── allure-report/
├── tests/
│   ├── k6/
│   └── playwright/
│       ├── auth/
│       ├── constants/
│       ├── data/
│       ├── fixtures/
│       ├── pages/
│       │   └── modules/
│       ├── tests/
│       │   ├── admin/
│       │   ├── authentication/
│       │   ├── dashboard/
│       │   ├── leave/
│       │   ├── myinfo/
│       │   ├── pim/
│       │   ├── recruitment/
│       │   ├── regression/
│       │   ├── smoke/
│       │   └── time/
│       └── utils/
├── package.json
├── playwright.config.ts
├── tsconfig.json
├── README.md
└── .gitignore
```

## Technology Stack
- Playwright 1.61+
- TypeScript
- Node.js
- Allure Playwright
- GitHub Actions

## Installation
```bash
pnpm install
pnpm exec playwright install --with-deps chromium
```

## Configuration
The main Playwright configuration is defined in [playwright.config.ts](playwright.config.ts). The current setup targets the develop environment and uses storage-state authentication for repeatable login flows.

## Running Tests
```bash
pnpm test
pnpm run test:headed
pnpm run test:debug
pnpm run test:ui
pnpm run smoke
pnpm run regression
pnpm run sanity
pnpm run auth
```

## Running Specific Suites
```bash
pnpm exec playwright test tests/playwright/tests/authentication
pnpm exec playwright test tests/playwright/tests/admin
pnpm exec playwright test tests/playwright/tests/pim
pnpm exec playwright test tests/playwright/tests/leave
pnpm exec playwright test tests/playwright/tests/time
pnpm exec playwright test tests/playwright/tests/recruitment
pnpm exec playwright test tests/playwright/tests/myinfo
```

## Reporting
```bash
pnpm run report
pnpm run allure:generate
pnpm run allure:open
```

## Storage State
Authentication setup is handled by [tests/playwright/auth/global.setup.ts](tests/playwright/auth/global.setup.ts). A reusable auth state is generated once and used by authenticated tests.

## Fixtures
Shared fixtures live in [tests/playwright/fixtures/index.ts](tests/playwright/fixtures/index.ts) and provide reusable browser/page objects and test data access.

## Utilities
Reusable helpers are located in [tests/playwright/utils/jsonReader.ts](tests/playwright/utils/jsonReader.ts) and can be extended for logging, date handling, random generators, and wait helpers.

## POM Design
Each page object contains only selectors and page-centric actions. Assertions remain in tests so the framework stays readable and maintainable.

## GitHub Actions
The workflow in [.github/workflows/playwright.yml](.github/workflows/playwright.yml) runs tests on push, pull requests, manual dispatch, and a scheduled hourly basis.

## Troubleshooting
- Ensure browser binaries are installed with `pnpm exec playwright install --with-deps chromium`
- If reports do not generate, run `pnpm run clean` and rerun the suite
- If a test is flaky, check the live DOM selectors and update the corresponding page object

## Future Enhancements
- Add more module coverage for advanced CRUD workflows
- Add environment-specific configuration files for staging and production
- Add k6 load test scaffolding under [tests/k6](tests/k6)
- Expand reporting with richer Allure dashboards and historical trend analysis

## Best Practices
- Prefer Playwright auto-waiting over hardcoded waits
- Keep tests independent and deterministic
- Externalize data and avoid hardcoded credentials in test code
- Use meaningful test tags such as `@smoke`, `@regression`, `@sanity`, `@negative`, and `@edge`

## Contribution Guidelines
- Keep page objects small and focused
- Put assertions in the test layer
- Reuse fixtures and utilities rather than duplicating logic
- Verify changes by running `pnpm test` before submitting updates
