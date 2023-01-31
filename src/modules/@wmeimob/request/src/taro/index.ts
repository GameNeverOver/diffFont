import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import { IAPI, IRequestOption } from '../const';
import { paserDynamicPath } from '../utils';
import TaroRequest from './fetch';

interface IConfig {
  silentAuthorization: boolean
  silentAuthorizationUrl: string
  loginUrl: string
  apiUrl: string
}

@autobind
export default class Request<P extends IAPI> {
  requestObj: TaroRequest

  constructor(config: IConfig) {
    this.requestObj = new TaroRequest(config.apiUrl);
  }

  get<T extends keyof P['APIGet'] & string>(url: T, data?: P['APIGet'][T]['params'] | string, option: IRequestOption = {}) {
    return this.request<P['APIGet'][T]['data']>(url, data, { method: 'GET', ...option });
  }

  post<T extends keyof P['APIPost'] & string>(url: T, data?: P['APIPost'][T]['params'] | string, option: IRequestOption = {}) {
    return this.request<P['APIPost'][T]['data']>(url, data, { method: 'POST', ...option });
  }

  put<T extends keyof P['APIPut'] & string>(url: T, data?: P['APIPut'][T]['params'] | string, option: IRequestOption = {}) {
    return this.request<P['APIPut'][T]['data']>(url, data, { method: 'PUT', ...option });
  }

  del<T extends keyof P['APIDelete'] & string>(url: T, data?: P['APIDelete'][T]['params'] | string, option: IRequestOption = {}) {
    return this.request<P['APIDelete'][T]['data']>(url, data, { method: 'DELETE', ...option });
  }

  request<T extends { content: any }>(path: string, data?: any, option: IRequestOption = {}) {
    const { url, data: parseDdata } = paserDynamicPath(path, data);
    return this.requestObj.request<T>(url, parseDdata, option)
  }
}
