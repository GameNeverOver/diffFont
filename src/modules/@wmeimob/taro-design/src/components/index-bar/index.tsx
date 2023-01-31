import { View, ScrollView } from '@tarojs/components';
import Taro, { PureComponent } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import styles from './index.modules.less';

export interface IMMIndexBarData {
  /**
   * 列表标题
  */
  title: string
  /**
   * 右侧导航标题及scroll-view-id
  */
  key: string
  /**
  * 列表项
  */
  items: Item[]
}

export interface Item {
  /**
   * 列表项内容id
   */
  id: string
  /**
   * 列表项内容名称
   */
  name: string
  /**
  * 其它业务字段
  */
  [propName: string]: any
}

interface IMMIndexBarProps {
  /**
   * 滚动列表高度，默认100vh
   *
   * @type {string}
   * @memberof IMMIndexBarProps
  */
  scrollViewHeight?: string,
  /**
   * 索引栏距顶高度，默认75px
   *
   * @type {string}
   * @memberof IMMIndexBarProps
  */
  topHeight?: string
  /**
   * 是否开启动画滚动
   *
   * @type {boolean}
   * @memberof IMMIndexBarProps
  */
  animation?: boolean,
  /**
   * 数据列表
   *
   * @type {IMMIndexBarData[]}
   * @memberof IMMIndexBarProps
   */
  value: IMMIndexBarData[];
  /**
   * 当前选中索引
   *
   * @type {string}
   * @memberof IMMIndexBarProps
   */
  currentKeyId: string,
  /**
   * 点击索引事件
   *
   * @memberof IMMIndexBarProps
   */
  onClick: (value: string[]) => void;
}

/**
 * @name 索引栏
 */
@autobind
export default class MMIndexBar extends PureComponent<IMMIndexBarProps> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps = {
    animation: true,
    value: [],
    currentKeyId: '',
    scrollViewHeight: '',
    topHeight: 0
  };

  state = {
    scrollTop: 0
  }

  render() {
    const { animation, value, currentKeyId, scrollViewHeight, topHeight } = this.props;
    const { scrollTop } = this.state;
    return <View className={styles.MMIndexBar}>
      <ScrollView scrollY={true} scrollWithAnimation={animation} scrollAnchoring={true} scrollIntoView={process.env.TARO_ENV === 'h5' ? '' : currentKeyId}
        className={styles.scrollViewHeight} style={{ height: scrollViewHeight ? scrollViewHeight : '100vh' }} scrollTop={scrollTop}>
        {value.map(item => <View key={item.key} id={item.key}>
          <View className={styles.indexTitle}>{item.title}</View>
          {item.items.map(cellItem => <View key={cellItem.id} className={styles.cellItem}>{cellItem.name}</View>)}
        </View>)}
      </ScrollView>
      <View className={styles.fixedIndexBar} style={{ top: topHeight + 'px' }}>
        {value.map(item => <View onClick={() => this.onClick(item.key)} className={styles.rightItem} key={item.key}>{item.key}</View>)}
      </View>
    </View>;
  }

  private async onClick(key) {
    if (process.env.TARO_ENV === 'h5') {
      const scrollTop = document.getElementById(key)!.offsetTop
      this.setState({
        scrollTop
      })
    }
    this.props.onClick(key)
  }
}
