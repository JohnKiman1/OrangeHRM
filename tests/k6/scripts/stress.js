import http from 'k6/http';
import { sleep } from 'k6';
import { loadEnvironment } from '../helpers/environment.js';
import { checkStatus } from '../checks/common.js';

const env = loadEnvironment(__ENV.K6_ENV || 'develop');

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 20 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<5000', 'p(99)<6000', 'avg<3000'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  // Add random delay to avoid rate limiting
  sleep(Math.random() * 1);
  
  const res = http.get(`${env.baseUrl}/auth/login`, {
    headers: env.headers,
    timeout: env.timeouts?.httpTimeout || '30s',
  });
  
  checkStatus(res, 200);
  sleep(0.5);
}