// 时间到弹窗
import { View, Text, Image } from '@tarojs/components'
import Taro, { FC } from '@tarojs/taro'
import * as styles from '../index.module.less'

const PassPrompt: FC<any> = ({ fail, tryAgain }) => {
  const chooseLevel = () => {
    Taro.navigateTo({ url: '/pages/chooseLevel/index' })
  }

  return (
    <View className={styles.setting}>
      <View className={`${styles.passPopover} ${styles.basePopover} `}>
        {fail ? null : (
          <Image src='https://gd-hbimg.huaban.com/4d791ca759ba9330f312bffdccae4eb4a4552a3822bad-VOFToS_fw480g' />
        )}
        <View>{fail ? `好遗憾，您没有找到` : '太棒了，恭喜通关~'}</View>
        <View>
          <Text onClick={chooseLevel}>选择关卡</Text>
          <Text onClick={() => tryAgain(fail)}>{fail ? '再试一次' : '下一关'}</Text>
        </View>
      </View>
    </View>
  )
}

export default PassPrompt
