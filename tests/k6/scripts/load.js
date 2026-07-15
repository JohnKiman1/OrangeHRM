import http from 'k6/http';
import { sleep } from 'k6';
import { loadEnvironment } from '../helpers/environment.js';
import { checkStatus } from '../checks/common.js';

const env = loadEnvironment(__ENV.K6_ENV || 'develop');

export const options = {
  stages: env.defaults.stages,
  thresholds: env.thresholds,
};

export default function () {
  const loginPage = http.get(`${env.baseUrl}/auth/login`);
  checkStatus(loginPage, 200);
  sleep(1);
}
