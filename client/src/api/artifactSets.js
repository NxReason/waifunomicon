import { request } from './utils';
const resourcePath = '/artifact-sets';

export async function all() {
  return request(`${resourcePath}`);
}

export async function find(id) {
  return request(`${resourcePath}/${id}`);
}

export async function save(data) {
  return request(`${resourcePath}`, 'POST', data);
}

export async function update(id, data) {
  return request(`${resourcePath}/${id}`, 'PATCH', data);
}

export async function remove(id) {
  return request(`${resourcePath}/${id}`, 'DELETE');
}
