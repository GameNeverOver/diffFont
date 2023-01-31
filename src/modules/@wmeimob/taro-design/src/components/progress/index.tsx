import { PureComponent } from "@tarojs/taro";
import { View } from "@tarojs/components";
import styles from './index.modules.less';
import { TProgressStatus, MMProgressInfoPosition } from "./const";
import MMIconFont from "../icon-font";
import MMIconFontName from "../icon-font/const";
import classNames from "classnames";

interface IMMProgressProps {
  /**
   * 百分比
   */
  percent?: number;
  /**
   * 当前数量.需要与total配合动态计算percent
   */
  count?: number;
  /**
   * 总量
   */
  total?: number;
  /**
   * 进度条状态
   */
  status?: TProgressStatus;
  /**
   * 进度条高度
   */
  height?: number;
  /**
   * 是否有圆角。也可设置具体数字
   */
  radius?: boolean | number;
  /**
   * 是否显示未填充轨道
   */
  trail?: boolean;
  /**
   * 未填充轨道颜色
   */
  trailColor?: string;
  /**
   * 是否显示进度数值或状态图标
   */
  showInfo?: boolean;
  /**
   * 信息显示位置
   */
  infoPosition?: MMProgressInfoPosition;
  /**
   * 进度条颜色,也可是是传递一个包含位置和颜色信息的二维数组来生成渐变色
   */
  strokeColor?: string | string[][];
  /**
   * 在进度条顶部渲染一个指示器
   */
  renderIndicator?: JSX.Element | null;
  /**
   * 格式化显示信息
   * 当props传递percent时。函数只有一个参数percent
   * 当使用count和total时。函数会提供三个参数。分别为计算好的percent、count、total
   */
  formatInfo?: (percent: number, count?: number, total?: number) => (JSX.Element | string);
}

/**
 * @name 进度条
 * @addversion 1.3.0
 */
export default class MMProgress extends PureComponent<IMMProgressProps> {
  static defaultProps: IMMProgressProps = {
    percent: 100,
    count: 0,
    total: 0,
    status: 'normal',
    height: 8,
    radius: false,
    trail: true,
    trailColor: '#f5f5f5',
    showInfo: false,
    infoPosition: MMProgressInfoPosition.Right,
    strokeColor: '',
    renderIndicator: null,
    formatInfo: percent => `${percent}%`
  }

  get percent() {
    const { percent, count, total } = this.props;
    return total ? Number((count! / total).toFixed(4).slice(2).replace(/^([0-9]{2})/, '$1.')) : percent!;
  }

  get borderRadius() {
    const { radius } = this.props;
    let borderRadius = '';
    if (typeof radius === 'boolean') {
      borderRadius = radius ? '8px' : '';
    } else if (typeof radius === 'number') {
      borderRadius = radius + 'px';
    }
    return borderRadius;
  }

  get progressStyle() {
    const { height, trail, trailColor } = this.props;
    return {
      height: `${height}px`,
      borderRadius: this.borderRadius,
      backgroundColor: trail ? trailColor : ''
    }
  }

  get strokeColorClass() {
    const { strokeColor, status } = this.props;
    return strokeColor ? classNames(styles.progress_bg) : classNames(styles.progress_bg, styles[`progress_${status}`])
  }

  get strokeColorStyle() {
    const { strokeColor } = this.props;
    if (typeof strokeColor === 'string') {
      return {
        width: `${this.percent}%`,
        borderRadius: this.borderRadius,
        backgroundColor: strokeColor
      }
    }

    const gradientColor = strokeColor!.map(([position, color]) => `${color} ${position}`).join(',');
    return {
      width: `${this.percent}%`,
      borderRadius: this.borderRadius,
      backgroundImage: `linear-gradient(to right, ${gradientColor})`
    }
  }

  get showInnerCenterInfo() {
    return this.props.showInfo && this.props.infoPosition === MMProgressInfoPosition.InnerCenter;
  }

  get showFollowInfo() {
    return this.props.showInfo && this.props.infoPosition === MMProgressInfoPosition.Follow;
  }

  // 显示右侧信息
  get showRightInfo() {
    return this.props.showInfo && this.props.infoPosition === MMProgressInfoPosition.Right;
  }

  render() {
    return (
      <View className={styles.progress}>
        <View className={styles.progress_outer} >
          <View className={styles.progress_inner}>
            {/* 指示器 */}
            <View className={styles.progress_indicator} style={{ transform: `translate(${this.percent}%, -50%)` }}>
              <View className={styles.progress_indicator_inner}>
                {this.props.renderIndicator}
              </View>
            </View>
            {/* 进度条 */}
            <View className={styles.progress_bar} style={this.progressStyle}>
              <View style={this.strokeColorStyle} className={this.strokeColorClass} />
            </View>
            {/* follow info */}
            {(this.showFollowInfo || this.showInnerCenterInfo) && (
              <View className={styles.progress_info_position_follow} style={{ transform: `translate(${this.percent / (this.showInnerCenterInfo ? 2 : 1)}%, -50%)` }}>
                <View className={this.showInnerCenterInfo && styles.progress_info_position_innerCenter}>
                  {this.renderInfo()}
                </View>
              </View>
            )}
          </View>
          {/* 文本信息 */}
          {this.showRightInfo && this.renderInfo()}
        </View>
      </View>
    )
  }

  renderInfo = () => {
    const { status, formatInfo, count, total } = this.props;

    const percent = total ? formatInfo!(this.percent, count, total) : formatInfo!(this.percent);

    let info: JSX.Element;
    switch (status) {
      case 'error': {
        info = (<View className={classNames(styles.progress_info_icon, styles.progress_error)}><MMIconFont value={MMIconFontName.Close} size={6} /></View>);
        break;
      }
      case 'success': {
        info = (<View className={classNames(styles.progress_info_icon, styles.progress_success)}><MMIconFont value={MMIconFontName.Check} size={6} /></View>);
        break;
      }
      case 'warn': {
        info = (<View className={classNames(styles.progress_info_icon, styles.progress_warn)}><MMIconFont value={MMIconFontName.Warning} size={6} /></View>);
        break;
      }
      case 'normal': {
        info = <View>{percent}</View>;
        break;
      }
    }
    return (<View className={styles.progress_info}>{info!}</View>);
  }
};
