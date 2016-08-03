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

	module.exports = __webpack_require__(67);


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

/***/ 4:
/***/ function(module, exports) {

	module.exports = require("react-dom");

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

/***/ 47:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"messenger-module__wrap___3Do3D","wrap-animate":"messenger-module__wrap-animate___2lBHy messenger-module__wrap___3Do3D","slidein":"messenger-module__slidein___2enXv","wrap-animate-end":"messenger-module__wrap-animate-end___3Yb2- messenger-module__wrap___3Do3D","slideout":"messenger-module__slideout___36giN","content":"messenger-module__content___3g78K index-module__ellipsis___12s4Q","icon":"messenger-module__icon___1xX6e","content-info":"messenger-module__content-info___20K9u messenger-module__content___3g78K index-module__ellipsis___12s4Q","content-success":"messenger-module__content-success___1Lkq6 messenger-module__content___3g78K index-module__ellipsis___12s4Q","content-warning":"messenger-module__content-warning___Ki_e- messenger-module__content___3g78K index-module__ellipsis___12s4Q","content-error":"messenger-module__content-error___1bjo4 messenger-module__content___3g78K index-module__ellipsis___12s4Q","icon-info":"messenger-module__icon-info___2SKo_ messenger-module__icon___1xX6e","icon-success":"messenger-module__icon-success___2lqtY messenger-module__icon___1xX6e","icon-warning":"messenger-module__icon-warning___2J_hR messenger-module__icon___1xX6e","icon-error":"messenger-module__icon-error___1vces messenger-module__icon___1xX6e"};

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.messengerStatic = undefined;

	var _messengerStatic = __webpack_require__(68);

	var _messengerStatic2 = _interopRequireDefault(_messengerStatic);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.messengerStatic = _messengerStatic2.default;

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var _ref$content = _ref.content;
	  var content = _ref$content === undefined ? '' : _ref$content;
	  var type = _ref.type;
	  var duration = _ref.duration;

	  var wrap = document.createElement('div');
	  document.body.appendChild(wrap);

	  var p = new Promise(function (resolve) {
	    (0, _reactDom.render)(_react2.default.createElement(
	      _messenger2.default,
	      { type: type, onClose: resolve, duration: duration },
	      content
	    ), wrap);
	  });

	  p.then(function () {
	    (0, _reactDom.unmountComponentAtNode)(wrap);
	    document.body.removeChild(wrap);
	  }, function () {
	    (0, _reactDom.unmountComponentAtNode)(wrap);
	    document.body.removeChild(wrap);
	  });

	  return p;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _messenger = __webpack_require__(69);

	var _messenger2 = _interopRequireDefault(_messenger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },

/***/ 69:
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

	var _messengerModule = __webpack_require__(47);

	var _messengerModule2 = _interopRequireDefault(_messengerModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Messenger = function (_Component) {
	  _inherits(Messenger, _Component);

	  function Messenger(props) {
	    _classCallCheck(this, Messenger);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Messenger).call(this, props));

	    _this.state = {
	      animate: true
	    };
	    return _this;
	  }

	  _createClass(Messenger, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      setTimeout(function () {
	        _this2.setState({
	          animate: false
	        });

	        if (_this2.props.onClose) {
	          setTimeout(_this2.props.onClose, 100);
	        }
	      }, this.props.duration);
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      if (this.props.type === 'info') {
	        return _react2.default.createElement(_icon.Icon, { type: 'notice', styleName: 'icon-info' });
	      } else if (this.props.type === 'success') {
	        return _react2.default.createElement(_icon.Icon, { type: 'success', styleName: 'icon-success' });
	      } else if (this.props.type === 'warning') {
	        return _react2.default.createElement(_icon.Icon, { type: 'warning', styleName: 'icon-warning' });
	      } else if (this.props.type === 'error') {
	        return _react2.default.createElement(_icon.Icon, { type: 'error', styleName: 'icon-error' });
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var type = this.props.type;
	      var styleName = void 0;
	      if (type === 'info') {
	        styleName = 'content-info';
	      } else if (type === 'success') {
	        styleName = 'content-success';
	      } else if (type === 'warning') {
	        styleName = 'content-warning';
	      } else if (type === 'error') {
	        styleName = 'content-error';
	      } else {
	        styleName = 'content';
	      }

	      return _react2.default.createElement(
	        'div',
	        { styleName: this.state.animate ? 'wrap-animate' : 'wrap-animate-end' },
	        _react2.default.createElement(
	          'div',
	          { styleName: styleName },
	          this.renderIcon(),
	          this.props.children
	        )
	      );
	    }
	  }]);

	  return Messenger;
	}(_react.Component);

	Messenger.defaultProps = {
	  duration: 3 * 1000
	};

	exports.default = (0, _reactCssModules2.default)(Messenger, _messengerModule2.default);

/***/ }

/******/ });