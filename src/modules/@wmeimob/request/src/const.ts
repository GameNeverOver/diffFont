export enum RequestEventEnum {
  /**
   * 即将发送
   */
  WillSend,
  /**
   * 发送完毕
   */
  DidMount
}

export interface Result {
  content?: any
  error?: {
    message: string;
  };
}

export interface IData {
  [key: string]: any;
}

/**
 * 参数
 *
 * @interface IInterceptor
 */
export interface IRequestOption {
  /**
   * 请求内容
   *
   * @type {string}
   * @memberof IRequestOption
   */
  body?: string;

  /**
   * 报头
   *
   * @type {Data}
   * @memberof IRequestOption
   */
  headers?: IData;

  /**
   * 请求类型
   *
   * @type {'DELETE'}
   * @memberof IRequestOption
   */
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT';

  /**
   * 启动错误弹窗
   *
   * @type {boolean}
   * @memberof IFetchOption
   */
  showFailToast?: boolean;

  /**
   * 是否捕获错误 [接口status错误,阻止代码的继续运行]
   *
   * @type {boolean}
   * @memberof IFetchOption
   */
  isCatchFail?: boolean;

  /**
   * 不触发 WillSend
   *
   * @type {boolean}
   * @memberof IRequestOption
   */
  unWillSend?: boolean

  /**
   * 是否mock数据
   *
   * @type {boolean}
   * @memberof IRequestOption
   */
  isMock?: boolean
}

export interface IAPI {
  APIGet: any
  APIPost: any
  APIPut: any
  APIDelete: any
}

export interface IRequestConfig {
  silentAuthorization: boolean
  silentAuthorizationUrl: string
  loginUrl: string
}

export type IResponse<T extends Result> = Response & { data: T; content: T["content"] }

export type IRequestInterceptorFunction = (params: IRequestOption) => void;
export type IResponseInterceptorFunction = (response: IResponse<Result>) => void;
