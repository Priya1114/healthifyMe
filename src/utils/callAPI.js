export function callGetAPI(endpoint) {
  return fetch(endpoint, { method: 'GET'}).then(response => response.json());
}