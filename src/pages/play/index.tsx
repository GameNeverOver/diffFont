/**
 * @description 游戏页面
 */
import { View, Image, Text } from '@tarojs/components'
import Taro, { useEffect, FC, useState, useMemo, useContext } from '@tarojs/taro'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import FiveBox from './component/FiveBox'
import ErrorBox from './component/ErrorBox'
import PassPrompt from './component/PassPrompt'
import SuccessBox from './component/Success'
import * as styles from './index.module.less'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import $Store from '~/globalStore'
import { observer } from '@tarojs/mobx'
import { myBgm, successAudio, errorAudio, passAudio, gameSeconds } from '~/consts'
import imgShouye from './img/home.png'
import imgStart from './img/bofang.png'
import imgEnd from './img/zanting.png'
import imgStar from './img/start.png'

let timer = null as any
let duration = gameSeconds

const Index: FC = () => {
  const { maxLevel, difficulty, nowLevel, effectMode, diffsData, setNowLevel } = useContext(
    $Store
  ) as any
  // 倒计时
  const [countdown, setCountdown] = useState(gameSeconds)
  // 暂停/继续
  const [ing, setIng] = useState(true)
  // 是否过关
  const [pass, setPass] = useState(false)
  // 点击错误的次数
  const [fiveList, setFiveList] = useState<any[]>([])
  // 通关的显示
  const [passVisible, setPassVisible] = useState(false)
  // 暂停的显示
  const [pause, setPause] = useState(false)
  // 错误的次数
  const [errorList, setErrorList] = useState<any[]>([])
  // 字体
  const [fontInfo, setFontInfo] = useState<any[]>([])
  // success
  const [isSuccess, setIsSuccess] = useState(false)

  const fomatTime = useMemo(() => {
    const minutes = Math.floor(countdown / 60)
    const seconds = minutes < 0 ? 0 : countdown - minutes * 60
    return `0${minutes < 0 ? 0 : minutes} : ${seconds > 9 ? '' : 0}${seconds}`
  }, [countdown])

  const queryLevel = (num: number) => {
    let difficultyNum = [81, 100, 121, 144, 169, 196, 225][difficulty - 1]
    console.log(nowLevel, difficulty)
    let random = parseInt(Math.random() * difficultyNum)
    const list = Array.from(Array(difficultyNum), (_, n) => {
      return {
        flag: n === random ? true : false,
        id: n,
        font: n === random ? diffsData[num - 1]._font : diffsData[num - 1].font,
      }
    })
    setFontInfo(list)
    setIng(true)
  }

  // 点击错误的话-5s
  const reduceFive = e => {
    effectMode.click && errorAudio.play()
    effectMode.vibrate && Taro.vibrateLong()

    setErrorList([...errorList, e.detail])
    setFiveList([...fiveList, true])
    if (countdown > 5) {
      duration -= 4
    } else {
      duration = 0
    }
  }

  // 继续游戏
  const startGame = () => {
    timer = setInterval(() => {
      duration--
      if (duration <= 1) {
        setCountdown(0)
        setIng(false)
        setPassVisible(true)
        clearInterval(timer)
      } else {
        setCountdown(duration)
      }
    }, 1000)
  }

  useEffect(() => {
    if (timer) clearInterval(timer)
    if (ing) {
      startGame()
    }
  }, [ing])

  useEffect(() => {
    duration = gameSeconds
    queryLevel(nowLevel)
    // effectMode.bgm && myBgm.play()
  }, [])

  // 再来一次 / 下一关
  const tryAgain = () => {
    duration = gameSeconds
    setPass(false)
    setCountdown(gameSeconds)
    setPassVisible(false)
    setFiveList([])
    setErrorList([])
    queryLevel(nowLevel)
  }

  const passFunc = () => {
    setPass(true)
    passAudio.play()
    setPassVisible(true)
    setIng(false)
    clearInterval(timer)
    if (nowLevel === maxLevel) {
      setIsSuccess(true)
    } else {
      setNowLevel(nowLevel + 1)
    }
  }

  const backHome = () => {
    Taro.switchTab({ url: '/pages/home/index' })
  }

  return (
    <View className={styles.homePage}>
      <MMNavigation type={MMNavigationType.Transparent} title='' />
      {/* 头部信息部分 */}
      <View className={styles.topBar}>
        <View className={styles.barItem}>
          <Image onClick={backHome} src={imgShouye} />
        </View>
        <View className={`${styles.progressInfo} ${styles.barItem}`}>
          <View>第 {nowLevel} 关</View>
          <View>
            <Text>{fomatTime}</Text>
          </View>
          <FiveBox list={fiveList} />
        </View>

        <View className={styles.barItem} style={{ textAlign: 'right' }}>
          <Image
            style={{
              marginTop: '5px',
            }}
            onClick={() => {
              setIng(false)
              setPause(true)
            }}
            src={ing ? imgEnd : imgStart}
          />
        </View>
      </View>
      <View className={styles.diffImage}>
        <View className={`${styles.fontBox}`}>
          {fontInfo.map(item => (
            <View
              key={item.id}
              className={styles['font' + difficulty]}
              onClick={e => {
                if (item.flag) {
                  passFunc()
                } else {
                  reduceFive(e)
                }
              }}
            >
              {pass && item.flag ? <Text></Text> : null}
              {item.font}
            </View>
          ))}

          {ing || !pass ? (
            <View className={`${styles.door} ${ing ? styles.open : styles.close}`}>
              <View className={styles.doorBar}>
                <View />
              </View>
            </View>
          ) : null}
        </View>
      </View>
      <View className={styles.description} style={{ opacity: pass ? 0 : 1 }}>
        {`请从 ${diffsData[nowLevel - 1].font}${diffsData[nowLevel - 1].pinyin} 中找到 ${
          diffsData[nowLevel - 1]._font
        }${diffsData[nowLevel - 1]._pinyin} `}
      </View>
      <View className={styles.tipContainer}>
        <View className={styles.title}>
          <Text>当前难度：</Text>
          <View>
            {Array(difficulty)
              .fill(100)
              .map((item, idx) => (
                <Image key={item + idx} src={imgStar} />
              ))}
          </View>
        </View>
      </View>
      {passVisible ? <PassPrompt fail={!pass} tryAgain={tryAgain} /> : null}
      {isSuccess ? <SuccessBox /> : null}
      {!ing && pause ? (
        <View
          className={styles.setting}
          onClick={() => {
            setIng(true)
            setPause(false)
          }}
        >
          <View className={styles.pausePopover}>
            <View>已暂停</View>
            <View>点击继续</View>
          </View>
        </View>
      ) : null}
      <ErrorBox list={errorList} />
      {isNewIphone && <View className='spacingIphone' />}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '火眼精金',
  navigationStyle: 'custom',
}

export default observer(Index)
