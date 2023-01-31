import Taro from "@tarojs/taro";
import EventEmitter, { IFunction } from "~/modules/@wmeimob/event-emitter";
import { RequestEventEnum, IData, Result, IRequestOption } from "../const";
import { normalizationUrl, validateStatus } from "../utils";

export interface RequestEventList extends IFunction {
  [RequestEventEnum.WillSend]: (
    params: Taro.request.Option<string | IData>
  ) => void;
  [RequestEventEnum.DidMount]: (
    res: Taro.request.SuccessCallbackResult<any>,
    params: {
      url: string;
      data: IData | string;
      options: IRequestOption;
    }
  ) => void | Promise<Taro.request.SuccessCallbackResult<any>>;
}

export default class TaroRequest {
  eventEmitter = new EventEmitter<RequestEventList>();

  defaultOptions: IRequestOption = {
    showFailToast: true,
    isCatchFail: true
  };

  private baseUrl = "";

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<T extends Result>(
    url: string,
    data: IData | string = {},
    options: IRequestOption
  ): Promise<
    Taro.request.SuccessCallbackResult<T> & { content: T["content"] }
  > {
    const requestUrl = normalizationUrl(this.baseUrl, url);
    const requestOptions = { ...this.defaultOptions, ...options };
    const header = await this.getHeader();
    const params = {
      url: requestUrl,
      data,
      header,
      ...requestOptions
    };

    if (!options.unWillSend) {
      await this.eventEmitter.emit(RequestEventEnum.WillSend, params);
    }

    let res: Taro.request.SuccessCallbackResult<any> = null as any;
    try {
      res = await Taro.request(params);
    } catch (error) {
      res = {
        statusCode: -1,
        data: {}
      } as any;
    }

    const mountReturn = await this.eventEmitter.emit(
      RequestEventEnum.DidMount,
      res,
      {
        url,
        data,
        options
      }
    );

    for (const key in mountReturn) {
      if (mountReturn.hasOwnProperty(key)) {
        const element = mountReturn[key];
        if (element) {
          return element;
        }
      }
    }

    if (requestOptions.showFailToast) {
      this.failToast(res, requestUrl);
    }

    if (requestOptions.isCatchFail && !validateStatus(res.statusCode)) {
      throw res;
    }

    const content = res.data ? res.data.content : undefined;
    return { ...res, content };
  }

  private async getHeader() {
    const headers = {};
    headers["Content-Type"] = "application/json";
    return headers;
  }

  private async failToast(
    response: Taro.request.SuccessCallbackResult<any>,
    url: string
  ) {
    if (!validateStatus(response.statusCode)) {
      const { data } = response;
      if (data.error) {
        // 弹出后端报错
        Taro.showToast({
          icon: "none",
          title: `${data.error.message}`,
          duration: 2500
        });
      } else if (response.statusCode && response.statusCode > 0) {
        Taro.showToast({
          icon: "none",
          title: data.description,
          duration: 2500
        });
      } else if (response.statusCode && response.statusCode === -1) {
        Taro.showToast({
          icon: "none",
          title: `网络请求失败，请检查您的网络。`,
          duration: 2500
        });
      } else {
        Taro.showToast({
          icon: "none",
          title: `未知错误，万分抱歉！`,
          duration: 2500
        });
      }
    }
  }
}
