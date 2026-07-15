export const defaultThresholds = {
  http_req_failed: ['rate<0.01'],
  http_req_duration: ['p(95)<800', 'p(99)<1200', 'avg<500'],
  checks: ['rate>0.99'],
};
