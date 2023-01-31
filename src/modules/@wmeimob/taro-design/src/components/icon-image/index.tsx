import IconFontName from './const';
import classNames from 'classnames';
import * as styles from "./index.modules.less";
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import Taro, { PureComponent } from '@tarojs/taro';
import { View } from '@tarojs/components';

interface IIconfontProps {
  /**
   * 图标值
   *
   * @type {string}
   * @memberof IIconfontProps
   */
  value: IconFontName;

  /**
   * 图标大小
   *
   * @type {number}
   * @memberof IIconfontProps
   */
  width?: number;

  /**
   * 高度
   */
  height?: number;
}

/**
 * @name 图片图标
 */
@autobind
export default class MMIconImage extends PureComponent<IIconfontProps> {
  static defaultProps = {
    size: 20
  };

  static options = {
    addGlobalClass: true
  };

  render() {
    const { width, height, value } = this.props;
    const style: any = {};
    if (width) {
      style.width = width + "px";
    }
    if (height) {
      style.height = height + "px";
    }

    return <View className={classNames(styles.iconfont, styles[value])} style={style} />;
  }
}

