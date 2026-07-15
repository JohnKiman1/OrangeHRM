export function loadEnvironment(env = 'develop') {
  // For develop environment, use this config
  const configs = {
    develop: {
      name: 'develop',
      baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
      auth: {
        username: 'Admin',
        password: 'admin123'
      },
      headers: {
        'Content-Type': 'application/json'
      },
      timeouts: {
        httpTimeout: '10s',
        gracefulStop: '30s',
        gracefulRampDown: '30s'
      },
      thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<5000', 'p(99)<6000', 'avg<3000'],
        checks: ['rate>0.99']
      },
      defaults: {
        vus: 5,
        duration: '30s',
        stages: [
          { duration: '10s', target: 5 },
          { duration: '20s', target: 10 }
        ]
      }
    }
  };

  // Add other environments as needed
  // configs.staging = { ... };
  // configs.production = { ... };

  if (configs[env]) {
    console.log(`✅ Using config for environment: ${env}`);
    return configs[env];
  }

  // If environment not found, use develop as default
  console.warn(`⚠️ Environment ${env} not found, using develop config`);
  return configs.develop;
}