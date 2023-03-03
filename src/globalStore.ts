/**
 * @description hooks组件对应的mobx
 */
import { decorate, observable, action } from 'mobx'
import Taro, { createContext } from '@tarojs/taro'


const diffList = [
  {
    id: 1,
    font: '士',
    _font: '土',
    pinyin: '（shì）',
    _pinyin: '（tǔ）',
  }, {
    id: 2,
    font: '干',
    _font: '千',
    pinyin: '（gàn）',
    _pinyin: '（qiān）',
  }, {
    id: 3,
    font: '曰',
    _font: '日',
    pinyin: '（yuē）',
    _pinyin: '（rì）',
  }, {
    id: 4,
    font: '博',
    _font: '傅',
    pinyin: '（bó）',
    _pinyin: '（fù）',
  }, {
    id: 5,
    font: '休',
    _font: '体',
    pinyin: '（xiū）',
    _pinyin: '（tǐ）',
  }, {
    id: 6,
    font: '耍',
    _font: '䎡',
    pinyin: '（shuǎ）',
    _pinyin: '（nuǎn）',
  }, {
    id: 7,
    font: '牡',
    _font: '牲',
    pinyin: '（mǔ）',
    _pinyin: '（shēng）',
  }, {
    id: 8,
    font: '苗',
    _font: '苖',
    pinyin: '（miáo）',
    _pinyin: '（dí）',
  }, {
    id: 9,
    font: '兇',
    _font: '兕',
    pinyin: '（xiōng）',
    _pinyin: '（sì）',
  }, {
    id: 10,
    font: '罯',
    _font: '詈',
    pinyin: '（ǎn）',
    _pinyin: '（lì）',
  },

  {
    id: 11,
    font: '戒',
    _font: '戎',
    pinyin: '（jiè）',
    _pinyin: '（róng）',
  }, {
    id: 12,
    font: '崇',
    _font: '祟',
    pinyin: '（chóng）',
    _pinyin: '（suì）',
  },
  {
    id: 13,
    font: '历',
    _font: '厉',
    pinyin: '（lì）',
    _pinyin: '（lì）',
  },
  {
    id: 14,
    font: '畔',
    _font: '衅',
    pinyin: '（pàn）',
    _pinyin: '（xìn）',
  },
  {
    id: 15,
    font: '治',
    _font: '冶',
    pinyin: '（zhì）',
    _pinyin: '（yě）',
  },
  {
    id: 16,
    font: '誉',
    _font: '誊',
    pinyin: '（yù）',
    _pinyin: '（téng）',
  },
  {
    id: 17,
    font: '秦',
    _font: '奏',
    pinyin: '（qín）',
    _pinyin: '（zòu）',
  }, {
    id: 18,
    font: '外',
    _font: '处',
    pinyin: '（wài）',
    _pinyin: '（chù）',
  },
  {
    id: 19,
    font: '奖',
    _font: '桨',
    pinyin: '（jiǎng）',
    _pinyin: '（jiǎng）',
  },
  {
    id: 20,
    font: '沈',
    _font: '忱',
    pinyin: '（shěn）',
    _pinyin: '（chén）',
  },
  {
    id: 21,
    font: '肬',
    _font: '胧',
    pinyin: '（yóu）',
    _pinyin: '（lóng）',
  }, {
    id: 22,
    font: '妹',
    _font: '妺',
    pinyin: '（mèi）',
    _pinyin: '（mò）',
  }, {
    id: 23,
    font: '畲',
    _font: '畬',
    pinyin: '（shē）',
    _pinyin: '（shē）',
  }, {
    id: 24,
    font: '胄',
    _font: '冑',
    pinyin: '（zhòu）',
    _pinyin: '（zhòu）',
  }, {
    id: 25,
    font: '塵',
    _font: '麈',
    pinyin: '（chén）',
    _pinyin: '（zhǔ）',
  }, {
    id: 26,
    font: '袄',
    _font: '祆',
    pinyin: '（ǎo）',
    _pinyin: '（xiān）',
  }, {
    id: 27,
    font: '淰',
    _font: '谂',
    pinyin: '（niǎn）',
    _pinyin: '（shěn）',
  }, {
    id: 28,
    font: '喏',
    _font: '啱',
    pinyin: '（nuò）',
    _pinyin: '（yán）',
  }, {
    id: 29,
    font: '薄',
    _font: '簿',
    pinyin: '（báo）',
    _pinyin: '（bó）',
  }, {
    id: 30,
    font: '描',
    _font: '猫',
    pinyin: '（miáo）',
    _pinyin: '（māo）',
  }
]

console.log(diffList.length, 'length')
class Store {
  // 难度  max7
  difficulty = 1
  // 当前关卡
  nowLevel = 1
  // 当前关卡
  maxLevel = 210
  // 音效相关
  effectMode = {
    bgm: false,
    click: true,
    vibrate: true,
  }

  // 数据
  diffsData = [
    ...diffList,
    ...diffList,
    ...diffList,
    ...diffList,
    ...diffList,
    ...diffList,
    ...diffList,
  ]

  setNowLevel(num: number) {
    if (this.maxLevel >= num) {
      this.nowLevel = num
      this.difficulty = Math.ceil(num / 30)
      Taro.setStorageSync(
        '__level',
        num
      )
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
  difficulty: observable,
  nowLevel: observable,
  maxLevel: observable,
  effectMode: observable,
  diffsData: observable,
  setEffectMode: action.bound,
  setNowLevel: action.bound,
})
export default createContext(new Store())
