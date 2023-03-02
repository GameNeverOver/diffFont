import Taro from '@tarojs/taro'

const gameSeconds = 60

const gameName = ['我', '不', '是', '近', '视', '眼']

const errCallback = res => {
  console.log(res.errMsg, res.errCode)
}

// bgm实例
const myBgm = Taro.createInnerAudioContext()
// myBgm.autoplay = true
myBgm.src =
  'https://ls-sycdn.kuwo.cn/1e6421ea1b281d00df7a14d782f92b63/63bfc005/resource/n3/84/98/686711588.mp3'
myBgm.onError(errCallback)

// 正确点击音效的实例
const successAudio = Taro.createInnerAudioContext()
successAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/70/5c89440055a9b76614.mp3'
successAudio.onError(errCallback)

// 错误点击音效的实例
const errorAudio = Taro.createInnerAudioContext()
errorAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/74/5c8949d63547e84016.mp3'
errorAudio.onError(errCallback)

// 通关音效的实例
const passAudio = Taro.createInnerAudioContext()
passAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/55/5c893391ee55466803.mp3'
passAudio.onError(errCallback)

export { gameName, myBgm, successAudio, errorAudio, passAudio, gameSeconds }
