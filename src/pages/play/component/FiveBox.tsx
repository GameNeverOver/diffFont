import { View, Text } from '@tarojs/components'
import Taro, { FC } from '@tarojs/taro'
import * as styles from '../index.module.less'

const FiveBox: FC<any> = ({ list }) => {
  return (
    <View className={styles.fiveBox}>
      {list.map((v, idx) => (
        <Text key={idx}>-5</Text>
      ))}
    </View>
  )
}

export default FiveBox
