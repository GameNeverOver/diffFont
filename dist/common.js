(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/GlobalData.ts":
/*!***************************!*\
  !*** ./src/GlobalData.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getGlobalData = getGlobalData;
exports.setGlobalData = setGlobalData;
var EGlobalDataKey = exports.EGlobalDataKey = undefined;
(function (EGlobalDataKey) {
  EGlobalDataKey["Tabs"] = "tabs";
  EGlobalDataKey["DefaultColor"] = "defaultColor";
  EGlobalDataKey["ActiveColor"] = "activeColor";
  EGlobalDataKey["Logo"] = "logo";
  EGlobalDataKey["Name"] = "name";
})(EGlobalDataKey || (exports.EGlobalDataKey = EGlobalDataKey = {}));
var globalData = {
  logo: '',
  name: '',
  activeColor: '#00479D',
  defaultColor: '#COCOCO',
  tabs: []
};
// get overload
function getGlobalData(key) {
  return globalData[key];
}
function setGlobalData(key, val) {
  if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === 'object') {
    globalData = _extends({}, globalData, key);
  } else if (typeof key === 'string') {
    globalData[key] = val;
  }
}

/***/ }),

/***/ "./src/common/func.tsx":
/*!*****************************!*\
  !*** ./src/common/func.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wx = exports.toast = exports.getAddress = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * ?????????????????????
 *
 */
var getAddress = exports.getAddress = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var address;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            address = function address() {
              return new Promise(function (resolve) {
                _taroWeapp2.default.getLocation({
                  type: 'wgs84',
                  success: function success(res) {
                    resolve(res);
                  }
                });
              });
            };
            /** ????????????????????????**/


            return _context.abrupt('return', new Promise(function (resolve) {
              _taroWeapp2.default.getSetting({
                success: function success(res) {
                  if (res.authSetting['scope.userLocation'] === true) {
                    resolve(address());
                  } else if (res.authSetting['scope.userLocation'] === false) {
                    _taroWeapp2.default.openSetting({
                      success: function success(Val) {
                        if (Val.authSetting['scope.userLocation'] === true) {
                          resolve(address());
                        }
                      }
                    });
                  } else {
                    resolve(address());
                  }
                }
              });
            }));

          case 2:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAddress() {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * ?????? ?????????hook??????????????????????????????@debounce(wait) ?????????input
 * @param func
 * @param wait
 */


exports.dateFormat = dateFormat;
exports.getWeek = getWeek;
exports.getDateDiff = getDateDiff;
exports.isPhone = isPhone;
exports.encryptPhone = encryptPhone;
exports.base64src = base64src;
exports.downImg = downImg;
exports.localityImg = localityImg;
exports.debounce = debounce;
exports.throttle = throttle;
exports.sleep = sleep;
exports.sharePage = sharePage;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * ????????????????????????????????????????????????????????????
 */
/**
 * ???????????????
 * @param {*} timestamp //?????????
 * @param {*} format //????????????
 */
function dateFormat(timestamp) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';

  var date = new Date(timestamp);
  var newFormat = format;
  var obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  var week = ['?????????', '?????????', '?????????', '?????????', '?????????', '?????????', '?????????'];
  if (/(y+)/.test(newFormat)) {
    newFormat = newFormat.replace(RegExp.$1, String(date.getFullYear()).substr(4 - RegExp.$1.length));
  }
  if (/(w+)/.test(newFormat)) {
    newFormat = newFormat.replace(RegExp.$1, week[date.getDay()]);
  }
  for (var res in obj) {
    if (new RegExp('(' + res + ')').test(newFormat)) {
      newFormat = newFormat.replace(RegExp.$1, RegExp.$1.length === 1 ? obj[res] : ('00' + obj[res]).substr(String(obj[res]).length));
    }
  }
  return newFormat;
}
function getWeek(date) {
  var week = void 0;
  if (date.getDay() === 0) week = '??????';
  if (date.getDay() === 1) week = '??????';
  if (date.getDay() === 2) week = '??????';
  if (date.getDay() === 3) week = '??????';
  if (date.getDay() === 4) week = '??????';
  if (date.getDay() === 5) week = '??????';
  if (date.getDay() === 6) week = '??????';
  return week;
}
/**
 * ?????????????????????
 * @param {*} dateTime//?????????
 */
