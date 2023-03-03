import Taro from '@tarojs/taro'
/**
 * 下面是开发中遇到的所有方法集合，可以叠加
 */
/**
 * 时间戳转换
 * @param {*} timestamp //时间戳
 * @param {*} format //时间类型
 */
export function dateFormat(timestamp, format = 'yyyy-MM-dd hh:mm:ss') {
  const date = new Date(timestamp)
  let newFormat = format
  const obj = {
    'M+': date.getMonth() + 1, // month
    'd+': date.getDate(), // day
    'h+': date.getHours(), // hour
    'm+': date.getMinutes(), // minute
    's+': date.getSeconds(), // second
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(), // millisecond
  }
  const week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  if (/(y+)/.test(newFormat)) {
    newFormat = newFormat.replace(
      RegExp.$1,
      String(date.getFullYear()).substr(4 - RegExp.$1.length)
    )
  }
  if (/(w+)/.test(newFormat)) {
    newFormat = newFormat.replace(RegExp.$1, week[date.getDay()])
  }
  for (const res in obj) {
    if (new RegExp('(' + res + ')').test(newFormat)) {
      newFormat = newFormat.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? obj[res] : ('00' + obj[res]).substr(String(obj[res]).length)
      )
    }
  }
  return newFormat
}
export function getWeek(date) {
  let week
  if (date.getDay() === 0) week = '周日'
  if (date.getDay() === 1) week = '周一'
  if (date.getDay() === 2) week = '周二'
  if (date.getDay() === 3) week = '周三'
  if (date.getDay() === 4) week = '周四'
  if (date.getDay() === 5) week = '周五'
  if (date.getDay() === 6) week = '周六'
  return week
}
/**
 * 朋友圈时间格式
 * @param {*} dateTime//时间戳
 */
export function getDateDiff(dateTime) {
  const dateTimeStamp = new Date(dateTime).getTime()
  let result = ''
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  // const halfamonth = day * 15;
  const month = day * 30
  const year = day * 365
  const now = new Date().getTime()
  const diffValue = now - dateTimeStamp
  if (diffValue < 0) {
    return
  }
  const monthEnd = (diffValue / month) as any
  const weekEnd = (diffValue / (7 * day)) as any
  const dayEnd = (diffValue / day) as any
  const hourEnd = (diffValue / hour) as any
  const minEnd = (diffValue / minute) as any
  const yearEnd = (diffValue / year) as any
  if (yearEnd >= 1) {
    result = dateTime
  } else if (monthEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(monthEnd)) + '月前'
  } else if (weekEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(weekEnd)) + '周前'
  } else if (dayEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(dayEnd)) + '天前'
  } else if (hourEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(hourEnd)) + '小时前'
  } else if (minEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(minEnd)) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}
/**
 *  手机号校验
 * @param {*} str 手机号
 */
export function isPhone(str) {
  const reg = /^[1][2, 3,4,5, 6 ,7,8, 9][0-9]{9}$/
  return reg.test(str)
}
/**
 * 手机号加密显示
 * @param phone 手机号
 */
export function encryptPhone(phone: string) {
  return phone.substr(0, 4) + '****' + phone.substr(7)
}
/**
 *  base64转换本地图
 * @param {*} base64data 路径
 *
 */
export function base64src(base64data) {
  return new Promise((resolve, reject) => {
    const fsm = Taro.getFileSystemManager()
    const timestamp = Date.parse(new Date()) / 1000 // 先创建时间戳用来命名（不加时间戳在画连续画第二张图的时候有问题）
    const FILE_BASE_NAME = 'tmp_base64' + timestamp
    const [, format, bodyData] = /data:image\/(\w+);base64,(.*)/.exec(base64data) || []
    if (!format) {
      reject(new Error('ERROR_BASE64SRC_PARSE'))
    }
    const filePath = `${Taro.env.USER_DATA_PATH}/${FILE_BASE_NAME}.${format}`
    const buffer = Taro.base64ToArrayBuffer(bodyData)
    fsm.writeFile({
      filePath,
      data: buffer,
      encoding: 'binary',
      success() {
        resolve(filePath)
      },
      fail() {
        reject(new Error('ERROR_BASE64SRC_WRITE'))
      },
    })
  })
}

/**
 * 保存图片到相册
 * @param {*} imgUrl
 * @param {*} type 图片类型 1本地 2网络
 */
