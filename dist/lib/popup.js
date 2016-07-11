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

	module.exports = __webpack_require__(71);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },

/***/ 37:
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

	var _contentModule = __webpack_require__(52);

	var _contentModule2 = _interopRequireDefault(_contentModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PopupContent = function (_Component) {
	  _inherits(PopupContent, _Component);

	  function PopupContent() {
	    _classCallCheck(this, PopupContent);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(PopupContent).apply(this, arguments));
	  }

	  _createClass(PopupContent, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', this.props);
	    }
	  }]);

	  return PopupContent;
	}(_react.Component);

	PopupContent.defaultProps = {};

	exports.default = (0, _reactCssModules2.default)(PopupContent, _contentModule2.default);

/***/ },

/***/ 52:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"content-module__wrap___3NNxm"};

/***/ },

/***/ 53:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"popup-wrap":"popup-module__popup-wrap___1yX9T"};

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PopupContent = exports.Popup = undefined;

	var _popup = __webpack_require__(72);

	var _popup2 = _interopRequireDefault(_popup);

	var _content = __webpack_require__(37);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Popup = _popup2.default;
	exports.PopupContent = _content2.default;

/***/ },

/***/ 72:
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

	var _content = __webpack_require__(37);

	var _content2 = _interopRequireDefault(_content);

	var _popupModule = __webpack_require__(53);

	var _popupModule2 = _interopRequireDefault(_popupModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Popup = function (_Component) {
	  _inherits(Popup, _Component);

	  function Popup(props) {
	    _classCallCheck(this, Popup);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Popup).call(this, props));

	    _this.state = {
	      open: false
	    };

	    _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
	    _this.handleEscapePress = _this.handleEscapePress.bind(_this);
	    return _this;
	  }

	  _createClass(Popup, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.open) {
	        this.hookGlobalEvents();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (!this.props.open && newProps.open) {
	        this.hookGlobalEvents();
	      } else if (this.props.open && !newProps.open) {
	        this.unhookGlobalEvents();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unhookGlobalEvents();
	    }
	  }, {
	    key: 'hookGlobalEvents',
	    value: function hookGlobalEvents() {
	      var _this2 = this;

	      setTimeout(function () {
	        window.addEventListener('click', _this2.handleGlobalClick);
	        window.addEventListener('keyup', _this2.handleEscapePress);
	      }, 0);
	    }
	  }, {
	    key: 'unhookGlobalEvents',
	    value: function unhookGlobalEvents() {
	      window.removeEventListener('click', this.handleGlobalClick);
	      window.removeEventListener('keyup', this.handleEscapePress);
	    }
	  }, {
	    key: 'handleGlobalClick',
	    value: function handleGlobalClick(e) {
	      if (this.props.onGlobalClick) {
	        var fromPopup = this.refs.popup.contains(e.target);
	        this.props.onGlobalClick(fromPopup);
	      }
	    }
	  }, {
	    key: 'handleEscapePress',
	    value: function handleEscapePress(e) {
	      if (this.props.onEscapePress && e.key === 'Escape') {
	        this.props.onEscapePress(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var popup = void 0;
	      var kids = _react2.default.Children.map(this.props.children, function (child) {
	        if (child.type === _content2.default) {
	          popup = child;
	          return false;
	        }
	        return child;
	      });

	      return _react2.default.createElement(
	        'div',
	        this.props,
	        kids,
	        _react2.default.createElement(
	          'div',
	          { ref: 'popup', style: { display: this.props.open ? 'block' : 'none' } },
	          popup
	        )
	      );
	    }
	  }]);

	  return Popup;
	}(_react.Component);

	Popup.defaultProps = {
	  open: false
	};

	exports.default = (0, _reactCssModules2.default)(Popup, _popupModule2.default);

/***/ }

/******/ });