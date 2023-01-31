import { View, Image } from '@tarojs/components';
import Taro from '@tarojs/taro';
import * as styles from './index.module.less';
import empty from './empty.png';

interface IProps {
  text?: any;
}

export default (props: IProps) => {
  return <View className={styles.emptyPage}>
    <Image src={empty}/>
    <View>{props.text || '暂无数据'}</View>
  </View>
}
