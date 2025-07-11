const BASE_URL = 'http://localhost:3000';
const HEADERS = {
  'Content-Type': 'application/json',
};

export async function request(path, method = 'GET', body = {}) {
  const options = { method };
  if (method === 'POST' || method === 'PATCH') {
    options.body = JSON.stringify(body);
    options.headers = HEADERS;
  }
  try {
    const response = await fetch(`${BASE_URL}${path}`, options);
    if (!response.ok)
      throw new Error(`Server responded with status: ${response.status}`);
    const data = await response.json();
    return { ok: true, data };
  } catch (err) {
    return { ok: false };
  }
}
