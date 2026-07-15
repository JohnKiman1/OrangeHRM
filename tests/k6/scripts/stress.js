import http from 'k6/http';
import { sleep } from 'k6';
import { loadEnvironment } from '../helpers/environment.js';
import { checkStatus } from '../checks/common.js';

const env = loadEnvironment(__ENV.K6_ENV || 'develop');

export const options = {
  stages: [
    { duration: '10s', target: 20 },
    { duration: '20s', target: 40 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<1500'],
    checks: ['rate>0.98'],
  },
};

export default function () {
  const res = http.get(`${env.baseUrl}/auth/login`);
  checkStatus(res, 200);
  sleep(0.5);
}
