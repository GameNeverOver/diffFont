(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/tab-bar/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../modules/@wmeimob/decorator/src/components/index */ "./src/modules/@wmeimob/decorator/src/components/index.ts");

var _indexModules = __webpack_require__(/*! ./index.modules.less */ "./src/components/tab-bar/index.modules.less");

var _indexModules2 = _interopRequireDefault(_indexModules);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _globalStore = __webpack_require__(/*! ../../globalStore2 */ "./src/globalStore2.ts");

var _globalStore2 = _interopRequireDefault(_globalStore);

var _index2 = __webpack_require__(/*! ../../modules/@wmeimob/taro-design/src/components/utils/index */ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts");

var _GlobalData = __webpack_require__(/*! ../../GlobalData */ "./src/GlobalData.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MMTabBar_1;

var MMTabBarList = [];
/**
 * @name 标签栏
 */
var MMTabBar = MMTabBar_1 = (_temp2 = _class = function (_PureComponent) {
  _inherits(MMTabBar, _PureComponent);

  function MMTabBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MMTabBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MMTabBar.__proto__ || Object.getPrototypeOf(MMTabBar)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["loopArray13", "styles", "isNewIphone", "data", "currPageIndex", "flag", "path"], _this.anonymousFunc0Map = {}, _this.customComponents = ["MMBadge"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MMTabBar, [{
    key: "_constructor",
    value: function _constructor() {
      _get(MMTabBar.prototype.__proto__ || Object.getPrototypeOf(MMTabBar.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        currPageIndex: MMTabBar_1.currPageIndex,
        flag: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      this.setPath();
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

      var currPageIndex = this.__state.currPageIndex;

      var data = (0, _GlobalData.getGlobalData)(_GlobalData.EGlobalDataKey.Tabs);
      var activeColor = (0, _GlobalData.getGlobalData)(_GlobalData.EGlobalDataKey.ActiveColor) || _indexModules2.default.primaryColor;
      var defaultColor = (0, _GlobalData.getGlobalData)(_GlobalData.EGlobalDataKey.DefaultColor) || _indexModules2.default.tabBarFontColor;
      var loopArray13 = data.map(function (value, index) {
        value = {
          $original: (0, _taroWeapp.internal_get_original)(value)
        };

        var _$indexKey = "bbzzz" + index;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          return _this2.onClick(value.$original, index);
        };

        var $loopState__temp2 = (0, _classnames2.default)(_indexModules2.default.image, _globalStore2.default.tabKey === index ? value.$original.imageSelected : value.$original.image);
        var $loopState__temp4 = (0, _taroWeapp.internal_inline_style)({
          color: _globalStore2.default.tabKey === index ? activeColor : defaultColor
        });

        var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "bczzzzzzzz" + index, true),
            _genCompid2 = _slicedToArray(_genCompid, 2),
            $prevCompid__17 = _genCompid2[0],
            $compid__17 = _genCompid2[1];

        value.$original.redHot && _taroWeapp.propsManager.set({
          "absolute": true
        }, $compid__17, $prevCompid__17);

        var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "bdzzzzzzzz" + index, true),
            _genCompid4 = _slicedToArray(_genCompid3, 2),
            $prevCompid__18 = _genCompid4[0],
            $compid__18 = _genCompid4[1];

        value.$original.count && _taroWeapp.propsManager.set({
          "value": value.$original.count,
          "digit": 2,
          "absolute": true
        }, $compid__18, $prevCompid__18);
        return {
          _$indexKey: _$indexKey,
          $loopState__temp2: $loopState__temp2,
          $loopState__temp4: $loopState__temp4,
          $compid__17: $compid__17,
          $compid__18: $compid__18,
          $original: value.$original
        };
      });
      Object.assign(this.__state, {
        loopArray13: loopArray13,
        styles: _indexModules2.default,
        isNewIphone: _index2.isNewIphone,
        data: data
      });
      return this.__state;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      false;
      MMTabBarList.push(this);
      this.setPath();
    }
  }, {
    key: "setPath",
    value: function setPath() {
      var path = this.props.path;

      if (path) {
        this.setAllState({
          currPageIndex: (0, _GlobalData.getGlobalData)(_GlobalData.EGlobalDataKey.Tabs).findIndex(function (value) {
            return value.url === path.replace(/\?.*$/g, '');
          })
        });
      }
    }
  }, {
    key: "setRedDot",
    value: function setRedDot(index, redHot) {
      var data = (0, _GlobalData.getGlobalData)(_GlobalData.EGlobalDataKey.Tabs).map(function (value, dataIndex) {
        if (index === dataIndex) {
          value.redHot = redHot;
        }
        return value;
      });
      (0, _GlobalData.setGlobalData)(_GlobalData.EGlobalDataKey.Tabs, data);
      this.setAllState({ flag: Date.now() });
    }
  }, {
    key: "setCount",
    value: function setCount(index, count) {
      var data = (0, _GlobalData.getGlobalData)(_GlobalData.EGlobalDataKey.Tabs).map(function (value, dataIndex) {
        if (index === dataIndex) {
          value.count = count;
        }
        return value;
      });
      (0, _GlobalData.setGlobalData)(_GlobalData.EGlobalDataKey.Tabs, data);
      this.setAllState({ flag: Date.now() });
    }
  }, {
    key: "setAllState",
    value: function setAllState(state) {
      MMTabBarList.forEach(function (value) {
        return value.setState(state);
      });
    }
  }, {
    key: "onClick",
    value: function onClick(data, index) {
      if (index !== _globalStore2.default.tabKey) {
        _globalStore2.default.tabKey = index;
        MMTabBarList.forEach(function (value) {
          return value.setState({
            currPageIndex: index
          });
        });
        MMTabBar_1.currPageIndex = index;
        _taroWeapp2.default.switchTab({
          url: data.url
        });
      }
    }
  }, {
    key: "anonymousFunc0",
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return MMTabBar;
}(_taroWeapp.PureComponent), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "components/tab-bar/index", _temp2);
MMTabBar.currPageIndex = 0;
MMTabBar.options = {
  addGlobalClass: true
};
MMTabBar.defaultProps = {};
MMTabBar.data = [];
MMTabBar = MMTabBar_1 = (0, _tslib.__decorate)([_index.autobind, _mobx.observer], MMTabBar);
exports.default = MMTabBar;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(MMTabBar));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/tab-bar/index.wxml";

/***/ }),

/***/ "./src/components/tab-bar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/tab-bar/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./src/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./src/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&":
/*!****************************************************************************!*\
  !*** ./src/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/tab-bar/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&":
/*!******************************************************************************!*\
  !*** ./src/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/tab-bar/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/globalStore2.ts":
/*!*****************************!*\
  !*** ./src/globalStore2.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observableValue = undefined;

var _mobx = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");

var observableValue = exports.observableValue = {
  tabKey: 0
}; /**
    * @description class组件对应的mobx
    */

var counterStore = (0, _mobx.observable)(observableValue);
exports.default = counterStore;

/***/ })

},[["./src/components/tab-bar/index.tsx","runtime","taro","vendors","common"]]]);