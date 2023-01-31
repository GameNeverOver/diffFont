/**
 * @description 游戏页面
 */
import { View, Image, Text } from '@tarojs/components'
import Taro, {
  useEffect,
  FC,
  useState,
  useMemo,
  useContext,
} from '@tarojs/taro'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import FiveBox from './component/FiveBox'
import ErrorBox from './component/ErrorBox'
import PassPrompt from './component/PassPrompt'
import * as styles from './index.module.less'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import $Store from '~/globalStore'
import { observer } from '@tarojs/mobx'
import {
  myBgm,
  successAudio,
  errorAudio,
  passAudio,
  gameSeconds,
} from '~/consts'
import imgShouye from './img/home.png'
import imgStart from './img/bofang.png'
import imgEnd from './img/zanting.png'

let timer = null as any
let duration = gameSeconds

const Index: FC = () => {
  const { nowLevel, effectMode, diffsData, setNowLevel } = useContext(
    $Store
  ) as any
  // 倒计时
  const [countdown, setCountdown] = useState(gameSeconds)
  // 暂停/继续
  const [ing, setIng] = useState(true)
  // 点击错误的次数
  const [fiveList, setFiveList] = useState<any[]>([])
  // 通关的显示
  const [passVisible, setPassVisible] = useState(false)
  // 暂停的显示
  const [pause, setPause] = useState(false)
  // 图片信息
  const [imgInfo, setImgInfo] = useState<Record<string, any>>({
    url:
      'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673417316598-ad721c80-9aa2-4d2e-bbd2-208f0c8a0bf9.jpeg',
    url_:
      'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673417325197-20a2c3c7-1f7f-4a75-ad8f-c8bf299035a2.jpeg?x-oss-process=image%2Fresize%2Cw_674%2Climit_0%2Finterlace%2C1',
  })
  // 图片不同处的位置
  const [diffs, setDiffs] = useState<Record<string, any>[]>([])
  // 是否显示提示
  const [starVisible, setStarVisible] = useState<boolean | Record<string, any>>(
    false
  )
  // 错误的次数
  const [errorList, setErrorList] = useState<any[]>([])

  const fomatTime = useMemo(() => {
    const minutes = Math.floor(countdown / 60)
    const seconds = minutes < 0 ? 0 : countdown - minutes * 60
    return `0${minutes < 0 ? 0 : minutes} : ${seconds > 9 ? '' : 0}${seconds}`
  }, [countdown])

  const findLength = useMemo(() => {
    let length = 0
    diffs.forEach((v) => {
      if (v.find) {
        length++
      }
    })
    return length
  }, [diffs])

  const queryLevel = (num: number) => {
    setImgInfo({
      url: diffsData[num - 1].url,
      url_: diffsData[num - 1].url_,
    })
    setDiffs(JSON.parse(JSON.stringify(diffsData[num - 1].diffs)))
    setIng(true)
  }

  // 点击错误的话-5s
  const reduceFive = (e) => {
    // 屏幕的横纵坐标要减去的  苹果666
    // 27,  135
    // 宽    高
    // 337, 225   --
    // return console.log(
    //   (((e.detail.x - 20) / 337) * 100).toFixed(2),
    //   (((e.detail.y - 128) / 225) * 100).toFixed(2),
    //   'x...'
    // )
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
    effectMode.bgm && myBgm.play()
  }, [])

  useEffect(() => {
    if (diffs.length && diffs.every((v) => v.find)) {
      passAudio.play()
      setPassVisible(true)
      setIng(false)
      clearInterval(timer)
      setNowLevel(nowLevel + 1)
    }
  }, [diffs])

  // 获取提示
  const openTip = () => {
    const temp = diffs.find((v) => v.find === false)
    if (temp) {
      setStarVisible(temp)
    }
  }

  // 再来一次 / 下一关
  const tryAgain = () => {
    duration = gameSeconds
    setCountdown(gameSeconds)
    setPassVisible(false)
    setFiveList([])
    setErrorList([])
    queryLevel(nowLevel)
  }

  const backHome = () => {
    Taro.switchTab({ url: '/pages/home/index' })
  }

  return (
    <View className={styles.homePage}>
      <MMNavigation type={MMNavigationType.Transparent} title="" />
      {/* 头部信息部分 */}
      <View className={styles.topBar}>
        <View className={styles.barItem}>
          <Image onClick={backHome} src={imgShouye} />
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
        <View className={`${styles.progressInfo} ${styles.barItem}`}>
          <View>第 {nowLevel} 关</View>
          <View>
            <Text>{fomatTime}</Text>
          </View>
          <FiveBox list={fiveList} />
        </View>

        <View className={`${styles.level} ${styles.barItem}`}>
          {diffs.map((item, idx) => {
            return (
              <Text
                key={item.id}
                className={findLength > idx ? styles.act : ''}
              ></Text>
            )
          })}
        </View>
      </View>
      {/* 两张图片 */}
      <View className={styles.diffImage}>
        <View onClick={reduceFive} className={`${styles.imgBox}`}>
          {(diffs.length > 0 && diffs.length) === findLength ? null : (
            <View
              className={`${styles.door} ${ing ? styles.open : styles.close}`}
            >
              <View className={styles.doorBar}>
                <View />
              </View>
            </View>
          )}
          <Image src={imgInfo.url} mode="widthFix" />
          {diffs.map((item) => (
            <Text
              key={item.id}
              style={{
                top: item.top,
                left: item.left,
                opacity: item.find ? 0.9 : 0,
              }}
              onClick={(e) => {
                e.stopPropagation()
                effectMode.click && successAudio.play()
                if (starVisible && starVisible.id === item.id) {
                  setStarVisible(false)
                }
                setDiffs(() => {
                  return diffs.map((v) => {
                    if (v.id === item.id) {
                      item.find = true
                    }
                    return v
                  })
                })
              }}
            ></Text>
          ))}
          {starVisible === false ? null : (
            <View
              className={styles.star}
              style={{
                left: starVisible.left,
                top: starVisible.top,
              }}
            >
              <View className={styles.oneTip}>✨</View>
              <View className={styles.twoTip}>✨</View>
              <View className={styles.threeTip}>✨</View>
            </View>
          )}
        </View>
        <View onClick={reduceFive} className={styles.imgBox}>
          {(diffs.length > 0 && diffs.length) === findLength ? null : (
            <View
              className={`${styles.door} ${ing ? styles.open : styles.close}`}
            >
              <View className={styles.doorBar}>
                <View />
              </View>
            </View>
          )}
          <Image src={imgInfo.url_} mode="widthFix" />
          {diffs.map((item) => (
            <Text
              key={item.id}
              style={{
                top: item.top,
                left: item.left,
                opacity: item.find ? 1 : 0,
              }}
              onClick={(e) => {
                e.stopPropagation()
                effectMode.click && successAudio.play()
                if (starVisible && starVisible.id === item.id) {
                  setStarVisible(false)
                }
                setDiffs(() => {
                  return diffs.map((v) => {
                    if (v.id === item.id) {
                      item.find = true
                    }
                    return v
                  })
                })
              }}
            ></Text>
          ))}
        </View>
      </View>

      <View className={styles.tipContainer}>
        <View className={styles.title}>
          <Text>当前视力：</Text>
          <Text>5.2</Text>
        </View>
        <View className={styles.tip} onClick={openTip}>
          <Image src="https://gd-hbimg.huaban.com/e301e7a0a026832c13ba66cabbff902edb21bcb352c6-a4isoE_fw240webp" />
          提示{' '}
        </View>
      </View>
      {passVisible ? (
        <PassPrompt fail={diffs.length - findLength} tryAgain={tryAgain} />
      ) : null}

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
      {isNewIphone && <View className="spacingIphone" />}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '火眼精金',
  navigationStyle: 'custom',
}

export default observer(Index)
