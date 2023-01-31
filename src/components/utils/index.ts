import Taro, { useContext } from '@tarojs/taro'
import { get } from '~/components/request'

let _requestOnOff = true
export function requestOnOff() {
  if (_requestOnOff) {
    _requestOnOff = false
    sleep(2000, () => (_requestOnOff = true))
    return true
  }
  return false
}

export function sleep(ms, callback) {
  setTimeout(callback, ms)
}

export const toast = {
  success(title?: string): Promise<any> {
    return Taro.showToast({
      title: title || '成功',
      icon: 'success',
      duration: 1500,
    })
  },
  fail(title?: string): Promise<any> {
    return Taro.showToast({
      title: title || '失败',
      icon: 'none',
      duration: 1500,
    })
  },
  info(title: string): Promise<any> {
    return Taro.showToast({
      title,
      icon: 'none',
      duration: 1500,
    })
  },
  loading(title?: string): Promise<any> {
    return Taro.showLoading({
      title: title || '加载中',
      mask: true,
    })
  },
  hideLoading(): void {
    Taro.hideLoading()
  },
  hideToast(): void {
    Taro.hideToast()
  },
}

export const isScan = (str) => {
  const reg = /^[0-9a-zA-Z]*$/g
  return reg.test(str)
}

export const isMobile = (str) => {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
  return reg.test(str)
}

export const isId = (card: string) => {
  // 身份证
  const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/
  return reg.test(card)
}

const enlarge = (url, urls?) => {
  //图片预览
  Taro.previewImage({
    current: url, // 当前显示图片的http链接
    urls: urls,
  })
}

export const onEnlarge = (url: string, urls: string[]) => {
  enlarge(url, urls)
}
