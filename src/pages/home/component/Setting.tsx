// 设置音效的弹框
import { View, Text, Switch } from '@tarojs/components'
import Taro, { FC } from '@tarojs/taro'
import * as styles from '../index.module.less'

const list = [
  {
    text: '背景音乐',
    id: 'bgm',
  },
  {
    text: '点击音效',
    id: 'click',
  },
  {
    text: '震动模式',
    id: 'vibrate',
  },
]

const Setting: FC<any> = ({ effectMode, setEffectMode, setModeVisible }) => {
  const changeMode = ({ currentTarget, detail }) => {
    if (currentTarget.id === 'vibrate' && detail.value) {
      Taro.vibrateLong()
    }
    setEffectMode(detail.value, currentTarget.id)
  }
  const isVisible = () => setModeVisible(false)

  return (
    <View className={styles.setting} onClick={isVisible}>
      <View
        className={`${styles.setPopover} ${styles.basePopover} `}
        onClick={(e) => e.stopPropagation()}
      >
        {list.map((item) => (
          <View key={item.id}>
            <Text>{item.text}</Text>
            <Switch
              id={item.id}
              color="rgb(237, 132, 62)"
              checked={effectMode[item.id]}
              onChange={changeMode}
            />
          </View>
        ))}
      </View>
    </View>
  )
}

export default Setting
