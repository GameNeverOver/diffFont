// 时间到弹窗
import { View, Text, Image } from '@tarojs/components'
import Taro, { FC } from '@tarojs/taro'
import { toast } from '~/common/func'
import * as styles from '../index.module.less'

const PassPrompt: FC = () => {
  const chooseLevel = () => {
    Taro.navigateTo({ url: '/pages/chooseLevel/index' })
  }
  const goHome = () => {
    Taro.switchTab({ url: '/pages/home/index' })
  }

  return (
    <View className={styles.setting}>
      <View className={`${styles.passPopover} ${styles.basePopover} `} style={{ height: '220px' }}>
        <Image src='https://gd-hbimg.huaban.com/4d791ca759ba9330f312bffdccae4eb4a4552a3822bad-VOFToS_fw480g' />
        <View style={{ padding: '0 10px' }}>
          您可太厉害了，后面没有关卡啦！点击右上角 ... 分享给其他好友吧~
        </View>
        <View style={{ padding: '0 10px' }}>
          您也可以联系创作者，VX：
          <Text
            onClick={() =>
              Taro.setClipboardData({
                data: `liu_iscool`,
                success: res => {
                  Taro.getClipboardData({
                    success: res => toast.none('复制成功'),
                  })
                },
              })
            }
          >
            liu_iscool
          </Text>
          进行催更哦~
        </View>
        <View>
          <Text onClick={chooseLevel}>选择关卡</Text>
          <Text onClick={goHome}>返回首页</Text>
        </View>
      </View>
    </View>
  )
}

export default PassPrompt