function getDateDiff(dateTime) {
  var dateTimeStamp = new Date(dateTime).getTime();
  var result = '';
  var minute = 60000;
  var hour = 3600000;
  var day = 86400000;
  // const halfamonth = day * 15;
  var month = 2592000000;
  var year = 31536000000;
  var now = new Date().getTime();
  var diffValue = now - dateTimeStamp;
  if (diffValue < 0) {
    return;
  }
  var monthEnd = diffValue / month;
  var weekEnd = diffValue / 604800000;
  var dayEnd = diffValue / day;
  var hourEnd = diffValue / hour;
  var minEnd = diffValue / minute;
  var yearEnd = diffValue / year;
  if (yearEnd >= 1) {
    result = dateTime;
  } else if (monthEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(monthEnd)) + '??????';
  } else if (weekEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(weekEnd)) + '??????';
  } else if (dayEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(dayEnd)) + '??????';
  } else if (hourEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(hourEnd)) + '?????????';
  } else if (minEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(minEnd)) + '?????????';
  } else {
    result = '??????';
  }
  return result;
}
/**
 *  ???????????????
 * @param {*} str ?????????
 */
function isPhone(str) {
  var reg = /^[1][2, 3,4,5, 6 ,7,8, 9][0-9]{9}$/;
  return reg.test(str);
}
/**
 * ?????????????????????
 * @param phone ?????????
 */
function encryptPhone(phone) {
  return phone.substr(0, 4) + '****' + phone.substr(7);
}
/**
 *  base64???????????????
 * @param {*} base64data ??????
 *
 */
function base64src(base64data) {
  return new Promise(function (resolve, reject) {
    var fsm = _taroWeapp2.default.getFileSystemManager();
    var timestamp = Date.parse(new Date()) / 1000; // ????????????????????????????????????????????????????????????????????????????????????????????????
    var FILE_BASE_NAME = 'tmp_base64' + timestamp;

    var _ref = /data:image\/(\w+);base64,(.*)/.exec(base64data) || [],
        _ref2 = _slicedToArray(_ref, 3),
        format = _ref2[1],
        bodyData = _ref2[2];

    if (!format) {
      reject(new Error('ERROR_BASE64SRC_PARSE'));
    }
    var filePath = _taroWeapp2.default.env.USER_DATA_PATH + '/' + FILE_BASE_NAME + '.' + format;
    var buffer = _taroWeapp2.default.base64ToArrayBuffer(bodyData);
    fsm.writeFile({
      filePath: filePath,
      data: buffer,
      encoding: 'binary',
      success: function success() {
        resolve(filePath);
      },
      fail: function fail() {
        reject(new Error('ERROR_BASE64SRC_WRITE'));
      }
    });
  });
}
/**
 * ?????????????????????
 * @param {*} imgUrl
 * @param {*} type ???????????? 1?????? 2??????
 */
function downImg(imgUrl) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var func1 = function func1(newUrl) {
    _taroWeapp2.default.saveImageToPhotosAlbum({
      filePath: newUrl,
      success: function success() {
        _taroWeapp2.default.showToast({
          title: '????????????',
          duration: 1500
        });
      }
    });
  };
  var func2 = function func2(newUrl) {
    _taroWeapp2.default.downloadFile({
      url: newUrl,
      success: function success(res) {
        if (res.statusCode === 200) {
          func1(res.tempFilePath);
        }
      }
    });
  };
  /** ????????????????????????**/
  _taroWeapp2.default.getSetting({
    success: function success(res) {
      /** ????????????????????????**/
      if (res.authSetting['scope.writePhotosAlbum'] === true) {
        type === 1 ? func1(imgUrl) : func2(imgUrl);
      } else if (res.authSetting['scope.writePhotosAlbum'] === false) {
        /** ???????????????????????????????????????????????????**/
        _taroWeapp2.default.openSetting({
          success: function success(val) {
            /** ???????????????????????????????????????????????????**/
            if (val.authSetting['scope.writePhotosAlbum'] === true) {
              type === 1 ? func1(imgUrl) : func2(imgUrl);
            }
          }
        });
      } else {
        type === 1 ? func1(imgUrl) : func2(imgUrl);
      }
    }
  });
}
/**
 * ??????????????????????????????????????????
 * @param imgUrl
 */
