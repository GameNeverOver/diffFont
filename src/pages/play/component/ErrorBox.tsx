import { View, Image } from '@tarojs/components'
import Taro, { FC, useEffect } from '@tarojs/taro'
import * as styles from '../index.module.less'
import ImgError from '../img/daocha.png'

const FiveBox: FC<any> = ({ list = [] }) => {
  return (
    <View className={styles.errorBox}>
      {list.map((v, idx) =>
        v ? (
          <Image
            key={idx}
            src={ImgError}
            style={{
              top: v.y + 'px',
              left: v.x + 'px',
            }}
          />
        ) : null
      )}
    </View>
  )
}

export default FiveBox
