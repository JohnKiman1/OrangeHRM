# Performance Test Plan

## Objectives
- Validate OrangeHRM responsiveness under light and moderate load.
- Establish a reusable performance baseline for future growth.

## Scope
- Login page performance.
- Shared dashboard route access.

## Environment
- Develop environment against the public OrangeHRM demo site.

## Entry Criteria
- Application is reachable.
- Test environment configuration is available.

## Exit Criteria
- All configured thresholds pass.
- Reports are generated successfully.

## Workload Model
- Smoke: 5 VUs for 30 seconds.
- Load: ramp-up to 10 VUs.
- Stress: higher concurrency burst.
- Soak: sustained traffic over time.

## Metrics and KPIs
- Response time percentiles.
- Error rate.
- Checks rate.
- Throughput.

## Success Criteria
- HTTP failures remain below the configured threshold.
- Response times stay within the configured budget.
