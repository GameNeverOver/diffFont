const isDevelopment = process.env.NODE_ENV === "development";

export const apiUrl = !isDevelopment
  ? "http://47.93.18.195:8020/server"  // 线上z
  : "http://47.93.18.195:8020/server";

// 没有token时候跳转的页面。如果开启了静默授权不会跳转
export const loginUrl = "/pages/home/index";

// 启动静默授权
export const silentAuthorization = false;
// 静默授权地址
export const silentAuthorizationUrl = "/wxUser/login";

// 阿里云oss地址
export const aliyunOssTokenUrl = `${apiUrl}/aliyun/oss-token`;
// 门店地图地址
export const mapUrl = "https://wx-aamc-map.aisin-sh.com";
// 高德地图key
export const amapKey = "7285760470183c2f2aa4078dfae66c25";