function localityImg(imgList) {
  return Promise.all(imgList.map(function (item) {
    return new Promise(function (resolve, reject) {
      _taroWeapp2.default.downloadFile({
        url: item,
        success: function success(val) {
          if (val.statusCode === 200) {
            resolve(val.tempFilePath);
          }
        },
        fail: function fail(err) {
          reject(err);
        }
      });
    });
  }));
}function debounce(fn) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  var timer = void 0;
  var gapTime = interval; // ?????????????????????interval??????????????????1000ms
  return function () {
    clearTimeout(timer);
    var context = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments[0]; // ???????????????arguments?????????setTimeout???????????????arguments??????????????????????????????
    timer = setTimeout(function () {
      fn.call(context, args);
    }, gapTime);
  };
}
/**
 * ????????????  ?????????hook??????????????????????????????@throttle(wait),?????????????????????
 * @param fn
 * @param interval
 *
 */
/* ???????????? */
function throttle(fn) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

  var enterTime = 0; // ???????????????
  var gapTime = interval; // ?????????????????????interval??????????????????300ms
  return function () {
    var context = this;
    var backTime = new Date(); // ???????????????return??????????????????
    if (backTime - enterTime > gapTime) {
      // eslint-disable-next-line prefer-rest-params
      fn.call(context, arguments);
      enterTime = backTime; // ??????????????????????????????????????????????????????????????????????????????
    }
  };
}
/**
 * ??????
 */
var toast = exports.toast = {
  success: function success(text) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

    return _taroWeapp2.default.showToast({
      title: text,
      icon: 'success',
      duration: interval
    });
  },
  loading: function loading(text) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

    return _taroWeapp2.default.showToast({
      title: text,
      icon: 'loading',
      duration: interval
    });
  },
  none: function none(text) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

    return _taroWeapp2.default.showToast({
      title: text,
      icon: 'none',
      duration: interval
    });
  }
};
/**
 *
 * @param callBack ????????????
 */
function sleep(ms, callback) {
  setTimeout(callback, ms);
}
/**
 * ??????
 */
var wx = exports.wx = {
  navigateTo: function navigateTo(url) {
    return _taroWeapp2.default.navigateTo({ url: url });
  },
  redirectTo: function redirectTo(url) {
    return _taroWeapp2.default.redirectTo({ url: url });
  },
  reLaunch: function reLaunch(url) {
    return _taroWeapp2.default.reLaunch({ url: url });
  },
  navigateBack: function navigateBack() {
    return _taroWeapp2.default.navigateBack();
  },
  switchTab: function switchTab(url) {
    return _taroWeapp2.default.switchTab({ url: url });
  }
};
function sharePage() {
  _taroWeapp2.default.showShareMenu({
    withShareTicket: true,
    menus: ['shareAppMessage', 'shareTimeline'],
    success: function success(res) {
      console.log(res);
    },
    fail: function fail(e) {
      console.log(e);
    }
  });
}

/***/ }),

/***/ "./src/components/tab-bar/index.modules.less":
/*!***************************************************!*\
  !*** ./src/components/tab-bar/index.modules.less ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tabBarFontColor":"#cccccc","primaryColor":"#1890ff","iconSize":"22","MMTabBar_placeholder":"index-modules__MMTabBar_placeholder___33QmY","MMTabBar":"index-modules__MMTabBar___1EVWZ","content":"index-modules__content___1DdoT","item":"index-modules__item___97VW4","image":"index-modules__image___2zs4Z","redDot":"index-modules__redDot___vC_cq","count":"index-modules__count___MBIAp","iconfont":"index-modules__iconfont___2vYL8","text":"index-modules__text___aI1BU","home":"index-modules__home___Sev14","home_select":"index-modules__home_select___2VRat","family":"index-modules__family___2nGeG","family_select":"index-modules__family_select___IMmjT","store":"index-modules__store___NVRc-","store_select":"index-modules__store_select___10Zgt","mine":"index-modules__mine___KxizY","mine_select":"index-modules__mine_select___3O3ZN"};

/***/ }),

