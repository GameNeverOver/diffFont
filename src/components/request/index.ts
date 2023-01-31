import Request from '~/modules/@wmeimob/request/src/taro/index'
import * as config from '~/config'
import * as Taro from '@tarojs/taro'
import { merge } from '~/modules/@wmeimob/decorator/src/components'
import {
  RequestEventEnum,
  IData,
  IRequestOption,
} from '~/modules/@wmeimob/request/src/const'
import * as API from '~/openApiModel/web-api/index'
import { sleep } from '../utils'
import $Store2 from '~/globalStore2'

const { get, post, del, put, request, requestObj } = new Request<typeof API>(
  config
)
export { get, post, del, put, request }

class RequestFunction {
  @merge()
  static async getToken() {
    const { code } = await Taro.login()
    return post(
      config.silentAuthorizationUrl as any,
      { code },
      {
        unWillSend: true,
      }
    )
  }

  /**
   * 请求发送开始 可修改请求参数
   *
   * @export
   * @param {(Taro.request.Param<string | any>)} params
   */
  static async requestWillMount(params: Taro.request.Option<string | any>) {
    let token = Taro.getStorageSync('token')
    if (!token) {
      if (config.silentAuthorization) {
        // 静默授权
        const { data } = await RequestFunction.getToken()
        // 赋值token
        token = data.data.token
        Taro.setStorageSync('token', token)
      }
      // else {
      //   console.log('?...')
      //   Taro.navigateTo({
      //     url: config.loginUrl
      //   });
      // }
    }

    params.header = {
      ...params.header,
      Authorization: token,
    }
  }

  /**
   * 请求发送结束
   *
   * @static
   * @memberof RequestFunction
   */
  static async requestDidMount(
    response: Taro.request.SuccessCallbackResult,
    params: {
      url: string
      data: IData | string
      options: IRequestOption
    }
  ) {
    if (response.data) {
      if (response.data.code !== 200) {
        if (response.data.code === 401) {
          Taro.setStorageSync('token', '')

          if (config.silentAuthorization) {
            const res = await requestObj.request<any>(
              params.url,
              params.data,
              params.options
            )
            return res
          }

          Taro.navigateTo({
            url: config.loginUrl,
          })
        } else {
          Taro.showToast({
            icon: 'none',
            title:
            [100020, 100014].includes(response.data.code)
                ? '正在获取登录态...'
                : response.data.msg || '请求异常~',
            duration: 1500,
          })
          if ([100020, 100014].includes(response.data.code)) {
            Taro.clearStorage()
            sleep(1000, () => {
              $Store2.tabKey = 0
              Taro.reLaunch({
                url: config.loginUrl,
              })
            })
          }
        }
      }
    }
  }
}

requestObj.eventEmitter.addListener(
  RequestEventEnum.WillSend,
  RequestFunction.requestWillMount
)
requestObj.eventEmitter.addListener(
  RequestEventEnum.DidMount,
  RequestFunction.requestDidMount as any
)
