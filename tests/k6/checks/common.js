import { check } from 'k6';

export function checkStatus(resp, expectedStatus = 200) {
  return check(resp, {
    [`status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
  });
}

export function checkContentType(resp, expectedType = 'application/json') {
  return check(resp, {
    [`content-type contains ${expectedType}`]: (r) => r.headers['Content-Type']?.includes(expectedType) ?? false,
  });
}
