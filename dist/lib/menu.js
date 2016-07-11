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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"menu":"menu-module__menu___36uCb","item":"menu-module__item___2B3fw index-module__ellipsis___12s4Q","item-disabled":"menu-module__item-disabled___jHP6L menu-module__item___2B3fw index-module__ellipsis___12s4Q"};

/***/ },
/* 8 */
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

	var _menuModule = __webpack_require__(7);

	var _menuModule2 = _interopRequireDefault(_menuModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Menu = function (_Component) {
	  _inherits(Menu, _Component);

	  function Menu() {
	    _classCallCheck(this, Menu);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
	  }

	  _createClass(Menu, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'ul',
	        _extends({}, this.props, { styleName: 'menu' }),
	        this.props.children
	      );
	    }
	  }]);

	  return Menu;
	}(_react.Component);

	Menu.defaultProps = {};

	exports.default = (0, _reactCssModules2.default)(Menu, _menuModule2.default);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Dropdown = exports.MenuItem = exports.Menu = undefined;

	var _menu = __webpack_require__(8);

	var _menu2 = _interopRequireDefault(_menu);

	var _item = __webpack_require__(14);

	var _item2 = _interopRequireDefault(_item);

	var _dropdown = __webpack_require__(13);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Menu = _menu2.default;
	exports.MenuItem = _item2.default;
	exports.Dropdown = _dropdown2.default;

/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"dropdown-module__wrap___34nrT","menu":"dropdown-module__menu___wnQDO","menu-closed":"dropdown-module__menu-closed___1MnQM dropdown-module__menu___wnQDO","menu-opened":"dropdown-module__menu-opened___3OR2U dropdown-module__menu___wnQDO"};

/***/ },
/* 13 */
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

	var _menu = __webpack_require__(8);

	var _menu2 = _interopRequireDefault(_menu);

	var _dropdownModule = __webpack_require__(12);

	var _dropdownModule2 = _interopRequireDefault(_dropdownModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dropdown = function (_Component) {
	  _inherits(Dropdown, _Component);

	  function Dropdown(props) {
	    _classCallCheck(this, Dropdown);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dropdown).call(this, props));

	    _this.state = {
	      opened: false,
	      timerId: null
	    };
	    _this.handleOpen = _this.handleOpen.bind(_this);
	    _this.handleClose = _this.handleClose.bind(_this);
	    _this.handleToggle = _this.handleToggle.bind(_this);
	    _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
	    return _this;
	  }

	  _createClass(Dropdown, [{
	    key: 'handleToggle',
	    value: function handleToggle() {
	      var _this2 = this;

	      var value = !this.state.opened;
	      this.setState({
	        opened: value
	      });
	      if (value) {
	        setTimeout(function () {
	          window.addEventListener('click', _this2.handleGlobalClick);
	        }, 0);
	      }
	    }
	  }, {
	    key: 'handleGlobalClick',
	    value: function handleGlobalClick() {
	      window.removeEventListener('click', this.handleGlobalClick);
	      this.setState({
	        opened: false
	      });
	    }
	  }, {
	    key: 'handleOpen',
	    value: function handleOpen() {
	      clearTimeout(this.state.timerId);
	      this.setState({
	        opened: true
	      });
	    }
	  }, {
	    key: 'handleClose',
	    value: function handleClose() {
	      var _this3 = this;

	      clearTimeout(this.state.timerId);
	      this.state.timerId = setTimeout(function () {
	        _this3.setState({
	          opened: false
	        });
	      }, 250);
	    }
	  }, {
	    key: 'renderInner',
	    value: function renderInner() {
	      var inner = this.props.children.filter(function (child) {
	        return child.type !== _menu2.default;
	      });
	      if (!inner.length) {
	        return null;
	      }

	      return inner;
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      var menu = this.props.children.find(function (child) {
	        return child.type === _menu2.default;
	      });
	      if (!menu) {
	        return null;
	      }

	      return _react2.default.createElement(
	        _menu2.default,
	        _extends({}, menu.props, { styleName: this.state.opened ? 'menu-opened' : 'menu-closed' }),
	        menu.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = _extends({}, this.props);

	      if (this.props.triggerType === 'click') {
	        props.onClick = this.handleToggle;
	      }

	      if (this.props.triggerType === 'hover') {
	        props.onMouseEnter = this.handleOpen;
	        props.onMouseLeave = this.handleClose;
	      }

	      return _react2.default.createElement(
	        'span',
	        _extends({}, props, { styleName: 'wrap' }),
	        this.renderInner(),
	        this.renderMenu()
	      );
	    }
	  }]);

	  return Dropdown;
	}(_react.Component);

	Dropdown.defaultProps = {
	  triggerType: 'hover'
	};

	exports.default = (0, _reactCssModules2.default)(Dropdown, _dropdownModule2.default);

/***/ },
/* 14 */
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

	var _menuModule = __webpack_require__(7);

	var _menuModule2 = _interopRequireDefault(_menuModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MenuItem = function (_Component) {
	  _inherits(MenuItem, _Component);

	  function MenuItem() {
	    _classCallCheck(this, MenuItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).apply(this, arguments));
	  }

	  _createClass(MenuItem, [{
	    key: 'render',
	    value: function render() {
	      var props = _extends({}, this.props, {
	        styleName: this.props.disabled ? 'item-disabled' : 'item'
	      });
	      return _react2.default.createElement('li', props);
	    }
	  }]);

	  return MenuItem;
	}(_react.Component);

	MenuItem.defaultProps = {};

	exports.default = (0, _reactCssModules2.default)(MenuItem, _menuModule2.default);

/***/ }
/******/ ]);