/***/ "./src/consts/index.tsx":
/*!******************************!*\
  !*** ./src/consts/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameSeconds = exports.passAudio = exports.errorAudio = exports.successAudio = exports.myBgm = exports.gameName = undefined;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameSeconds = 60;
var gameName = ['???', '???', '???', '???', '???', '???'];
var errCallback = function errCallback(res) {
  console.log(res.errMsg, res.errCode);
};
// bgm??????
var myBgm = _taroWeapp2.default.createInnerAudioContext();
// myBgm.autoplay = true
myBgm.src = 'https://ls-sycdn.kuwo.cn/1e6421ea1b281d00df7a14d782f92b63/63bfc005/resource/n3/84/98/686711588.mp3';
myBgm.onError(errCallback);
// ???????????????????????????
var successAudio = _taroWeapp2.default.createInnerAudioContext();
successAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/70/5c89440055a9b76614.mp3';
successAudio.onError(errCallback);
// ???????????????????????????
var errorAudio = _taroWeapp2.default.createInnerAudioContext();
errorAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/74/5c8949d63547e84016.mp3';
errorAudio.onError(errCallback);
// ?????????????????????
var passAudio = _taroWeapp2.default.createInnerAudioContext();
passAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/55/5c893391ee55466803.mp3';
passAudio.onError(errCallback);
exports.gameName = gameName;
exports.myBgm = myBgm;
exports.successAudio = successAudio;
exports.errorAudio = errorAudio;
exports.passAudio = passAudio;
exports.gameSeconds = gameSeconds;

/***/ }),

