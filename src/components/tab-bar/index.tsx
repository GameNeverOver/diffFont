import { View } from '@tarojs/components'
import Taro, { PureComponent } from '@tarojs/taro'
import { autobind } from '~/modules/@wmeimob/decorator/src/components'
import styles from './index.modules.less'
import classNames from 'classnames'
import { observer } from '@tarojs/mobx'
import $Store2 from '~/globalStore2'
import { isNewIphone } from '~/modules/@wmeimob/taro-design/src/components/utils'
import MMBadge from '~/modules/@wmeimob/taro-design/src/components/badge'
import { IStoreShopNavItem } from '~/modules/@wmeimob/data-model/src/components/store/i-store-shop-nav-item'
import { getGlobalData, EGlobalDataKey, setGlobalData } from '~/GlobalData'

export interface IMMTabBarData extends IStoreShopNavItem {
  /**
   * 跳转连接
   *
   * @type {string}
   * @memberof IMMTabBarData
   */
  url: string
  /**
   * 红点
   *
   * @type {boolean}
   * @memberof IMMTabBarData
   */
  redHot?: boolean
  /**
   * 未读数
   *
   * @type {number}
   * @memberof IMMTabBarData
   */
  count?: number
}

interface IMMTabBarProps {
  /**
   * 点击事件 返回false 可以组织页面的跳转
   *
   */
  onClick?: (data: IStoreShopNavItem) => boolean | void

  /**
   * 当前激活路径
   */
  path?: string
}

export interface IMMTabBarState {
  /**
   * 当前页面index
   */
  currPageIndex: number
  /**
   * 强刷tab
   */
  flag: number
}

const MMTabBarList: MMTabBar[] = []

/**
 * @name 标签栏
 */
@autobind
@observer
export default class MMTabBar extends PureComponent<
  IMMTabBarProps,
  IMMTabBarState
> {
  static currPageIndex = 0

  static options = {
    addGlobalClass: true,
  }

  static defaultProps: Partial<IMMTabBarProps> = {}

  static data: IMMTabBarData[] = []

  state: IMMTabBarState = {
    currPageIndex: MMTabBar.currPageIndex,
    flag: 0,
  }

  componentDidShow() {
    this.setPath()
  }

  render() {
    const { currPageIndex } = this.state

    const data = getGlobalData(EGlobalDataKey.Tabs)
    const activeColor =
      getGlobalData(EGlobalDataKey.ActiveColor) || styles.primaryColor
    const defaultColor =
      getGlobalData(EGlobalDataKey.DefaultColor) || styles.tabBarFontColor

    return (
      <View>
        <View className={styles.MMTabBar_placeholder} />
        {isNewIphone && <View className="spacingIphone" />}
        <View className={styles.MMTabBar}>
          <View className={styles.content}>
            {data.map((value, index) => (
              <View
                key={value.text}
                className={styles.item}
                onClick={() => this.onClick(value, index)}
              >
                <View className={styles.iconfont}>
                  <View
                    className={classNames(
                      styles.image,
                      $Store2.tabKey === index
                        ? value.imageSelected
                        : value.image
                    )}
                  />

                  {value.redHot && <MMBadge absolute />}
                  {value.count && (
                    <View className={styles.count}>
                      <MMBadge value={value.count} digit={2} absolute />
                    </View>
                  )}
                </View>
                <View
                  className={styles.text}
                  style={{
                    color:
                      $Store2.tabKey === index ? activeColor : defaultColor,
                  }}
                >
                  {value.text}
                </View>
              </View>
            ))}
          </View>
          {isNewIphone && <View className="spacingIphone" />}
        </View>
      </View>
    )
  }

  componentDidMount() {
    process.env.TARO_ENV === 'h5' && Taro.hideTabBar({})
    MMTabBarList.push(this)
    this.setPath()
  }

  setPath() {
    const { path } = this.props
    if (path) {
      this.setAllState({
        currPageIndex: getGlobalData(EGlobalDataKey.Tabs).findIndex(
          (value) => value.url === path.replace(/\?.*$/g, '')
        ),
      })
    }
  }

  setRedDot(index: number, redHot: boolean) {
    const data = getGlobalData(EGlobalDataKey.Tabs).map((value, dataIndex) => {
      if (index === dataIndex) {
        value.redHot = redHot
      }
      return value
    })
    setGlobalData(EGlobalDataKey.Tabs, data)
    this.setAllState({ flag: Date.now() })
  }

  setCount(index: number, count: number) {
    const data = getGlobalData(EGlobalDataKey.Tabs).map((value, dataIndex) => {
      if (index === dataIndex) {
        value.count = count
      }
      return value
    })
    setGlobalData(EGlobalDataKey.Tabs, data)
    this.setAllState({ flag: Date.now() })
  }

  setAllState(state: Partial<IMMTabBarState>) {
    MMTabBarList.forEach((value) => value.setState(state as IMMTabBarState))
  }

  private onClick(data: IMMTabBarData, index: number) {
    if (index !== $Store2.tabKey) {
      $Store2.tabKey = index
      MMTabBarList.forEach((value) =>
        value.setState({
          currPageIndex: index,
        })
      )

      MMTabBar.currPageIndex = index
      Taro.switchTab({
        url: data.url,
      })
    }
  }
}
