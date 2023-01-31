import { Button, View } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';
import { autobind } from '~/modules/@wmeimob/decorator/src/components';
import * as styles from './index.module.less';
import MMNavigation from '~/modules/@wmeimob/taro-design/src/components/navigation';

@autobind
export default class Page extends Component {
  config: Config = {
    navigationBarTitleText: '',
    navigationStyle: 'custom'
  };

  state = {

  };

  componentDidMount() {
  }


  render() {
    return (
      <View className={styles.page}>
        <MMNavigation title="首页" />
        {/* <Button open-type="getUserInfo" onGetUserInfo={this.getUserInfo} type="default" hover-class="none">
                    <View className={styles.btn}>微信授权</View>
                </Button> */}
      </View>
    );
  }
}