/***/ "./src/globalStore.ts":
/*!****************************!*\
  !*** ./src/globalStore.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description hooks???????????????mobx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var diffList = [{
  id: 1,
  font: '???',
  _font: '???',
  pinyin: '???sh?????',
  _pinyin: '???t?????'
}, {
  id: 2,
  font: '???',
  _font: '???',
  pinyin: '???g??n???',
  _pinyin: '???qi??n???'
}, {
  id: 3,
  font: '???',
  _font: '???',
  pinyin: '???yu?????',
  _pinyin: '???r?????'
}, {
  id: 4,
  font: '???',
  _font: '???',
  pinyin: '???b?????',
  _pinyin: '???f?????'
}, {
  id: 5,
  font: '???',
  _font: '???',
  pinyin: '???xi?????',
  _pinyin: '???t?????'
}, {
  id: 6,
  font: '???',
  _font: '???',
  pinyin: '???shu?????',
  _pinyin: '???nu??n???'
}, {
  id: 7,
  font: '???',
  _font: '???',
  pinyin: '???m?????',
  _pinyin: '???sh??ng???'
}, {
  id: 8,
  font: '???',
  _font: '???',
  pinyin: '???mi??o???',
  _pinyin: '???d?????'
}, {
  id: 9,
  font: '???',
  _font: '???',
  pinyin: '???xi??ng???',
  _pinyin: '???s?????'
}, {
  id: 10,
  font: '???',
  _font: '???',
  pinyin: '?????n???',
  _pinyin: '???l?????'
}, {
  id: 11,
  font: '???',
  _font: '???',
  pinyin: '???ji?????',
  _pinyin: '???r??ng???'
}, {
  id: 12,
  font: '???',
  _font: '???',
  pinyin: '???ch??ng???',
  _pinyin: '???su?????'
}, {
  id: 13,
  font: '???',
  _font: '???',
  pinyin: '???l?????',
  _pinyin: '???l?????'
}, {
  id: 14,
  font: '???',
  _font: '???',
  pinyin: '???p??n???',
  _pinyin: '???x??n???'
}, {
  id: 15,
  font: '???',
  _font: '???',
  pinyin: '???zh?????',
  _pinyin: '???y?????'
}, {
  id: 16,
  font: '???',
  _font: '???',
  pinyin: '???y?????',
  _pinyin: '???t??ng???'
}, {
  id: 17,
  font: '???',
  _font: '???',
  pinyin: '???q??n???',
  _pinyin: '???z??u???'
}, {
  id: 18,
  font: '???',
  _font: '???',
  pinyin: '???w??i???',
  _pinyin: '???ch?????'
}, {
  id: 19,
  font: '???',
  _font: '???',
  pinyin: '???ji??ng???',
  _pinyin: '???ji??ng???'
}, {
  id: 20,
  font: '???',
  _font: '???',
  pinyin: '???sh??n???',
  _pinyin: '???ch??n???'
}, {
  id: 21,
  font: '???',
  _font: '???',
  pinyin: '???y??u???',
  _pinyin: '???l??ng???'
}, {
  id: 22,
  font: '???',
  _font: '???',
  pinyin: '???m??i???',
  _pinyin: '???m?????'
}, {
  id: 23,
  font: '???',
  _font: '???',
  pinyin: '???sh?????',
  _pinyin: '???sh?????'
}, {
  id: 24,
  font: '???',
  _font: '???',
  pinyin: '???zh??u???',
  _pinyin: '???zh??u???'
}, {
  id: 25,
  font: '???',
  _font: '???',
  pinyin: '???ch??n???',
  _pinyin: '???zh?????'
}, {
  id: 26,
  font: '???',
  _font: '???',
  pinyin: '?????o???',
  _pinyin: '???xi??n???'
}, {
  id: 27,
  font: '???',
  _font: '???',
  pinyin: '???ni??n???',
  _pinyin: '???sh??n???'
}, {
  id: 28,
  font: '???',
  _font: '???',
  pinyin: '???nu?????',
  _pinyin: '???y??n???'
}, {
  id: 29,
  font: '???',
  _font: '???',
  pinyin: '???b??o???',
  _pinyin: '???b?????'
}, {
  id: 30,
  font: '???',
  _font: '???',
  pinyin: '???mi??o???',
  _pinyin: '???m??o???'
}];
console.log(diffList.length, 'length');

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    // ??????  max7
    this.difficulty = 1;
    // ????????????
    this.nowLevel = 1;
    // ????????????
    this.maxLevel = 210;
    // ????????????
    this.effectMode = {
      bgm: false,
      click: true,
      vibrate: true
    };
    // ??????
    this.diffsData = [].concat(diffList, diffList, diffList, diffList, diffList, diffList, diffList);
  }

  _createClass(Store, [{
    key: 'setNowLevel',
    value: function setNowLevel(num) {
      if (this.maxLevel >= num) {
        if (num >= this.nowLevel) {
          _taroWeapp2.default.setStorageSync('__level', num);
        }
        this.nowLevel = num;
        this.difficulty = Math.ceil(num / 30);
      }
    }
  }, {
    key: 'setEffectMode',
    value: function setEffectMode(val, field) {
      this.effectMode = _extends({}, this.effectMode, _defineProperty({}, field, val));
    }
  }]);

  return Store;
}();

(0, _mobx.decorate)(Store, {
  difficulty: _mobx.observable,
  nowLevel: _mobx.observable,
  maxLevel: _mobx.observable,
  effectMode: _mobx.observable,
  diffsData: _mobx.observable,
  setEffectMode: _mobx.action.bound,
  setNowLevel: _mobx.action.bound
});
exports.default = (0, _taroWeapp.createContext)(new Store());

/***/ }),

/***/ "./src/modules/@wmeimob/decorator/src/components/index.ts":
/*!****************************************************************!*\
  !*** ./src/modules/@wmeimob/decorator/src/components/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autobind = undefined;

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.lock = lock;
exports.throttle = throttle;
exports.debounce = debounce;
exports.throttleLast = throttleLast;
exports.merge = merge;

var _autobind = __webpack_require__(/*! core-decorators/lib/autobind */ "./node_modules/core-decorators/lib/autobind.js");