export function downImg(imgUrl, type = 1) {
  const func1 = function(newUrl) {
    Taro.saveImageToPhotosAlbum({
      filePath: newUrl,
      success() {
        Taro.showToast({
          title: '保存成功',
          duration: 1500,
        })
      },
    })
  }
  const func2 = function(newUrl) {
    Taro.downloadFile({
      url: newUrl,
      success(res) {
        if (res.statusCode === 200) {
          func1(res.tempFilePath)
        }
      },
    })
  }
  /** 检测用户是否授权**/
  Taro.getSetting({
    success(res) {
      /** 授权，则调用相册**/
      if (res.authSetting['scope.writePhotosAlbum'] === true) {
        type === 1 ? func1(imgUrl) : func2(imgUrl)
      } else if (res.authSetting['scope.writePhotosAlbum'] === false) {
        /** 未授权，则打开授权页面，让用户授权**/
        Taro.openSetting({
          success(val) {
            /** 授权成功，则保存图片，失败则不保存**/
            if (val.authSetting['scope.writePhotosAlbum'] === true) {
              type === 1 ? func1(imgUrl) : func2(imgUrl)
            }
          },
        })
      } else {
        type === 1 ? func1(imgUrl) : func2(imgUrl)
      }
    },
  })
}
/**
 * 多张网络图同时下载，顺序不变
 * @param imgUrl
 */
export function localityImg(imgList) {
  return Promise.all(
    imgList.map(
      item =>
        new Promise((resolve, reject) => {
          Taro.downloadFile({
            url: item,
            success(val) {
              if (val.statusCode === 200) {
                resolve(val.tempFilePath)
              }
            },
            fail(err) {
              reject(err)
            },
          })
        })
    )
  )
}
/**
 * 获取当前经纬度
 *
 */
export async function getAddress() {
  const address = function() {
    return new Promise(resolve => {
      Taro.getLocation({
        type: 'wgs84',
        success(res) {
          resolve(res)
        },
      })
    })
  }
  /** 检测用户是否授权**/
  return new Promise(resolve => {
    Taro.getSetting({
      success(res) {
        if (res.authSetting['scope.userLocation'] === true) {
          resolve(address())
        } else if (res.authSetting['scope.userLocation'] === false) {
          Taro.openSetting({
            success: Val => {
              if (Val.authSetting['scope.userLocation'] === true) {
                resolve(address())
              }
            },
          })
        } else {
          resolve(address())
        }
      },
    })
  })
}

/**
 * 防抖 应用于hook写法，类写法用装饰器@debounce(wait) 适用与input
 * @param func
 * @param wait
 */
export function debounce(fn, interval = 1000) {
  let timer
  const gapTime = interval // 间隔时间，如果interval不传，则默认1000ms
  return function() {
    clearTimeout(timer)
    const context = this as any
    // eslint-disable-next-line prefer-rest-params
    const args = arguments[0] // 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(() => {
      fn.call(context, args)
    }, gapTime)
  }
}
/**
 * 节流函数  应用于hook写法，类写法用装饰器@throttle(wait),适用于表单提交
 * @param fn
 * @param interval
 *
 */
/* 函数节流 */
export function throttle(fn, interval = 2000) {
  let enterTime = 0 // 触发的时间
  const gapTime = interval // 间隔时间，如果interval不传，则默认300ms
  return function() {
    const context = this as any
    const backTime = new Date() as any // 第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      // eslint-disable-next-line prefer-rest-params
      fn.call(context, arguments)
      enterTime = backTime // 赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  }
}
/**
 * 弹框
 */
export const toast = {
  success(text, interval = 2000): Promise<any> {
    return Taro.showToast({
      title: text,
      icon: 'success',
      duration: interval,
    })
  },
  loading(text, interval = 2000): Promise<any> {
    return Taro.showToast({
      title: text,
      icon: 'loading',
      duration: interval,
    })
  },
  none(text, interval = 2000): Promise<any> {
    return Taro.showToast({
      title: text,
      icon: 'none',
      duration: interval,
    })
  },
}
/**
 *
 * @param callBack 回调方法
 */
export function sleep(ms, callback) {
  setTimeout(callback, ms)
}

/**
 * 跳转
 */
export const wx = {
  navigateTo(url): Promise<any> {
    return Taro.navigateTo({ url })
  },
  redirectTo(url): Promise<any> {
    return Taro.redirectTo({ url })
  },
  reLaunch(url): Promise<any> {
    return Taro.reLaunch({ url })
  },
  navigateBack(): Promise<any> {
    return Taro.navigateBack()
  },
  switchTab(url): Promise<any> {
    return Taro.switchTab({ url })
  },
}

export function sharePage() {
  Taro.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline'],
    success(res) {
      console.log(res)
    },
    fail(e) {
      console.log(e)
    },
  } as any)
}
