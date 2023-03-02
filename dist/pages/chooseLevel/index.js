(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/chooseLevel/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/chooseLevel/index.tsx?taro&type=script&parse=PAGE&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/chooseLevel/index.tsx?taro&type=script&parse=PAGE& ***!
  \*******************************************************************************************************************************************************/
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
                     * @description 选择关卡
                     */

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _indexModule = __webpack_require__(/*! ./index.module.less */ "./src/pages/chooseLevel/index.module.less");

var styles = _interopRequireWildcard(_indexModule);

var _mobx = __webpack_require__(/*! @tarojs/mobx */ "./node_modules/@tarojs/mobx/index.js");

var _index = __webpack_require__(/*! ../../modules/@wmeimob/taro-design/src/components/utils/index */ "./src/modules/@wmeimob/taro-design/src/components/utils/index.ts");

var _const = __webpack_require__(/*! ../../modules/@wmeimob/taro-design/src/components/navigation/const */ "./src/modules/@wmeimob/taro-design/src/components/navigation/const.tsx");

var _globalStore = __webpack_require__(/*! ../../globalStore */ "./src/globalStore.ts");

var _globalStore2 = _interopRequireDefault(_globalStore);

var _suo = __webpack_require__(/*! ./imgs/suo.png */ "./src/pages/chooseLevel/imgs/suo.png");

var _suo2 = _interopRequireDefault(_suo);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
      navigationBarTitleText: '',
      navigationStyle: 'custom'
    }, _this.$usedState = ["anonymousState__temp", "loopArray85", "$compid__145", "styles", "diffsData", "nowLevel", "imgLock", "isNewIphone"], _this.anonymousFunc0Map = {}, _this.customComponents = ["MMNavigation"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);

      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      var _this2 = this;

      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__145"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__145 = _genCompid2[0],
          $compid__145 = _genCompid2[1];

      var _useContext = (0, _taroWeapp.useContext)(_globalStore2.default),
          diffsData = _useContext.diffsData,
          setNowLevel = _useContext.setNowLevel,
          nowLevel = _useContext.nowLevel;

      var anonymousState__temp = '\u5171\u8BA1' + diffsData.length + '\u5173';
      var loopArray85 = diffsData.map(function (item, idx) {
        item = {
          $original: (0, _taroWeapp.internal_get_original)(item)
        };
        var $loopState__temp3 = item.$original.id + idx;

        var _$indexKey = "gbzzz" + idx;

        _this2.anonymousFunc0Map[_$indexKey] = function () {
          setNowLevel(idx + 1);
          _taroWeapp2.default.reLaunch({ url: "/pages/play/index" });
        };

        return {
          $loopState__temp3: $loopState__temp3,
          _$indexKey: _$indexKey,
          $original: item.$original
        };
      });
      _taroWeapp.propsManager.set({
        "type": _const.MMNavigationType.Transparent,
        "title": anonymousState__temp
      }, $compid__145, $prevCompid__145);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        loopArray85: loopArray85,
        $compid__145: $compid__145,
        styles: styles,
        diffsData: diffsData,
        nowLevel: nowLevel,
        imgLock: _suo2.default,
        isNewIphone: _index.isNewIphone
      });
      return this.__state;
    }
  }, {
    key: 'anonymousFunc0',
    value: function anonymousFunc0(_$indexKey) {
      var _anonymousFunc0Map;

      ;

      for (var _len2 = arguments.length, e = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        e[_key2 - 1] = arguments[_key2];
      }

      return this.anonymousFunc0Map[_$indexKey] && (_anonymousFunc0Map = this.anonymousFunc0Map)[_$indexKey].apply(_anonymousFunc0Map, e);
    }
  }]);

  return Index;
}(_taroWeapp2.default.Component), _class.$$events = ["anonymousFunc0"], _class.$$componentPath = "pages/chooseLevel/index", _temp2);


Index.config = { navigationBarTitleText: '', navigationStyle: 'custom' };
exports.default = (0, _mobx.observer)(Index);

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Index, true));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/chooseLevel/index.tsx?taro&type=template&parse=PAGE&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/chooseLevel/index.tsx?taro&type=template&parse=PAGE& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/chooseLevel/index.wxml";

/***/ }),

/***/ "./src/pages/chooseLevel/imgs/suo.png":
/*!********************************************!*\
  !*** ./src/pages/chooseLevel/imgs/suo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/pages/chooseLevel/index.module.less":
/*!*************************************************!*\
  !*** ./src/pages/chooseLevel/index.module.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"flex_c":"index-module__flex_c___1hZCA","flex_s":"index-module__flex_s___11Tu2","ellipsis":"index-module__ellipsis___1R-Cm","close":"index-module__close___3aEZ9","closeDoor":"index-module__closeDoor___3IgGB","open":"index-module__open___26cXF","openDoor":"index-module__openDoor___2nDuK","choosePage":"index-module__choosePage___2hhus","levelContainer":"index-module__levelContainer___1qRQz","levelList":"index-module__levelList___-GFTg","findFont":"index-module__findFont___1l-u-"};

/***/ }),

/***/ "./src/pages/chooseLevel/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/chooseLevel/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=PAGE& */ "./src/pages/chooseLevel/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=PAGE& */ "./src/pages/chooseLevel/index.tsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/chooseLevel/index.tsx?taro&type=script&parse=PAGE&":
/*!**********************************************************************!*\
  !*** ./src/pages/chooseLevel/index.tsx?taro&type=script&parse=PAGE& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=PAGE& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/chooseLevel/index.tsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/chooseLevel/index.tsx?taro&type=template&parse=PAGE&":
/*!************************************************************************!*\
  !*** ./src/pages/chooseLevel/index.tsx?taro&type=template&parse=PAGE& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=PAGE& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/chooseLevel/index.tsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/pages/chooseLevel/index.tsx","runtime","taro","vendors","common"]]]);