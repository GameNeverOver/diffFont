/**
 * 解析并替换url中的动态参数
 *
 * @param {string} [path='']
 * @param {*} params
 * @returns
 */
export function paserDynamicPath(path = '', params: any = {}) {
  const data: any = {};
  let url = path;
  Object.keys(params).forEach(key => {
    const dyReg = new RegExp(`:${key}`, 'g');
    if (dyReg.test(url)) {
      url = url.replace(dyReg, params[key]);
    } else {
      data[key] = params[key];
    }
  })

  return { url, data }
}

/**
 * 根据状态码判断是否报错。
 *
 * @export
 * @param {number} statusCode
 * @param {*} data
 * @returns
 */
export function validateStatus(statusCode: number) {
  return statusCode >= 200 && statusCode < 300;
}

/**
 * 格式化 url
 *
 * @export
 * @param {string} apiUrl
 * @param {string} url
 * @returns
 */
export function normalizationUrl(apiUrl: string, url: string) {
  let requestUrl = url;

  if (apiUrl[apiUrl.length - 1] === '/') {
    if (requestUrl[0] === '/') {
      requestUrl = requestUrl.replace('/', '');
    }
  } else {
    if (requestUrl[0] !== '/' && !/^https{0,1}:\/\//g.test(requestUrl)) {
      requestUrl = '/' + requestUrl;
    }
  }

  if (!/^https{0,1}:\/\//g.test(requestUrl)) {
    requestUrl = `${apiUrl}${requestUrl}`;
  }

  return requestUrl;
}
