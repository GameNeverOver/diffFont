(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/play/component/Success"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/component/Success.tsx?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/play/component/Success.tsx?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; // 时间到弹窗

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _func = __webpack_require__(/*! ../../../common/func */ "./src/common/func.tsx");

var _indexModule = __webpack_require__(/*! ../index.module.less */ "./src/pages/play/index.module.less");

var styles = _interopRequireWildcard(_indexModule);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PassPrompt = (_temp2 = _class = function (_Taro$Component) {
  _inherits(PassPrompt, _Taro$Component);

  function PassPrompt() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PassPrompt);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PassPrompt.__proto__ || Object.getPrototypeOf(PassPrompt)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "styles"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PassPrompt, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(PassPrompt.prototype.__proto__ || Object.getPrototypeOf(PassPrompt.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var chooseLevel = function chooseLevel() {
        _taroWeapp2.default.navigateTo({ url: '/pages/chooseLevel/index' });
      };
      var goHome = function goHome() {
        _taroWeapp2.default.switchTab({ url: '/pages/home/index' });
      };
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ height: '220px' });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ padding: '0 10px' });
      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ padding: '0 10px' });

      this.anonymousFunc0 = function () {
        return _taroWeapp2.default.setClipboardData({
          data: "liu_iscool",
          success: function success(res) {
            _taroWeapp2.default.getClipboardData({
              success: function success(res) {
                return _func.toast.none('复制成功');
              }
            });
          }
        });
      };

      this.anonymousFunc1 = chooseLevel;
      this.anonymousFunc2 = goHome;
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        styles: styles
      });
      return this.__state;
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(e) {
      ;
    }
  }, {
    key: "anonymousFunc1",
    value: function anonymousFunc1(e) {
      ;
    }
  }, {
    key: "anonymousFunc2",
    value: function anonymousFunc2(e) {
      ;
    }
  }]);

  return PassPrompt;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2"], _class.$$componentPath = "pages/play/component/Success", _temp2);
exports.default = PassPrompt;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(PassPrompt));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/component/Success.tsx?taro&type=template&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/play/component/Success.tsx?taro&type=template&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/play/component/Success.wxml";

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
 * 获取当前经纬度
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
            /** 检测用户是否授权**/


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
 * 防抖 应用于hook写法，类写法用装饰器@debounce(wait) 适用与input
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

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * 下面是开发中遇到的所有方法集合，可以叠加
 */
/**
 * 时间戳转换
 * @param {*} timestamp //时间戳
 * @param {*} format //时间类型
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
    S: date.getMilliseconds() // millisecond
  };
  var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
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
  if (date.getDay() === 0) week = "周日";
  if (date.getDay() === 1) week = "周一";
  if (date.getDay() === 2) week = "周二";
  if (date.getDay() === 3) week = "周三";
  if (date.getDay() === 4) week = "周四";
  if (date.getDay() === 5) week = "周五";
  if (date.getDay() === 6) week = "周六";
  return week;
}
/**
 * 朋友圈时间格式
 * @param {*} dateTime//时间戳
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
    result = String(parseInt(monthEnd)) + "月前";
  } else if (weekEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(weekEnd)) + "周前";
  } else if (dayEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(dayEnd)) + "天前";
  } else if (hourEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(hourEnd)) + "小时前";
  } else if (minEnd >= 1) {
    // eslint-disable-next-line radix
    result = String(parseInt(minEnd)) + "分钟前";
  } else {
    result = "刚刚";
  }
  return result;
}
/**
 *  手机号校验
 * @param {*} str 手机号
 */
function isPhone(str) {
  var reg = /^[1][2, 3,4,5, 6 ,7,8, 9][0-9]{9}$/;
  return reg.test(str);
}
/**
 * 手机号加密显示
 * @param phone 手机号
 */
function encryptPhone(phone) {
  return phone.substr(0, 4) + '****' + phone.substr(7);
}
/**
 *  base64转换本地图
 * @param {*} base64data 路径
 *
 */
function base64src(base64data) {
  return new Promise(function (resolve, reject) {
    var fsm = _taroWeapp2.default.getFileSystemManager();
    var timestamp = Date.parse(new Date()) / 1000; // 先创建时间戳用来命名（不加时间戳在画连续画第二张图的时候有问题）
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
;
/**
 * 保存图片到相册
 * @param {*} imgUrl
 * @param {*} type 图片类型 1本地 2网络
 */
function downImg(imgUrl) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var func1 = function func1(newUrl) {
    _taroWeapp2.default.saveImageToPhotosAlbum({
      filePath: newUrl,
      success: function success() {
        _taroWeapp2.default.showToast({
          title: '保存成功',
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
  /** 检测用户是否授权**/
  _taroWeapp2.default.getSetting({
    success: function success(res) {
      /** 授权，则调用相册**/
      if (res.authSetting['scope.writePhotosAlbum'] === true) {
        type === 1 ? func1(imgUrl) : func2(imgUrl);
      } else if (res.authSetting['scope.writePhotosAlbum'] === false) {
        /** 未授权，则打开授权页面，让用户授权**/
        _taroWeapp2.default.openSetting({
          success: function success(val) {
            /** 授权成功，则保存图片，失败则不保存**/
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
 * 多张网络图同时下载，顺序不变
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
  var gapTime = interval; // 间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer);
    var context = this;
    // eslint-disable-next-line prefer-rest-params
    var args = arguments[0]; // 保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args);
    }, gapTime);
  };
}
/**
 * 节流函数  应用于hook写法，类写法用装饰器@throttle(wait),适用于表单提交
 * @param fn
 * @param interval
 *
 */
/* 函数节流 */
function throttle(fn) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

  var enterTime = 0; // 触发的时间
  var gapTime = interval; // 间隔时间，如果interval不传，则默认300ms
  return function () {
    var context = this;
    var backTime = new Date(); // 第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      // eslint-disable-next-line prefer-rest-params
      fn.call(context, arguments);
      enterTime = backTime; // 赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  };
}
/**
 * 弹框
 */
var toast = exports.toast = {
  success: function success(text) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

    return _taroWeapp2.default.showToast({
      title: text,
      icon: "success",
      duration: interval
    });
  },
  loading: function loading(text) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

    return _taroWeapp2.default.showToast({
      title: text,
      icon: "loading",
      duration: interval
    });
  },
  none: function none(text) {
    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

    return _taroWeapp2.default.showToast({
      title: text,
      icon: "none",
      duration: interval
    });
  }
};
/**
 *
 * @param callBack 回调方法
 */
function sleep(ms, callback) {
  setTimeout(callback, ms);
}
/**
 * 跳转
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

/***/ }),

/***/ "./src/pages/play/component/Success.tsx":
/*!**********************************************!*\
  !*** ./src/pages/play/component/Success.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Success_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Success.tsx?taro&type=template&parse=COMPONENT& */ "./src/pages/play/component/Success.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Success.tsx?taro&type=script&parse=COMPONENT& */ "./src/pages/play/component/Success.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/play/component/Success.tsx?taro&type=script&parse=COMPONENT&":
/*!********************************************************************************!*\
  !*** ./src/pages/play/component/Success.tsx?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./Success.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/component/Success.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/play/component/Success.tsx?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************************!*\
  !*** ./src/pages/play/component/Success.tsx?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./Success.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/component/Success.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_Success_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/play/component/Success.tsx","runtime","taro","vendors","common"]]]);