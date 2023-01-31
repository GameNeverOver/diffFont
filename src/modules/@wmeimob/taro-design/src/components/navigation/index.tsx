import { View, Image } from '@tarojs/components';
import { getCurrentPages, getMenuButtonBoundingClientRect, navigateBack, getSystemInfoSync, PureComponent } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import classnames from 'classnames';
import MMIconFont from '../icon-font';
import styles from './index.modules.less';
import MMIconFontName from '../icon-font/const';
import { MMNavigationType } from './const';

interface IMMNavigationProps {
  /**
   * 中间显示的标题
   *
   * @type {string}
   * @memberof INavigationProps
   */
  title?: string;
  /**
   * 返回按钮是否显示 taro没发现如何判断renderLeftContent是否存在
   *
   * @type {boolean}
   * @memberof INavigationProps
   */
  backVisible?: boolean;
  /**
   * 渲染左边的元素
   *
   * @type {(JSX.Element | string)}
   * @memberof INavigationProps
   */
  renderLeftContent?: JSX.Element;
  /**
   * 类型
   *
   * @type {MMNavigationType}
   * @memberof INavigationProps
   */
  type?: MMNavigationType;

  propStyle?: any;

  logo?: String
}

interface IMMNavigationState {
  height: number;
}

// h5暂时不支持 API getMenuButtonBoundingClientRect, 模拟导航栏iphone6/7/8固定高度
const statusBarHeight = process.env.TARO_ENV === 'weapp' ? getSystemInfoSync().statusBarHeight : 20;

const menuButtonBoundingClientRect = process.env.TARO_ENV === 'weapp' ? getMenuButtonBoundingClientRect() : {
  bottom: 56,
  height: 32,
  left: 278,
  right: 365,
  top: 24,
  width: 87
};

/**
 * @name 导航
 */
@autobind
export default class MMNavigation extends PureComponent<IMMNavigationProps, IMMNavigationState> {
  static options = {
    addGlobalClass: true
  };

  static defaultProps = {
    defaultChecked: false,
    backVisible: true,
    type: MMNavigationType.Default
  };

  state: IMMNavigationState = {
    height: (menuButtonBoundingClientRect.top - statusBarHeight) * 2 + menuButtonBoundingClientRect.height
  };

  get className() {
    const classNames = [styles.fixed];
    switch (this.props.type) {
      case MMNavigationType.Transparent:
        classNames.push(styles.fixed__transparent);
        break;
      case MMNavigationType.Primary:
        classNames.push(styles.fixed__primary);
        break;
      case MMNavigationType.Gradient:
        classNames.push(styles.fixed__gradient);
        break;
      case MMNavigationType.Login:
        classNames.push(styles.fixed__login);
        break;
      case MMNavigationType.Home:
        classNames.push(styles.fixed__home);
        break;
      case MMNavigationType.OrderDetail:
        classNames.push(styles.fixed__orderDetail);
        break;
    }

    return classnames(...classNames);
  }

  render() {
    const { renderLeftContent, propStyle, logo, title, backVisible } = this.props
    // const viewHeight = this.props.type === MMNavigationType.transparent ? 0 : this.state.height + statusBarHeight + 'px';
    const viewHeight = process.env.TARO_ENV === 'weapp' ? this.state.height + statusBarHeight + 'px' : this.state.height + 'px';
    return <View {...this.props} className={styles.MMNavigation} style={{ height: viewHeight }} >
      <View className={this.className} style={{ paddingTop: process.env.TARO_ENV === 'weapp' ? statusBarHeight + 'px' : 0 }} >
        <View className={styles.content} style={{ height: this.state.height + 'px' }}>
          <View className={styles.leftBox}>
            {renderLeftContent}
          </View>
          {backVisible ? this.renderGoBack() : ''}
          <View style={propStyle} className={styles.public}>
            {title ? title : this.renderImage(logo)}
          </View>
        </View>
      </View>
    </View>;
  }

  private onGoBack() {
    navigateBack({
      delta: 1
    });
  }

  private renderGoBack() {
    const { length } = getCurrentPages();
    const { type } = this.props;
    return length > 1 && <View className={styles.goback} onClick={this.onGoBack} >
      <MMIconFont color={type === (MMNavigationType.Default || MMNavigationType.OrderDetail) ? undefined : 'black'}
        value={MMIconFontName.Back} />
    </View>;
  }

  private renderImage(logo) {
    return <View>
      {logo === 'login' && <Image src="https://aixinjingji.oss-cn-shanghai.aliyuncs.com/aixin/20f7bc4b-3c42-e27e-4b11-7e82c3147457.png"
        style={{ width: '74px', height: '15px' }} />}
      {/* {logo === 'home' && <Image src="https://aixinjingji.oss-cn-shanghai.aliyuncs.com/aixin/8078153a-7801-a8b4-818b-180b6311dd85.png"
        style={{ width: '116px', height: '16px' }} />} */}
      {logo === 'home' && <Image src={require('./images/logo.png')}
        style={{ width: '116px', height: '16px' }} />}
    </View>
  }
}

