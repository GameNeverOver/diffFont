import AliYunTaro from "~/modules/@wmeimob/aliyun/src/taro";
import { get } from "../request";
import { aliyunOssTokenUrl } from "~/config";

const { upload } = new AliYunTaro({
  getOssToken: () => get(aliyunOssTokenUrl)
});

export { upload }
