(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["modules/@wmeimob/taro-design/src/components/icon-font/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=script&parse=COMPONENT&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _tslib = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _index = __webpack_require__(/*! ../../../../decorator/src/components/index */ "./src/modules/@wmeimob/decorator/src/components/index.ts");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _indexModules = __webpack_require__(/*! ./index.modules.less */ "./src/modules/@wmeimob/taro-design/src/components/icon-font/index.modules.less");

var _indexModules2 = _interopRequireDefault(_indexModules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @name 图标
 */
var MMIconFont = (_temp2 = _class = function (_PureComponent) {
  _inherits(MMIconFont, _PureComponent);

  function MMIconFont() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MMIconFont);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MMIconFont.__proto__ || Object.getPrototypeOf(MMIconFont)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "size", "color", "value"], _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MMIconFont, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(MMIconFont.prototype.__proto__ || Object.getPrototypeOf(MMIconFont.prototype), "_constructor", this).call(this, props);

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

      var _props = this.__props,
          size = _props.size,
          color = _props.color;

      var style = {};
      if (size !== undefined) {
        style.fontSize = size + 'px';
      }
      if (color !== undefined) {
        style.color = color;
      }
      var anonymousState__temp = (0, _classnames2.default)(_indexModules2.default.MMIconFont, _indexModules2.default["icon" + this.__props.value]);
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)(style);
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2
      });
      return this.__state;
    }
  }]);

  return MMIconFont;
}(_taroWeapp.PureComponent), _class.$$events = [], _class.$$componentPath = "modules/@wmeimob/taro-design/src/components/icon-font/index", _temp2);
MMIconFont.defaultProps = {
  size: 20
};
MMIconFont.options = {
  addGlobalClass: true
};
MMIconFont = (0, _tslib.__decorate)([_index.autobind], MMIconFont);
exports.default = MMIconFont;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(MMIconFont));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "modules/@wmeimob/taro-design/src/components/icon-font/index.wxml";

/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/icon-font/index.modules.less":
/*!**************************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/icon-font/index.modules.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"MMIconFont":"index-modules__MMIconFont___2Ih6T","icon59286":"index-modules__icon59286___r7uts","icon59285":"index-modules__icon59285___2okwM","icon59284":"index-modules__icon59284___xfZj7","icon59279":"index-modules__icon59279___289Gv","icon59278":"index-modules__icon59278___1rLC0","icon59277":"index-modules__icon59277___fKurF","icon59274":"index-modules__icon59274___k6dPk","icon59184":"index-modules__icon59184___1_6Pq","icon59183":"index-modules__icon59183___1_Ucx","icon59182":"index-modules__icon59182___2M5f6","icon59164":"index-modules__icon59164___2KGDm","icon59163":"index-modules__icon59163____DQos","icon59153":"index-modules__icon59153___2zPtT","icon59152":"index-modules__icon59152___2U0U8","icon59149":"index-modules__icon59149___-XL7w","icon59146":"index-modules__icon59146___1-bDB","icon59145":"index-modules__icon59145___1DCTK","icon59144":"index-modules__icon59144___1-3lD","icon59143":"index-modules__icon59143___xN7F3","icon59142":"index-modules__icon59142___21fT2","icon59141":"index-modules__icon59141___2EtvR","icon59140":"index-modules__icon59140___2uS_x","icon59139":"index-modules__icon59139___3e0vf","icon59138":"index-modules__icon59138___2wdcn","icon59137":"index-modules__icon59137___D3bUQ","icon59136":"index-modules__icon59136___174bY","icon59135":"index-modules__icon59135___1VdVZ","icon59134":"index-modules__icon59134___2EmrY","icon59133":"index-modules__icon59133___bsC4A","icon59132":"index-modules__icon59132___1v3sa","icon59131":"index-modules__icon59131___2vIl8","icon59130":"index-modules__icon59130___35HXA","icon59129":"index-modules__icon59129___3F0aQ","icon59128":"index-modules__icon59128___1iujs","icon59127":"index-modules__icon59127___1K_3R","icon59125":"index-modules__icon59125___ZpHJk","icon59124":"index-modules__icon59124___1rQ4G","icon59123":"index-modules__icon59123___1JICA","icon59122":"index-modules__icon59122___1m0AM","icon59121":"index-modules__icon59121___1FE2y","icon59120":"index-modules__icon59120___141A0","icon59117":"index-modules__icon59117___1vigd","icon59116":"index-modules__icon59116___3sCjH","icon59115":"index-modules__icon59115___2ke3v","icon59114":"index-modules__icon59114___3lUMC","icon59113":"index-modules__icon59113___1psw9","icon59112":"index-modules__icon59112___9grqG","icon59111":"index-modules__icon59111___3gsMl","icon59110":"index-modules__icon59110___1mErj","icon59109":"index-modules__icon59109___1yBih","icon59108":"index-modules__icon59108___1ZdfV","icon59106":"index-modules__icon59106___3vrjn","icon59105":"index-modules__icon59105___1sJ4G","icon59104":"index-modules__icon59104___XlOhS","icon59103":"index-modules__icon59103___2tlOb","icon59102":"index-modules__icon59102___1_I8j","icon59101":"index-modules__icon59101___1h62J","icon59098":"index-modules__icon59098___2cQ2c","icon59097":"index-modules__icon59097___32rIy","icon59096":"index-modules__icon59096___1HEv7","icon59095":"index-modules__icon59095___2Pyfh","icon59093":"index-modules__icon59093___2IWNK","icon59092":"index-modules__icon59092___8NNJg","icon59091":"index-modules__icon59091___2ClFP","icon59090":"index-modules__icon59090___19dFv","icon59088":"index-modules__icon59088___1sfg9","icon59087":"index-modules__icon59087___Dd_NI","icon59086":"index-modules__icon59086___1ulv0","icon59084":"index-modules__icon59084___u3eRO","icon59083":"index-modules__icon59083___2JoM6","icon59082":"index-modules__icon59082___3gqxF","icon59081":"index-modules__icon59081___3h0T4","icon59080":"index-modules__icon59080___ch-g6","icon59079":"index-modules__icon59079___nuIDT","icon59078":"index-modules__icon59078___2kZEL","icon59077":"index-modules__icon59077___I17ra","icon59076":"index-modules__icon59076___3yRmw","icon59075":"index-modules__icon59075___1THAf","icon59074":"index-modules__icon59074___S9fTl","icon59073":"index-modules__icon59073___2zXGV","icon59072":"index-modules__icon59072___1FpEI","icon59071":"index-modules__icon59071___1ra4h","icon59067":"index-modules__icon59067___7sWB7","icon59066":"index-modules__icon59066___3M1r9","icon59064":"index-modules__icon59064___7rI12"};

/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx":
/*!*****************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.tsx?taro&type=template&parse=COMPONENT& */ "./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx?taro&type=script&parse=COMPONENT& */ "./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=script&parse=COMPONENT&":
/*!***************************************************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=script&parse=COMPONENT& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=template&parse=COMPONENT&":
/*!*****************************************************************************************************************!*\
  !*** ./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=template&parse=COMPONENT& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../../../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.tsx?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/liuyongwei/Desktop/games/diffFont/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_liuyongwei_Desktop_games_diffFont_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_tsx_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/modules/@wmeimob/taro-design/src/components/icon-font/index.tsx","runtime","taro","vendors","common"]]]);