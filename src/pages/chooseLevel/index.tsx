/**
 * @description 选择关卡
 */
import { View, Image, Text } from '@tarojs/components'
import Taro, { useContext, FC } from '@tarojs/taro'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import $Store from '~/globalStore'
import imgLock from './imgs/suo.png'

const Index: FC = () => {
  const { diffsData, setNowLevel, nowLevel } = useContext($Store)

  return (
    <View className={styles.choosePage}>
      <View className={styles.levelContainer}>
        <MMNavigation type={MMNavigationType.Transparent} title={`共计${diffsData.length}关`} />

        <View className={styles.levelList}>
          {diffsData.map((item, idx) => (
            <View
              key={item.id + idx}
              onClick={() => {
                setNowLevel(idx + 1)
                Taro.reLaunch({ url: `/pages/play/index` })
              }}
            >
              {nowLevel >= idx + 1 ? (
                <Text className={styles.findFont}>{item.font}</Text>
              ) : (
                <Image src={imgLock} />
              )}
              <Text>第{idx + 1}关</Text>
            </View>
          ))}

          <View />
          <View />
          <View />
          <View />
        </View>
        {isNewIphone && <View className='spacingIphone' />}
      </View>
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default observer(Index)
