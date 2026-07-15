import http from 'k6/http';

export function getJson(url, params = {}) {
  return http.get(url, params);
}

export function postJson(url, payload, params = {}) {
  return http.post(url, JSON.stringify(payload), params);
}
