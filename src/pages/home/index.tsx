/**
 * @description 首页
 */
import { View, Image, Text } from '@tarojs/components'
import Taro, { FC, useState, useContext, useEffect, useDidShow } from '@tarojs/taro'
import * as styles from './index.module.less'
import Setting from './component/Setting'
import { observer } from '@tarojs/mobx'
import $Store from '~/globalStore'
import { gameName } from '~/consts'
import imgSetting from './imgs/shezhi.png'
import imgGlasses from './imgs/yanjing.png'
import imgChoose from './imgs/xuanze.png'
import imgRank from './imgs/rank.png'
import imgClick from './imgs/dianji.png'

const Index: FC = () => {
  const { nowLevel, effectMode, setEffectMode, setNowLevel } = useContext($Store)

  // 设置的显示
  const [modeVisible, setModeVisible] = useState(false)
  const showSetting = () => setModeVisible(true)

  useDidShow(() => {
    let __level = Taro.getStorageSync('__level')
    if (__level) {
      setNowLevel(__level)
    }
  })

  return (
    <View className={styles.indexPage}>
      <View className={styles.title}>
        {gameName.map(v => (
          <View key={v}>
            {v}
            {v === '眼' ? <Image src={imgGlasses} /> : null}
          </View>
        ))}
      </View>
      <View className={styles.options}>
        <View onClick={showSetting}>
          <Image src={imgSetting} />
          设置
        </View>

        <View onClick={() => Taro.navigateTo({ url: '/pages/chooseLevel/index' })}>
          <Image src={imgChoose} />
          选关
        </View>

        {/* <View>
          <Image src={imgRank} />
          排名
        </View> */}
      </View>

      <View className={styles.start}>
        <View onClick={() => Taro.reLaunch({ url: `/pages/play/index` })}>
          开始游戏 <Image src={imgClick} />
        </View>
        <Text>当前关卡：第{nowLevel}关</Text>
      </View>

      {modeVisible ? (
        <Setting
          effectMode={effectMode}
          setEffectMode={setEffectMode}
          setModeVisible={setModeVisible}
        />
      ) : null}
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default observer(Index)