var _autobind2 = _interopRequireDefault(_autobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * ??????this
 *
 * @export
 * @returns
 */
var autobind = exports.autobind = _autobind2.default;
/**
 * ??????????????????????????? ??????
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
function lock() {
  var runing = false;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _len,
          args,
          _key,
          _args = arguments;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (runing) {
                _context.next = 13;
                break;
              }

              runing = true;
              _context.prev = 2;

              for (_len = _args.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = _args[_key];
              }

              _context.next = 6;
              return fun.apply(this, args);

            case 6:
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](2);

              // eslint-disable-next-line require-atomic-updates
              runing = false;
              throw _context.t0;

            case 12:
              // eslint-disable-next-line require-atomic-updates
              runing = false;

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[2, 8]]);
    }));
    return descriptor;
  };
}
/**
 * ?????????????????????????????? ??????
 *
 * @export
 * @param {number} [time=100]
 * @returns {MethodDecorator}
 */
function throttle() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var date = new Date();
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var now = new Date();
      if (now.getTime() - date.getTime() > time) {
        date = now;

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        fun.apply(this, args);
      }
    };
    return descriptor;
  };
}
/**
 * ????????????  ?????????????????????????????????
 *
 * @export
 * @param {number} [time=10]
 * @returns {MethodDecorator}
 */
function debounce() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var st = void 0;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var _this = this;

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      clearTimeout(st);
      st = setTimeout(function () {
        fun.apply(_this, args);
      }, time);
    };
    return descriptor;
  };
}
/**
 * ????????????????????????????????????????????????
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
function throttleLast() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var date = new Date();
  var stLast = void 0;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var _this2 = this;

      for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var now = new Date();
      clearTimeout(stLast);
      if (now.getTime() - date.getTime() > time) {
        date = now;
        fun.apply(this, args);
      } else {
        stLast = setTimeout(function () {
          fun.apply(_this2, args);
        }, time);
      }
    };
    return descriptor;
  };
}
/**
 * ????????????????????????????????????????????????????????? ???????????????promise
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
function merge() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

  var st = void 0;
  var resloveFunction = void 0;
  var returnPromise = void 0;
  return function (_target, _name, descriptor) {
    var fun = descriptor.value;
    descriptor.value = function () {
      var _this3 = this;

      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      if (!returnPromise) {
        returnPromise = new Promise(function (resolve) {
          resloveFunction = resolve;
        });
      }
      clearTimeout(st);
      st = setTimeout(function () {
        resloveFunction(fun.apply(_this3, args));
        returnPromise = undefined;
      }, time);
      return returnPromise;
    };
    return descriptor;
  };
}

/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx":
/*!******************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var MMNavigationType = exports.MMNavigationType = undefined;
(function (MMNavigationType) {
  MMNavigationType[MMNavigationType["Default"] = 0] = "Default";
  MMNavigationType[MMNavigationType["Transparent"] = 1] = "Transparent";
  MMNavigationType[MMNavigationType["Primary"] = 2] = "Primary";
  MMNavigationType[MMNavigationType["Gradient"] = 3] = "Gradient";
  MMNavigationType[MMNavigationType["Login"] = 4] = "Login";
  MMNavigationType[MMNavigationType["Home"] = 5] = "Home";
  MMNavigationType[MMNavigationType["OrderDetail"] = 6] = "OrderDetail";
})(MMNavigationType || (exports.MMNavigationType = MMNavigationType = {}));

/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts":
/*!************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/utils/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNewIphone = undefined;
exports.guid = guid;
exports.selectRect = selectRect;
exports.enumKeys = enumKeys;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ?????????????????????
 *
 * @export
 * @returns
 */
