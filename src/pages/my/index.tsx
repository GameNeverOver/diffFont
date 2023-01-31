/**
 * @description 我的
 * @date 2002/10/13
 */
import { View, Image, Text } from '@tarojs/components'
import Taro, { FC, useContext, useDidShow, useEffect } from '@tarojs/taro'
import * as styles from './index.module.less'
import { observer } from '@tarojs/mobx'
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation'
import { MMNavigationType } from '~/modules/@wmeimob/taro-design/src/components/navigation/const'
import $Store from '~/globalStore'
import { toast } from '~/components/utils'

const Index: FC = () => {
  const { setUserInfo, userInfo } = useContext($Store)

  const buyOrder = () => {
    if (userInfo && userInfo.name) {
      Taro.navigateTo({ url: '/pages/buyOrder/index' })
    } else {
      toast.info('请先完善个人信息~')
    }
  }

  useDidShow(() => {
    const info = Taro.getStorageSync('myInfo')
    if (info) {
      setUserInfo({
        ...JSON.parse(info),
      })
    }
  })

  return (
    <View className={styles.my_page}>
      <MMNavigation type={MMNavigationType.Transparent} title="" />
    </View>
  )
}

Index.config = {
  navigationBarTitleText: '',
  navigationStyle: 'custom',
}

export default observer(Index)
