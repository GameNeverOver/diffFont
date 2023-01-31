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
exports.fomatOffset = exports.gameSeconds = exports.passAudio = exports.errorAudio = exports.successAudio = exports.myBgm = exports.gameName = undefined;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gameSeconds = 120;
var gameName = ['我', '不', '是', '近', '视', '眼'];
var errCallback = function errCallback(res) {
  console.log(res.errMsg, res.errCode);
};
// bgm实例
var myBgm = _taroWeapp2.default.createInnerAudioContext();
// myBgm.autoplay = true
myBgm.src = 'https://ls-sycdn.kuwo.cn/1e6421ea1b281d00df7a14d782f92b63/63bfc005/resource/n3/84/98/686711588.mp3';
myBgm.onError(errCallback);
// 正确点击音效的实例
var successAudio = _taroWeapp2.default.createInnerAudioContext();
successAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/70/5c89440055a9b76614.mp3';
successAudio.onError(errCallback);
// 错误点击音效的实例
var errorAudio = _taroWeapp2.default.createInnerAudioContext();
errorAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/74/5c8949d63547e84016.mp3';
errorAudio.onError(errCallback);
// 通关音效的实例
var passAudio = _taroWeapp2.default.createInnerAudioContext();
passAudio.src = 'https://img.tukuppt.com/newpreview_music/09/00/55/5c893391ee55466803.mp3';
passAudio.onError(errCallback);
var fomatOffset = function fomatOffset(percentage) {
  return 'calc(' + percentage + '% - 15px)';
};
exports.gameName = gameName;
exports.myBgm = myBgm;
exports.successAudio = successAudio;
exports.errorAudio = errorAudio;
exports.passAudio = passAudio;
exports.gameSeconds = gameSeconds;
exports.fomatOffset = fomatOffset;

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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description hooks组件对应的mobx
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _index = __webpack_require__(/*! ./consts/index */ "./src/consts/index.tsx");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    // 当前关卡
    this.nowLevel = 1;
    // 当前关卡
    this.maxLevel = 1;
    // 音效相关
    this.effectMode = {
      bgm: false,
      click: true,
      vibrate: true
    };
    // 数据
    this.diffsData = [{
      id: 1,
      name: '饼干和信盒',
      type: 1,
      url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673417316598-ad721c80-9aa2-4d2e-bbd2-208f0c8a0bf9.jpeg',
      url_: 'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673417325197-20a2c3c7-1f7f-4a75-ad8f-c8bf299035a2.jpeg?x-oss-process=image%2Fresize%2Cw_674%2Climit_0%2Finterlace%2C1',
      diffs: [{
        id: 1,
        find: false,
        left: (0, _index.fomatOffset)(17.56),
        top: (0, _index.fomatOffset)(37.79)
      }, {
        id: 2,
        find: false,
        left: (0, _index.fomatOffset)(52.77),
        top: (0, _index.fomatOffset)(33.48)
      }, {
        id: 3,
        find: false,
        left: (0, _index.fomatOffset)(49.71),
        top: (0, _index.fomatOffset)(64.37)
      }, {
        id: 4,
        find: false,
        left: (0, _index.fomatOffset)(74.57),
        top: (0, _index.fomatOffset)(37.97)
      }, {
        id: 5,
        find: false,
        left: (0, _index.fomatOffset)(68.42),
        top: (0, _index.fomatOffset)(84.48)
      }, {
        id: 6,
        find: false,
        left: (0, _index.fomatOffset)(22.07),
        top: (0, _index.fomatOffset)(64.78)
      }, {
        id: 7,
        find: false,
        left: (0, _index.fomatOffset)(71.34),
        top: (0, _index.fomatOffset)(8.35)
      }]
    }, {
      id: 2,
      name: '向日葵',
      type: 1,
      url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673416833237-93d09b57-d26e-4732-8ee6-540b438550a9.jpeg',
      url_: 'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673418238548-f13f44f9-6f6a-4ee2-9a31-056696b0ad90.jpeg',
      diffs: [{
        id: 1,
        find: false,
        left: '6.5%',
        top: '5.8%'
      }, {
        id: 2,
        find: false,
        left: '24.9%',
        top: '81%'
      }, {
        id: 3,
        find: false,
        left: '55.7%',
        top: '32%'
      }, {
        id: 4,
        find: false,
        left: '29.3%',
        top: '7.7%'
      }, {
        id: 5,
        find: false,
        left: '41.5%',
        top: '67.6%'
      }, {
        id: 6,
        find: false,
        left: '90.3%',
        top: '6%'
      }]
    }, {
      id: 3,
      name: '新年快乐',
      type: 3,
      url: 'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673505835266-d5a61156-b261-4e87-a05b-d0d8668c6b3b.jpeg',
      url_: 'https://cdn.nlark.com/yuque/0/2023/jpeg/559692/1673505846365-3f213c47-d2c2-4118-9a59-472f04d1d1b0.jpeg',
      diffs: [{
        id: 1,
        find: false,
        left: '8.8%',
        top: '8.7%'
      }, {
        id: 2,
        find: false,
        left: '85%',
        top: '8.2%'
      }, {
        id: 3,
        find: false,
        left: '47.6%',
        top: '10%'
      }, {
        id: 4,
        find: false,
        left: '22.7%',
        top: '87%'
      }, {
        id: 5,
        find: false,
        left: '41.7%',
        top: '56.2%'
      }, {
        id: 6,
        find: false,
        left: '42.3%',
        top: '72.2%'
      }]
    }];
  }

  _createClass(Store, [{
    key: "setNowLevel",
    value: function setNowLevel(num) {
      this.nowLevel = num;
      if (num > this.maxLevel) {
        this.maxLevel = num;
      }
    }
  }, {
    key: "setEffectMode",
    value: function setEffectMode(val, field) {
      this.effectMode = _extends({}, this.effectMode, _defineProperty({}, field, val));
    }
  }]);

  return Store;
}();

