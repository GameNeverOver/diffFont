import { View, Swiper, SwiperItem, Text } from '@tarojs/components';
import Taro, { PureComponent } from '@tarojs/taro';
import classname from 'classnames';
import styles from './index.modules.less';

interface IMMCarouselProps {
  /**
   * 轮播图
   *
   * @type {string[]}
   * @memberof IMMCarouselProps
   */
  images: string[];

  /**
   * 图片样式
   *
   * @type {(string | React.CSSProperties | undefined)}
   * @memberof IMMCarouselProps
   */
  imagesStyle?: React.CSSProperties;

  /**
   * 自动动画
   *
   * @type {Boolean}
   * @memberof IMMCarouselProps
   */
  autoplay?: boolean;

  /**
   * 衔接播放
   *
   * @type {Boolean}
   * @memberof IMMCarouselProps
   */
  circular?: boolean;

  /**
   * 点击图片事件
   */
  onClick?: (index: number) => void;

  swiperStyle?: SwiperStyle //轮播样式

  dotType?: number //指示点类型 1:首页 2.仪器详情
}

interface IMMCarouselState {
  current: number;
  scrollLeft: number;
  touched: boolean;
}

interface SwiperStyle {
  width?: string,
  height?: string
}


/**
 * @name 走马灯
 * @autobind tarobug: 加装饰器会导致Render Props失败
 */
export default class MMCarousel extends PureComponent<IMMCarouselProps, IMMCarouselState> {
  static defaultProps = {
    renderItem: null,
    images: [],
    imagesStyle: {},
    autoplay: true,
    circular: true,
    onclick() {},
    swiperStyle: {},
    dotType: 1
  };

  static options = {
    addGlobalClass: true,
    styleIsolation: 'apply-shared'
  };

  state: IMMCarouselState = {
    current: 0,
    scrollLeft: -1,
    touched: false
  };

  renderDot1(images,current){
    return <View className={styles.dot}>
      {images.map((_value, index) => (
        <View
          className={classname(
            styles.dotItem,
            current === index ? classname(styles.dotItem__selected) : ''
          )}
          key={_value + index}
        />
      ))}
    </View>
  }

  renderDot2(images,current){
    return <View className={styles.dot2}>
      <Text className={styles.current}>{current + 1}</Text>
      <Text>/</Text>
      <Text>{images.length}</Text>
    </View>
  }

  render() {
    const { current } = this.state;
    const { images, imagesStyle, autoplay, circular, onClick,swiperStyle,dotType } = this.props;
    return (
      <View className={styles.MMCarouselStyle} style={swiperStyle}>
        <Swiper
          className={styles.MMCarouselStyle}
          style={swiperStyle}
          current={current}
          autoplay={autoplay}
          circular= {circular}
          onChange={event => this.setState({ current: event.detail.current })}
        >
          {images.map((value, index) => (
            <SwiperItem className={styles.item} key={value + index}>
              <View
                className={styles.image}
                style={{
                  backgroundImage: `url(${value})`,
                  ...imagesStyle
                }}
                onClick={() => onClick!(index)}
              />
            </SwiperItem>
          ))}
        </Swiper>
        { dotType === 1 && this.renderDot1(images,current) }
        { dotType === 2 && this.renderDot2(images,current) }
      </View>
    );
  }
}
