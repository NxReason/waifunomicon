export function makeRequestParams(...parts) {
  const path = makePath(...parts);
  return function (method = 'GET', data) {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
    if (data) options.body = JSON.stringify(data);

    return [path, options];
  };
}

export async function makeRequest(options) {
  try {
    const res = await fetch(...options);
    const data = await res.json();

    return res.ok
      ? makeSuccessResponse(res, data)
      : makeFailedResponse(res, data);
  } catch (err) {
    return makeResponseOnError(err);
  }
}

export function makeSuccessResponse(res, data) {
  return {
    ok: true,
    status: res.status,
    data,
  };
}

export function makeFailedResponse(res, data) {
  return {
    ok: false,
    status: res.status,
    errors: data.errors ?? [],
  };
}

export function makeResponseOnError(err) {
  return {
    ok: false,
    msg: 'Something went wrong',
    err,
  };
}

function makePath(...parts) {
  if (parts.length === 0) {
    console.error(`At least 1 argument needed to create request path`);
    return null;
  }

  return parts.join('/');
}
