import http from 'k6/http';
import { sleep } from 'k6';
import { loadEnvironment } from '../helpers/environment.js';
import { checkStatus } from '../checks/common.js';

const env = loadEnvironment(__ENV.K6_ENV || 'develop');

export const options = {
  stages: [
    { duration: '30s', target: 5 },
    { duration: '120s', target: 5 },
    { duration: '30s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<900'],
    checks: ['rate>0.99'],
  },
};

export default function () {
  const res = http.get(`${env.baseUrl}/auth/login`);
  checkStatus(res, 200);
  sleep(2);
}
