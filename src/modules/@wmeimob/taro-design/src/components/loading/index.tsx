import { View } from '@tarojs/components';
import Taro, { PureComponent } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import styles from './index.modules.less';
import { MMLoadingType } from './types';
import classNames from 'classnames';

interface MMLoadingProps {
  /**
   * 宽度
   */
  width?: number

  /**
   * 高度
   */
  height?: number

  /**
   * 类型
   */
  type?: MMLoadingType
}

/**
 * @name 加载中
 */
@autobind
export default class MMLoading extends PureComponent<MMLoadingProps> {
  static defaultProps = {
    width: 25,
    height: 25,
    type: MMLoadingType.Default
  }

  render() {
    const loadingClassName = classNames(styles.loading, this.props.type === MMLoadingType.White ? styles.loading_white : '')
    const { width, height } = this.props;
    return <View className={loadingClassName} style={{
      width: width + 'px', height: height + 'px'
    }}>
      <View className={styles.content} />
      <View className={styles.shadow} />
    </View >;
  }
}
