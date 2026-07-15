export function loadEnvironment(env = 'develop') {
  const configs = {
    develop: {
      name: 'develop',
      baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
      auth: {
        username: 'Admin',
        password: 'admin123'
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'k6-performance-test'
      },
      timeouts: {
        httpTimeout: '30s',
        gracefulStop: '60s',
        gracefulRampDown: '60s'
      },
      thresholds: {
        http_req_failed: ['rate<0.05'],
        http_req_duration: ['p(95)<5000', 'p(99)<6000', 'avg<3000'],
        checks: ['rate>0.95']
      },
      defaults: {
        vus: 1,
        duration: '30s',
        stages: [
          { duration: '10s', target: 1 },
          { duration: '20s', target: 3 },
          { duration: '10s', target: 0 }
        ]
      }
    },
    staging: {
      name: 'staging',
      baseUrl: 'https://staging.orangehrmlive.com/web/index.php',
      auth: {
        username: 'Admin',
        password: 'admin123'
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'k6-performance-test'
      },
      timeouts: {
        httpTimeout: '20s',
        gracefulStop: '30s',
        gracefulRampDown: '30s'
      },
      thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<3000', 'p(99)<4000', 'avg<2000'],
        checks: ['rate>0.99']
      },
      defaults: {
        vus: 5,
        duration: '30s',
        stages: [
          { duration: '10s', target: 5 },
          { duration: '20s', target: 10 },
          { duration: '10s', target: 0 }
        ]
      }
    },
    production: {
      name: 'production',
      baseUrl: 'https://orangehrmlive.com/web/index.php',
      auth: {
        username: 'Admin',
        password: 'admin123'
      },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'k6-performance-test'
      },
      timeouts: {
        httpTimeout: '10s',
        gracefulStop: '30s',
        gracefulRampDown: '30s'
      },
      thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<2000', 'p(99)<3000', 'avg<1000'],
        checks: ['rate>0.99']
      },
      defaults: {
        vus: 10,
        duration: '30s',
        stages: [
          { duration: '10s', target: 10 },
          { duration: '20s', target: 20 },
          { duration: '10s', target: 0 }
        ]
      }
    }
  };

  if (configs[env]) {
    console.log(`✅ Using config for environment: ${env}`);
    return configs[env];
  }

  console.warn(`⚠️ Environment ${env} not found, using develop config`);
  return configs.develop;
}