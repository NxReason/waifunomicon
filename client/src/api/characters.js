import { request } from './utils';

export async function all() {
  return request('/characters');
}

export async function find(id) {
  return request(`/characters/${id}`);
}

export async function save(data) {
  return request(`/characters`, 'POST', data);
}

export async function update(id, data) {
  return request(`/characters/${id}`, 'PATCH', data);
}

export async function remove(id) {
  return request(`/characters/${id}`, 'DELETE');
}
