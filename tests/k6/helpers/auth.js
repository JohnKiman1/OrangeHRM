import http from 'k6/http';
import { loadEnvironment } from './environment.js';

export function authenticate() {
  const env = loadEnvironment(__ENV.K6_ENV || 'develop');
  const loginPayload = {
    username: env.auth.username,
    password: env.auth.password,
  };

  const res = http.post(`${env.baseUrl}/auth/validate`, JSON.stringify(loginPayload), {
    headers: env.headers,
    tags: { name: 'auth.login' },
  });

  return { res, env };
}
