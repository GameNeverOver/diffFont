import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
/**
 * 屏幕宽度
 * @export
 */
const window = Dimensions.get('window');
export const windowWidth = window.width;
export const windowHeight = window.height;

/**
 * 判断是不是新的下面有黑条的iphone
 *
 * @export
 * @returns
 */
export function getIsNewIphone() {
  const deviceId = DeviceInfo.getDeviceId();;

  if (/iPhoneX/.test(deviceId) || /iPhone11/.test(deviceId) || /iPhone12/.test(deviceId) ||
    /iPhone13/.test(deviceId) || /iPhone14/.test(deviceId) || /iPhone15/.test(deviceId)) {
    return true;
  }
  return false
}

/**
 * 查询元素大小
 *
 * @export
 * @param {string} name
 * @param {*} scope
 * @returns
 */
export function selectRect(layoutEvent: React.RefObject<unknown>): Promise<{
  left: number,
  top: number,
  right: number,
  bottom: number,
  width: number,
  height: number
}> {
  return new Promise((resolve) => {
    // 页面打开有个动画所有不准要延迟
    setTimeout(() => {
      NativeModules.UIManager.measure(layoutEvent, (_x, _y, width, height, left, top, right) => {
        resolve({
          left,
          top,
          right: windowWidth - left,
          bottom: windowHeight - top,
          width,
          height
        });
      })
    }, 200)
  });
}
