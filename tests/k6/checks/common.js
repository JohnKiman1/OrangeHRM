import { check } from 'k6';

export function checkStatus(res, expectedStatus) {
  const success = check(res, {
    [`status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
  });
  
  if (!success) {
    console.error(`❌ Expected status ${expectedStatus}, got ${res.status}`);
    console.error(`   URL: ${res.url}`);
    console.error(`   Body: ${res.body ? res.body.substring(0, 200) : 'empty'}`);
  }
  
  return success;
}

export function checkResponseTime(res, maxTime) {
  const duration = res.timings.duration;
  const success = check(res, {
    [`response time < ${maxTime}ms`]: (r) => r.timings.duration < maxTime,
  });
  
  if (!success) {
    console.error(`❌ Response time ${duration}ms exceeded ${maxTime}ms`);
  }
  
  return success;
}