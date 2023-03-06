(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/play/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/index.tsx?taro&type=script&parse=PAGE&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/play/index.tsx?taro&type=script&parse=PAGE& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /**
                     * @description 游戏页面
                     */

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _const = __webpack_require__(/*! ../../modules/@wmeimob/taro-design/src/components/navigation/const */ "./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx");

var _indexModule = __webpack_require__(/*! ./index.module.less */ "./src/pages/play/index.module.less");

var styles = _interopRequireWildcard(_indexModule);

var _func = __webpack_require__(/*! ../../common/func */ "./src/common/func.tsx");

var _index = __webpack_require__(/*! ../../modules/@wmeimob/taro-design/src/components/utils/index */ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts");

var _globalStore = __webpack_require__(/*! ../../globalStore */ "./src/globalStore.ts");

var _globalStore2 = _interopRequireDefault(_globalStore);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index2 = __webpack_require__(/*! ../../consts/index */ "./src/consts/index.tsx");

var _home = __webpack_require__(/*! ./img/home.png */ "./src/pages/play/img/home.png");

var _home2 = _interopRequireDefault(_home);

var _bofang = __webpack_require__(/*! ./img/bofang.png */ "./src/pages/play/img/bofang.png");

var _bofang2 = _interopRequireDefault(_bofang);

var _zanting = __webpack_require__(/*! ./img/zanting.png */ "./src/pages/play/img/zanting.png");

var _zanting2 = _interopRequireDefault(_zanting);

var _start = __webpack_require__(/*! ./img/start.png */ "./src/pages/play/img/start.png");

var _start2 = _interopRequireDefault(_start);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var timer = null;
var duration = _index2.gameSeconds;

var Index = (_temp2 = _class = function (_Taro$Component) {
  _inherits(Index, _Taro$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '火眼精金',
      navigationStyle: 'custom'
    }, _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp6", "loopArray9", "loopArray10", "$compid__11", "$compid__12", "$compid__13", "$compid__14", "styles", "imgShouye", "ing", "imgEnd", "imgStart", "difficulty", "fontInfo", "pass", "imgStar", "$anonymousCallee__1", "passVisible", "isSuccess", "pause", "isNewIphone", "nowLevel", "fomatTime", "diffsData"], _this.anonymousFunc2Map = {}, _this.customComponents = ["MMNavigation", "FiveBox", "PassPrompt", "SuccessBox", "ErrorBox"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "_createData",
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__11"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__11 = _genCompid2[0],
          $compid__11 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__12"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__12 = _genCompid4[0],
          $compid__12 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__13"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__13 = _genCompid6[0],
          $compid__13 = _genCompid6[1];

      var _genCompid7 = (0, _taroWeapp.genCompid)(__prefix + "$compid__14"),
          _genCompid8 = _slicedToArray(_genCompid7, 2),
          $prevCompid__14 = _genCompid8[0],
          $compid__14 = _genCompid8[1];

      var _useContext = (0, _taroWeapp.useContext)(_globalStore2.default),
          maxLevel = _useContext.maxLevel,
          difficulty = _useContext.difficulty,
          nowLevel = _useContext.nowLevel,
          effectMode = _useContext.effectMode,
          diffsData = _useContext.diffsData,
          setNowLevel = _useContext.setNowLevel;
      // 倒计时


      var _useState = (0, _taroWeapp.useState)(_index2.gameSeconds),
          _useState2 = _slicedToArray(_useState, 2),
          countdown = _useState2[0],
          setCountdown = _useState2[1];
      // 暂停/继续


      var _useState3 = (0, _taroWeapp.useState)(true),
          _useState4 = _slicedToArray(_useState3, 2),
          ing = _useState4[0],
          setIng = _useState4[1];
      // 是否过关


      var _useState5 = (0, _taroWeapp.useState)(false),
          _useState6 = _slicedToArray(_useState5, 2),
          pass = _useState6[0],
          setPass = _useState6[1];
      // 点击错误的次数


      var _useState7 = (0, _taroWeapp.useState)([]),
          _useState8 = _slicedToArray(_useState7, 2),
          fiveList = _useState8[0],
          setFiveList = _useState8[1];
      // 通关的显示


      var _useState9 = (0, _taroWeapp.useState)(false),
          _useState10 = _slicedToArray(_useState9, 2),
          passVisible = _useState10[0],
          setPassVisible = _useState10[1];
      // 暂停的显示


      var _useState11 = (0, _taroWeapp.useState)(false),
          _useState12 = _slicedToArray(_useState11, 2),
          pause = _useState12[0],
          setPause = _useState12[1];
      // 错误的次数


      var _useState13 = (0, _taroWeapp.useState)([]),
          _useState14 = _slicedToArray(_useState13, 2),
          errorList = _useState14[0],
          setErrorList = _useState14[1];
      // 字体


      var _useState15 = (0, _taroWeapp.useState)([]),
          _useState16 = _slicedToArray(_useState15, 2),
          fontInfo = _useState16[0],
          setFontInfo = _useState16[1];
      // success


      var _useState17 = (0, _taroWeapp.useState)(false),
          _useState18 = _slicedToArray(_useState17, 2),
          isSuccess = _useState18[0],
          setIsSuccess = _useState18[1];

      var fomatTime = (0, _taroWeapp.useMemo)(function () {
        var minutes = Math.floor(countdown / 60);
        var seconds = minutes < 0 ? 0 : countdown - minutes * 60;
        return "0" + (minutes < 0 ? 0 : minutes) + " : " + (seconds > 9 ? '' : 0) + seconds;
      }, [countdown]);
      var queryLevel = function queryLevel(num) {
        var difficultyNum = [81, 100, 121, 144, 169, 196, 225][difficulty - 1];
        console.log(nowLevel, difficulty);
        var random = parseInt(Math.random() * difficultyNum);
        var list = Array.from(Array(difficultyNum), function (_, n) {
          return {
            flag: n === random ? true : false,
            id: n,
            font: n === random ? diffsData[num - 1]._font : diffsData[num - 1].font
          };
        });
        setFontInfo(list);
        setIng(true);
      };
      // 点击错误的话-5s
      var reduceFive = function reduceFive(e) {
        effectMode.click && _index2.errorAudio.play();
        effectMode.vibrate && _taroWeapp2.default.vibrateLong();
        setErrorList([].concat(_toConsumableArray(errorList), [e.detail]));
        setFiveList([].concat(_toConsumableArray(fiveList), [true]));
        if (countdown > 5) {
          duration -= 4;
        } else {
          duration = 0;
        }
      };
      // 继续游戏
      var startGame = function startGame() {
        timer = setInterval(function () {
          duration--;
          if (duration <= 1) {
            setCountdown(0);
            setIng(false);
            setPassVisible(true);
            clearInterval(timer);
          } else {
            setCountdown(duration);
          }
        }, 1000);
      };
      (0, _taroWeapp.useEffect)(function () {
        if (timer) {
          clearInterval(timer);
        }if (ing) {
          startGame();
        }
      }, [ing]);
      (0, _taroWeapp.useEffect)(function () {
        duration = _index2.gameSeconds;
        queryLevel(nowLevel);
        (0, _func.sharePage)();
        // effectMode.bgm && myBgm.play()
      }, []);
      // 再来一次 / 下一关
      var tryAgain = function tryAgain() {
        duration = _index2.gameSeconds;
        setPass(false);
        setCountdown(_index2.gameSeconds);
        setPassVisible(false);
        setFiveList([]);
        setErrorList([]);
        queryLevel(nowLevel);
      };
      var passFunc = function passFunc() {
        setPass(true);
        _index2.passAudio.play();
        setPassVisible(true);
        setIng(false);
        clearInterval(timer);
        if (nowLevel === maxLevel) {
          setIsSuccess(true);
        } else {
          setNowLevel(nowLevel + 1);
        }
      };
      var backHome = function backHome() {
        _taroWeapp2.default.switchTab({ url: '/pages/home/index' });
      };
      this.anonymousFunc0 = backHome;
      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ textAlign: 'right' });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({
        marginTop: '5px'
      });

      this.anonymousFunc1 = function () {
        setIng(false);
        setPause(true);
      };

      var anonymousState__temp3 = (0, _taroWeapp.internal_inline_style)({ opacity: pass ? 0 : 1 });
      var anonymousState__temp6 = passVisible ? !pass : null;

      this.anonymousFunc3 = function () {
        setIng(true);
        setPause(false);
      };

      var $anonymousCallee__1 = Array(difficulty).fill(100);
      var loopArray9 = fontInfo.map(function (item, __index2) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };

        var _$indexKey = "izzzz" + __index2;

        _this2.anonymousFunc2Map[_$indexKey] = function (e) {
          if (item.$original.flag) {
            passFunc();
          } else {
            reduceFive(e);
          }
        };

        return {
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      var loopArray10 = Array(difficulty).fill(100).map(function (item, idx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp5 = item.$original + idx;
        return {
          $loopState__temp5: $loopState__temp5,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "type": _const.MMNavigationType.Transparent,
        "title": ""
      }, $compid__11, $prevCompid__11);
      _taroWeapp.propsManager.set({
        "list": fiveList
      }, $compid__12, $prevCompid__12);
      passVisible && _taroWeapp.propsManager.set({
        "fail": anonymousState__temp6,
        "tryAgain": tryAgain
      }, $compid__13, $prevCompid__13);
      _taroWeapp.propsManager.set({
        "list": errorList
      }, $compid__14, $prevCompid__14);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp6: anonymousState__temp6,
        loopArray9: loopArray9,
        loopArray10: loopArray10,
        $compid__11: $compid__11,
        $compid__12: $compid__12,
        $compid__13: $compid__13,
        $compid__14: $compid__14,
        styles: styles,
        imgShouye: _home2.default,
        ing: ing,
        imgEnd: _zanting2.default,
        imgStart: _bofang2.default,
        difficulty: difficulty,
        fontInfo: fontInfo,
        pass: pass,
        imgStar: _start2.default,
        $anonymousCallee__1: $anonymousCallee__1,
        passVisible: passVisible,
        isSuccess: isSuccess,
        pause: pause,
        isNewIphone: _index.isNewIphone,
        nowLevel: nowLevel,
        fomatTime: fomatTime,
        diffsData: diffsData
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
    value: function anonymousFunc2(_$indexKey) {
      var _anonymousFunc2Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc2Map[_$indexKey] && (_anonymousFunc2Map = this.anonymousFunc2Map)[_$indexKey].apply(_anonymousFunc2Map, e);
    }
  }, {
    key: "anonymousFunc3",
    value: function anonymousFunc3(e) {
      ;
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0", "anonymousFunc1", "anonymousFunc2", "anonymousFunc3"], _class.$$componentPath = "pages/play/index", _temp2);


Index.config = { navigationBarTitleText: '火眼精金', navigationStyle: 'custom' };
exports.default = (0, _mobx.observer)(Index);

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/index.tsx?taro&type=template&parse=PAGE&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/play/index.tsx?taro&type=template&parse=PAGE& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/play/index.wxml";

/***/ }),

/***/ "./src/pages/play/img/bofang.png":
/*!***************************************!*\
  !*** ./src/pages/play/img/bofang.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/play/img/home.png":
/*!*************************************!*\
  !*** ./src/pages/play/img/home.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/play/img/start.png":
/*!**************************************!*\
  !*** ./src/pages/play/img/start.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/play/img/zanting.png":
/*!****************************************!*\
  !*** ./src/pages/play/img/zanting.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/play/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/play/index.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/play/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/play/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/play/index.tsx?taro&type=script&parse=PAGE&":
/*!***************************************************************!*\
  !*** ./src/pages/play/index.tsx?taro&type=script&parse=PAGE& ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/play/index.tsx?taro&type=template&parse=PAGE&":
/*!*****************************************************************!*\
  !*** ./src/pages/play/index.tsx?taro&type=template&parse=PAGE& ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/play/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/play/index.tsx","runtime","taro","vendors","common"]]]);