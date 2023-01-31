/**
 * @description hooks组件对应的mobx
 */
import { decorate, observable, action } from 'mobx'
import { createContext } from '@tarojs/taro'
import { fomatOffset } from '~/consts'

class Store {
  // 当前关卡
  nowLevel = 1
  // 当前关卡
  maxLevel = 1
  // 音效相关
  effectMode = {
    bgm: false,
    click: true,
    vibrate: true,
  }

  // 数据
  diffsData = [
    {
      id: 1,
      name: '饼干和信盒',
      type: 1,
      url:
        'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673417316598-ad721c80-9aa2-4d2e-bbd2-208f0c8a0bf9.jpeg',
      url_:
        'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673417325197-20a2c3c7-1f7f-4a75-ad8f-c8bf299035a2.jpeg?x-oss-process=image%2Fresize%2Cw_674%2Climit_0%2Finterlace%2C1',
      diffs: [
        {
          id: 1,
          find: false,
          left: fomatOffset(17.56),
          top: fomatOffset(37.79),
        },
        {
          id: 2,
          find: false,
          left: fomatOffset(52.77),
          top: fomatOffset(33.48),
        },
        {
          id: 3,
          find: false,
          left: fomatOffset(49.71),
          top: fomatOffset(64.37),
        },
        {
          id: 4,
          find: false,
          left: fomatOffset(74.57),
          top: fomatOffset(37.97),
        },
        {
          id: 5,
          find: false,
          left: fomatOffset(68.42),
          top: fomatOffset(84.48),
        },
        {
          id: 6,
          find: false,
          left: fomatOffset(22.07),
          top: fomatOffset(64.78),
        },
        {
          id: 7,
          find: false,
          left: fomatOffset(71.34),
          top: fomatOffset(8.35),
        },
      ],
    },
    {
      id: 2,
      name: '向日葵',
      type: 1,
      url:
        'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673416833237-93d09b57-d26e-4732-8ee6-540b438550a9.jpeg',
      url_:
        'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673418238548-f13f44f9-6f6a-4ee2-9a31-056696b0ad90.jpeg',
      diffs: [
        {
          id: 1,
          find: false,
          left: '6.5%',
          top: '5.8%',
        },
        {
          id: 2,
          find: false,
          left: '24.9%',
          top: '81%',
        },
        {
          id: 3,
          find: false,
          left: '55.7%',
          top: '32%',
        },
        {
          id: 4,
          find: false,
          left: '29.3%',
          top: '7.7%',
        },
        {
          id: 5,
          find: false,
          left: '41.5%',
          top: '67.6%',
        },
        {
          id: 6,
          find: false,
          left: '90.3%',
          top: '6%',
        },
      ],
    },
    {
      id: 3,
      name: '新年快乐',
      type: 3,
      url:
        'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673505835266-d5a61156-b261-4e87-a05b-d0d8668c6b3b.jpeg',
      url_:
        'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673505846365-3f213c47-d2c2-4118-9a59-472f04d1d1b0.jpeg',
      diffs: [
        {
          id: 1,
          find: false,
          left: '8.8%',
          top: '8.7%',
        },
        {
          id: 2,
          find: false,
          left: '85%',
          top: '8.2%',
        },
        {
          id: 3,
          find: false,
          left: '47.6%',
          top: '10%',
        },
        {
          id: 4,
          find: false,
          left: '22.7%',
          top: '87%',
        },
        {
          id: 5,
          find: false,
          left: '41.7%',
          top: '56.2%',
        },
        {
          id: 6,
          find: false,
          left: '42.3%',
          top: '72.2%',
        },
      ],
    },
  ]

  setNowLevel(num: number) {
    this.nowLevel = num
    if (num > this.maxLevel) {
      this.maxLevel = num
    }
  }

  setEffectMode(val: boolean, field: string) {
    this.effectMode = {
      ...this.effectMode,
      [field]: val,
    }
  }
}

decorate(Store, {
  nowLevel: observable,
  maxLevel: observable,
  effectMode: observable,
  diffsData: observable,
  setEffectMode: action.bound,
  setNowLevel: action.bound,
})
export default createContext(new Store())
