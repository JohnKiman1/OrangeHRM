# Framework Design

This framework uses Playwright with TypeScript and follows a modular architecture that separates concerns into pages, fixtures, data, utilities, and tests.

## Principles
- Keep page objects focused on UI interactions
- Keep assertions in tests
- Externalize test data in JSON files
- Reuse fixtures for common setup
- Avoid hard-coded waits and prefer Playwright auto-waiting
