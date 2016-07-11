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

	module.exports = __webpack_require__(82);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },

/***/ 16:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function connect() {
	  for (var _len = arguments.length, cbs = Array(_len), _key = 0; _key < _len; _key++) {
	    cbs[_key] = arguments[_key];
	  }

	  return function callback() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = cbs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var cb = _step.value;

	        if (cb) {
	          cb.apply(this, args);
	        }
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  };
	}

	function promiseThrottle(func) {
	  var gap = arguments.length <= 1 || arguments[1] === undefined ? 300 : arguments[1];

	  var canRun = true;
	  var lastArgs = void 0;
	  var lastResolve = void 0;
	  var lastReject = void 0;

	  function delay() {
	    setTimeout(function () {
	      if (canRun) {
	        func.apply(undefined, _toConsumableArray(lastArgs)).then(lastResolve, lastReject);
	      } else {
	        delay();
	      }
	    }, gap);
	  }

	  return function hof() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    var p = void 0;
	    if (canRun) {
	      canRun = false;
	      p = new Promise(function (resolve, reject) {
	        func.apply(undefined, args).then(resolve, reject);
	      });
	    } else {
	      p = new Promise(function (resolve, reject) {
	        lastArgs = args;
	        lastResolve = resolve;
	        lastReject = reject;
	      });
	      delay();
	    }

	    p.then(function () {
	      canRun = true;
	    }, function (e) {
	      canRun = true;
	      throw e;
	    });
	    return p;
	  };
	}

	exports.connect = connect;
	exports.promiseThrottle = promiseThrottle;

/***/ },

/***/ 58:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"content-module__wrap___3NfuE"};

/***/ },

/***/ 81:
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

	var _contentModule = __webpack_require__(58);

	var _contentModule2 = _interopRequireDefault(_contentModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Content = function (_Component) {
	  _inherits(Content, _Component);

	  function Content() {
	    _classCallCheck(this, Content);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
	  }

	  _createClass(Content, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { styleName: 'wrap' }),
	        this.props.children
	      );
	    }
	  }]);

	  return Content;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(Content, _contentModule2.default);

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Tip = undefined;

	var _tip = __webpack_require__(83);

	var _tip2 = _interopRequireDefault(_tip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Tip = _tip2.default;

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _util = __webpack_require__(16);

	var _content = __webpack_require__(81);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tip = function (_Component) {
	  _inherits(Tip, _Component);

	  function Tip(props) {
	    _classCallCheck(this, Tip);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tip).call(this, props));

	    _this.state = {
	      open: false
	    };

	    _this.handleMove = _this.handleMove.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    return _this;
	  }

	  _createClass(Tip, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.wrap) {
	        (0, _reactDom.unmountComponentAtNode)(this.wrap);
	        document.body.removeChild(this.wrap);
	      }
	    }
	  }, {
	    key: 'handleMove',
	    value: function handleMove(e) {
	      var pageY = e.pageY;
	      var pageX = e.pageX;

	      this.renderContent(true, pageY + 20, pageX);
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      this.renderContent(false);
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent(open, top, left) {
	      if (!this.wrap) {
	        this.wrap = document.createElement('div');
	        document.body.appendChild(this.wrap);
	      }
	      var style = {
	        display: open ? 'block' : 'none',
	        position: 'absolute',
	        top: top,
	        left: left
	      };
	      (0, _reactDom.render)(_react2.default.createElement(
	        'div',
	        { style: style },
	        _react2.default.createElement(
	          _content2.default,
	          this.props,
	          this.props.title
	        )
	      ), this.wrap);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var child = _react2.default.Children.only(this.props.children);
	      var childProps = child.props || {};
	      var newProps = {
	        onMouseMove: (0, _util.connect)(childProps.onMouseEnter, this.handleMove),
	        onMouseLeave: (0, _util.connect)(childProps.onMouseLeave, this.handleClose)
	      };
	      return (0, _react.cloneElement)(child, newProps);
	    }
	  }]);

	  return Tip;
	}(_react.Component);

	Tip.defaultProps = {};

	exports.default = Tip;

/***/ }

/******/ });