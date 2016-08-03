module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(70);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Icon = undefined;

	var _icon = __webpack_require__(5);

	var _icon2 = _interopRequireDefault(_icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Icon = _icon2.default;

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(2);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Icon = function (_Component) {
	  _inherits(Icon, _Component);

	  function Icon() {
	    _classCallCheck(this, Icon);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).apply(this, arguments));
	  }

	  _createClass(Icon, [{
	    key: 'render',
	    value: function render() {
	      var extra = this.props.className || '';
	      return _react2.default.createElement('i', _extends({}, this.props, { className: 'ui2-icon ui2-icon-' + this.props.type + ' ' + extra }));
	    }
	  }]);

	  return Icon;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(Icon, {});

/***/ },

/***/ 6:
/***/ function(module, exports) {

	module.exports = require("@alife/alpha-icon/icon.css");

/***/ },

/***/ 48:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"notice-module__wrap___3jFlX","wrap-info":"notice-module__wrap-info___10Tqp","wrap-warning":"notice-module__wrap-warning___QQWmE","wrap-remind":"notice-module__wrap-remind___3ISjQ","wrap-large":"notice-module__wrap-large___25u8D","content":"notice-module__content___11hS6","closer-wrap":"notice-module__closer-wrap___3zMDl","closer":"notice-module__closer___1GZi3","icon":"notice-module__icon___1nPF_","icon-large":"notice-module__icon-large___31F4G","icon-info":"notice-module__icon-info___3Euth notice-module__icon___1nPF_","icon-warning":"notice-module__icon-warning___1_mR8 notice-module__icon___1nPF_","icon-remind":"notice-module__icon-remind___1Rs4L notice-module__icon___1nPF_"};

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Notice = undefined;

	var _notice = __webpack_require__(71);

	var _notice2 = _interopRequireDefault(_notice);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Notice = _notice2.default;

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactCssModules = __webpack_require__(2);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _icon = __webpack_require__(3);

	var _noticeModule = __webpack_require__(48);

	var _noticeModule2 = _interopRequireDefault(_noticeModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Notice = function (_Component) {
	  _inherits(Notice, _Component);

	  function Notice(props) {
	    _classCallCheck(this, Notice);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notice).call(this, props));

	    _this.handleClose = _this.handleClose.bind(_this);
	    return _this;
	  }

	  _createClass(Notice, [{
	    key: 'handleClose',
	    value: function handleClose() {
	      if (this.props.onClose) {
	        this.props.onClose();
	      }
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      var large = '';
	      if (this.props.large) {
	        large = ' icon-large';
	      }

	      if (this.props.type === 'info') {
	        return _react2.default.createElement(_icon.Icon, { type: 'notice', styleName: 'icon-info' + large });
	      } else if (this.props.type === 'warning') {
	        return _react2.default.createElement(_icon.Icon, { type: 'warning', styleName: 'icon-warning' + large });
	      } else if (this.props.type === 'remind') {
	        return _react2.default.createElement(_icon.Icon, { type: 'smile', styleName: 'icon-remind' + large });
	      }

	      return null;
	    }
	  }, {
	    key: 'renderCloser',
	    value: function renderCloser() {
	      if (this.props.hasCloser) {
	        return _react2.default.createElement(
	          'div',
	          { styleName: 'closer-wrap' },
	          _react2.default.createElement(_icon.Icon, { type: 'cross', styleName: 'closer', onClick: this.handleClose })
	        );
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styleName = 'wrap';

	      if (this.props.type === 'info') {
	        styleName += ' wrap-info';
	      } else if (this.props.type === 'warning') {
	        styleName += ' wrap-warning';
	      } else if (this.props.type === 'remind') {
	        styleName += ' wrap-remind';
	      }

	      if (this.props.large) {
	        styleName += ' wrap-large';
	      }

	      return _react2.default.createElement(
	        'div',
	        { styleName: styleName },
	        this.renderIcon(),
	        _react2.default.createElement(
	          'div',
	          { styleName: 'content' },
	          this.props.children
	        ),
	        this.renderCloser()
	      );
	    }
	  }]);

	  return Notice;
	}(_react.Component);

	Notice.defaultProps = {
	  type: 'info',
	  large: false,
	  hasCloser: false,
	  hasBorder: false
	};

	exports.default = (0, _reactCssModules2.default)(Notice, _noticeModule2.default, { allowMultiple: true });

/***/ }

/******/ });