function guid() {
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
function S4() {
  return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
}
var isNewIphone = exports.isNewIphone = getisNewIphone();
/**
 * ??????????????????iphone
 *
 * @export
 * @returns
 */
function getisNewIphone() {
  var _Taro$getSystemInfoSy = _taroWeapp2.default.getSystemInfoSync(),
      model = _Taro$getSystemInfoSy.model,
      screenWidth = _Taro$getSystemInfoSy.screenWidth,
      screenHeight = _Taro$getSystemInfoSy.screenHeight;

  var isNewPhone = /(iPhone (X|11|12|13|14|15|16))|(unknown.*iPhone)/.test(model);
  if (isNewPhone) {
    // ???????????????iphone SE,1334 x 750 ???????????????
    isNewPhone = !(screenWidth === 375 && screenHeight === 667);
  }
  return isNewPhone;
}
/**
 * ??????????????????
 *
 * @export
 * @param {string} name
 * @param {*} scope
 * @returns
 */
function selectRect(name, scope) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var query = _taroWeapp2.default.createSelectorQuery().in(scope);
      query.select(name).boundingClientRect(function (res) {
        resolve(res);
      }).exec();
    }, 0);
  });
}
/**
 * ???????????????key
 *
 * @export
 * @param {*} obj
 * @returns
 */
function enumKeys(obj) {
  var list = [];
  for (var key in Object.keys(obj)) {
    if (obj.hasOwnProperty(key)) {
      var element = obj[key];
      if (typeof element !== 'number') {
        list.push(element);
      }
    }
  }
  return list;
}

/***/ }),

/***/ "./src/pages/home/index.module.less":
/*!******************************************!*\
  !*** ./src/pages/home/index.module.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"flex_c":"index-module__flex_c___K2j8-","flex_s":"index-module__flex_s___2P1Y3","ellipsis":"index-module__ellipsis___Goonp","close":"index-module__close___3kKN3","closeDoor":"index-module__closeDoor___1CZ--","open":"index-module__open___pDo6Q","openDoor":"index-module__openDoor___3wf05","indexPage":"index-module__indexPage___3zzq7","bgImg":"index-module__bgImg___18y9v","title":"index-module__title___2mxTG","fontMove":"index-module__fontMove___2PHtB","fontMove2":"index-module__fontMove2___2u_21","options":"index-module__options___CJVjW","start":"index-module__start___37sm_","setting":"index-module__setting___N_tZP","basePopover":"index-module__basePopover___2e-44","setPopover":"index-module__setPopover___1423q"};

/***/ }),

/***/ "./src/pages/play/index.module.less":
/*!******************************************!*\
  !*** ./src/pages/play/index.module.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"flex_c":"index-module__flex_c___2rik1","flex_s":"index-module__flex_s___26ASS","ellipsis":"index-module__ellipsis___2rgHx","close":"index-module__close___1uMkK","closeDoor":"index-module__closeDoor___2uFoq","open":"index-module__open___3HsSM","openDoor":"index-module__openDoor___1Dkq0","homePage":"index-module__homePage___1dYx0","topBar":"index-module__topBar___1sai-","barItem":"index-module__barItem___MHQyS","level":"index-module__level___1_cXI","act":"index-module__act___RgR6p","progressInfo":"index-module__progressInfo___39uCl","diffImage":"index-module__diffImage___2r7H3","fontBox":"index-module__fontBox___3EL_9","font1":"index-module__font1___36XKY","font2":"index-module__font2___1nnMS","font3":"index-module__font3___19Pt2","font4":"index-module__font4___2dRr6","font5":"index-module__font5___13vE1","font6":"index-module__font6___1g8ZD","font7":"index-module__font7___1RAT2","door":"index-module__door___zjLPo","doorBar":"index-module__doorBar___yp2nt","description":"index-module__description___1kSkY","tipContainer":"index-module__tipContainer___mhNTy","title":"index-module__title___2yXGC","tip":"index-module__tip___CTVl9","fiveBox":"index-module__fiveBox___1uqYC","moveFive":"index-module__moveFive___1S2Hh","errorBox":"index-module__errorBox___2ce88","moveNone":"index-module__moveNone___VJYT4","setting":"index-module__setting___1TZk2","basePopover":"index-module__basePopover___KCaTs","setPopover":"index-module__setPopover___3yQ8q","passPopover":"index-module__passPopover___1Hjue","pausePopover":"index-module__pausePopover___1t3p_","opacityFlash1":"index-module__opacityFlash1___308T0","opacityFlash2":"index-module__opacityFlash2___21VhQ","opacityFlash3":"index-module__opacityFlash3___2O4yF"};

/***/ })

}]);