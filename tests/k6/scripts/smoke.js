import http from 'k6/http';
import { sleep } from 'k6';
import { loadEnvironment } from '../helpers/environment.js';
import { checkStatus } from '../checks/common.js';

const env = loadEnvironment(__ENV.K6_ENV || 'develop');

export const options = {
  vus: env.defaults.vus,
  duration: env.defaults.duration,
  thresholds: env.thresholds,
};

export default function () {
  const res = http.get(`${env.baseUrl}/auth/login`);
  checkStatus(res, 200);
  sleep(1);
}
