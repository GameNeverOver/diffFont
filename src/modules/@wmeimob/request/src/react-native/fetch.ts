import EventEmitter, { IFunction } from '~/modules/@wmeimob/event-emitter';
import { Result, IRequestOption, RequestEventEnum, IData } from '../const';
import { normalizationUrl, validateStatus } from '../utils';
import { GloalPopup } from '~/modules/@wmeimob/react-native-design/src/components/modal/global';
import AsyncStorage from '@react-native-community/async-storage';

export interface RequestEventList extends IFunction {
  [RequestEventEnum.WillSend]: (params: IRequestOption) => void;
  [RequestEventEnum.DidMount]: (res: Response) => void;
}

export default class RequestFetch {
  eventEmitter = new EventEmitter<RequestEventList>();

  defaultOptions: IRequestOption = {
    showFailToast: true,
    isCatchFail: true
  };

  private baseUrl = ''

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<T extends Result>(
    url: string,
    data: IData | string = {},
    options: IRequestOption,
  ): Promise<Response & { data: T; content: T["content"] }> {
    if (typeof data === 'object') {
      data.appId = '10';
    }

    let requestUrl = normalizationUrl(this.baseUrl, url);
    const requestOptions = { ...this.defaultOptions, ...options };
    const parameters = this.getParameters(options.method as string, data);
    requestUrl += parameters.url;
    const headers = await this.getHeaders();
    const params: IRequestOption = {
      ...requestOptions,
      headers
    };

    if (parameters.body) {
      params.body = parameters.body;
    }

    if (!options.unWillSend) {
      await this.eventEmitter.emit(RequestEventEnum.WillSend, params);
    }

    let res: Response = null as any;
    try {
      res = await fetch(requestUrl, params);
    } catch (error) {
      res = {
        statusCode: -1,
        data: {}
      } as any;
    }

    await this.eventEmitter.emit(RequestEventEnum.DidMount, res);

    if (requestOptions.showFailToast) {
      this.failToast(res, requestUrl);
    }

    if (requestOptions.isCatchFail && !validateStatus(res.status)) {
      throw res;
    }

    const returnData: any = await this.getData(res);
    return Object.assign(res, { data: returnData, content: returnData?.content }) as any;
  }

  /**
   * 获取参数
   *
   * @private
   * @param {string} method
   * @param {Data} data
   * @returns
   * @memberof APPfetch
   */
  private getParameters(method: string, data: any | string) {
    let url = '';
    let body = '';
    if (data && (method === 'GET' || method === 'DELETE')) {
      const params = new URLSearchParams(data).toString();
      if (url.search(/\?/) === -1) {
        url += `?${params}`;
      } else {
        url += `&${params}`;
      }
    } else if (data !== undefined) {
      if (typeof data === 'string') {
        body = `"${data as any}"`;
      } else {
        body = JSON.stringify(data);
      }
    }
    return {
      url,
      body
    };
  }

  /**
   * 获取response 返回值
   *
   * @private
   * @param {Response} response
   * @returns {(Promise<string | Data>)}
   * @memberof ZDfetch
   */
  private async getData<T>(response: Response): Promise<T> {
    const responseClone = response.clone();
    const responseText = await responseClone.text();
    let data: any = {};
    try {
      if (
        responseText.indexOf('"') === 0 ||
        responseText.indexOf('{') === 0 ||
        responseText.indexOf('[') === 0
      ) {
        data = JSON.parse(responseText);
      } else {
        data = responseText;
      }
    } catch (er) {
      data = 'JSON parse 失败';
    }
    return data;
  }

  private async getHeaders() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const token = await AsyncStorage.getItem('token');
    if (token) {
      headers.append('Authorization', token);
    }

    return headers;
  }

  private async failToast(response: Response, url: string) {
    const responseClone = response.clone();

    const data: any = await this.getData(response);

    if (!validateStatus(responseClone.status)) {
      if (data.error) {
        GloalPopup.toast(data.error.message);
      } else if (responseClone.status && responseClone.status > 0) {
        GloalPopup.toast(`url:${url.toString()},statusCode:${responseClone.status}`);
      } else if (responseClone.status && responseClone.status === -1) {
        GloalPopup.toast('网络请求失败，请检查您的网络。');
      } else {
        GloalPopup.toast('未知错误，万分抱歉！');
      }
    }
  }
}
