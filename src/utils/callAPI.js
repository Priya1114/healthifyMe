export function callGetAPI(endpoint) {
  return fetch(endpoint, {
    method: 'GET',
    mode: 'cors',
  }).then(response => response.json());
}