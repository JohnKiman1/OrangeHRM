# k6 Framework

The k6 framework in this repository complements the existing Playwright suite by providing modular load and performance tests for the OrangeHRM demo application.

## Design Approach
- Keep k6 tests independent from Playwright tests.
- Use shared configuration and helpers so scenarios stay modular.
- Externalize configuration and payload data.
- Reuse common checks and thresholds.

## Structure
- config/: environment configuration files
- scripts/: scenario entry points
- helpers/: environment, auth, and request utilities
- checks/: reusable assertions
- thresholds/: centralized threshold definitions
- reports/: static report assets