(0, _mobx.decorate)(Store, {
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
 * 绑定this
 *
 * @export
 * @returns
 */
var autobind = exports.autobind = _autobind2.default;
/**
 * 函数在未运行完成前 锁死
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
 * 多少毫秒才能发送一次 限流
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
 * 延迟触发  多次提交，提交最后一次
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
 * 特殊限流，最后一次的函数肯定触发
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
 * 所有函数返回值均是最后一个函数的返回值 返回值转为promise
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
 * 生成唯一标识符
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
 * 判断是否是新iphone
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
    // 判断是否为iphone SE,1334 x 750 像素分辨率
    isNewPhone = !(screenWidth === 375 && screenHeight === 667);
  }
  return isNewPhone;
}
/**
 * 查询元素大小
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
 * 获取枚举的key
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
module.exports = {"flex_c":"index-module__flex_c___2rik1","flex_s":"index-module__flex_s___26ASS","ellipsis":"index-module__ellipsis___2rgHx","close":"index-module__close___1uMkK","closeDoor":"index-module__closeDoor___2uFoq","open":"index-module__open___3HsSM","openDoor":"index-module__openDoor___1Dkq0","homePage":"index-module__homePage___1dYx0","topBar":"index-module__topBar___1sai-","barItem":"index-module__barItem___MHQyS","level":"index-module__level___1_cXI","act":"index-module__act___RgR6p","progressInfo":"index-module__progressInfo___39uCl","diffImage":"index-module__diffImage___2r7H3","imgBox":"index-module__imgBox___3ipfP","door":"index-module__door___zjLPo","doorBar":"index-module__doorBar___yp2nt","star":"index-module__star___2J8TC","oneTip":"index-module__oneTip___1ej7R","opacityFlash1":"index-module__opacityFlash1___308T0","twoTip":"index-module__twoTip___1VDcY","opacityFlash2":"index-module__opacityFlash2___21VhQ","threeTip":"index-module__threeTip___1i9JU","opacityFlash3":"index-module__opacityFlash3___2O4yF","tipContainer":"index-module__tipContainer___mhNTy","title":"index-module__title___2yXGC","tip":"index-module__tip___CTVl9","fiveBox":"index-module__fiveBox___1uqYC","moveFive":"index-module__moveFive___1S2Hh","errorBox":"index-module__errorBox___2ce88","moveNone":"index-module__moveNone___VJYT4","setting":"index-module__setting___1TZk2","basePopover":"index-module__basePopover___KCaTs","setPopover":"index-module__setPopover___3yQ8q","passPopover":"index-module__passPopover___1Hjue","pausePopover":"index-module__pausePopover___1t3p_"};

/***/ })

}]);