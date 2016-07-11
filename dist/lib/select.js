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

	module.exports = __webpack_require__(75);


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

/***/ 7:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"menu":"menu-module__menu___36uCb","item":"menu-module__item___2B3fw index-module__ellipsis___12s4Q","item-disabled":"menu-module__item-disabled___jHP6L menu-module__item___2B3fw index-module__ellipsis___12s4Q"};

/***/ },

/***/ 8:
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

/***/ 9:
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

/***/ 12:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"dropdown-module__wrap___34nrT","menu":"dropdown-module__menu___wnQDO","menu-closed":"dropdown-module__menu-closed___1MnQM dropdown-module__menu___wnQDO","menu-opened":"dropdown-module__menu-opened___3OR2U dropdown-module__menu___wnQDO"};

/***/ },

/***/ 13:
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

/***/ 14:
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

/***/ },

/***/ 54:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 55:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"select-module__wrap___FuiD5","field":"select-module__field___2pZoX","field-inner":"select-module__field-inner___161YQ","label-single":"select-module__label-single___3nBAJ index-module__ellipsis___12s4Q","label-placeholder":"select-module__label-placeholder___2KK24 select-module__label-single___3nBAJ index-module__ellipsis___12s4Q","label-list":"select-module__label-list___3g6Cc","label-item":"select-module__label-item___3p69e","label-item-remover":"select-module__label-item-remover___3FUve","toggle":"select-module__toggle___3Uo88","toggle-icon":"select-module__toggle-icon___1alw9","clear":"select-module__clear___3dOKQ","menu":"select-module__menu___1rMKv","menu-closed":"select-module__menu-closed___32gp7 select-module__menu___1rMKv","menu-opened":"select-module__menu-opened___3f7bB select-module__menu___1rMKv"};

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Option = exports.Select = undefined;

	var _select = __webpack_require__(77);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(76);

	var _option2 = _interopRequireDefault(_option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Select = _select2.default;
	exports.Option = _option2.default;

/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactCssModules = __webpack_require__(2);

	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

	var _menu = __webpack_require__(9);

	var _optionModule = __webpack_require__(54);

	var _optionModule2 = _interopRequireDefault(_optionModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Option = function (_MenuItem) {
	  _inherits(Option, _MenuItem);

	  function Option() {
	    _classCallCheck(this, Option);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Option).apply(this, arguments));
	  }

	  return Option;
	}(_menu.MenuItem);

	Option.defaultProps = {};

	exports.default = (0, _reactCssModules2.default)(Option, _optionModule2.default);

/***/ },

/***/ 77:
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

	var _icon = __webpack_require__(3);

	var _menu = __webpack_require__(9);

	var _selectModule = __webpack_require__(55);

	var _selectModule2 = _interopRequireDefault(_selectModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = function (_Component) {
	  _inherits(Select, _Component);

	  function Select(props) {
	    _classCallCheck(this, Select);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

	    _this.state = {
	      opened: false
	    };

	    _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
	    _this.handleToggle = _this.handleToggle.bind(_this);
	    _this.handleClearClick = _this.handleClearClick.bind(_this);
	    _this.handleOptionItemClick = _this.handleOptionItemClick.bind(_this);
	    _this.handleLabelRemoverClick = _this.handleLabelRemoverClick.bind(_this);
	    return _this;
	  }

	  _createClass(Select, [{
	    key: 'isDisabledMenuItem',
	    value: function isDisabledMenuItem(value) {
	      if (!this.props.multiple) {
	        return value === this.props.value;
	      }
	      if (this.props.value === null) {
	        return false;
	      }
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.props.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var val = _step.value;

	          if (value === val) {
	            return true;
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

	      return false;
	    }
	  }, {
	    key: 'resolveOptions',
	    value: function resolveOptions() {
	      var _this2 = this;

	      if (this.props.options) {
	        return this.props.options.map(function (item) {
	          var value = item[_this2.props.valueKey];
	          var label = item[_this2.props.lebelKey];
	          var disabled = _this2.isDisabledMenuItem(value);
	          return {
	            value: value,
	            key: value,
	            label: label,
	            children: item[_this2.props.optionKey] || label,
	            disabled: disabled,
	            onClick: function onClick(e) {
	              if (!disabled) {
	                _this2.handleOptionItemClick(value);
	              } else {
	                e.stopPropagation();
	              }
	            }
	          };
	        });
	      }
	      if (this.props.children) {
	        return this.props.children.map(function (item) {
	          var value = item.props.value;
	          var disabled = _this2.isDisabledMenuItem(value);
	          return _extends({}, item.props, {
	            key: value,
	            label: item.props.label || item.props.children,
	            disabled: disabled,
	            onClick: function onClick(e) {
	              if (!disabled) {
	                _this2.handleOptionItemClick(value);
	              } else {
	                e.stopPropagation();
	              }
	            }
	          });
	        });
	      }
	      return [];
	    }
	  }, {
	    key: 'resolveLabel',
	    value: function resolveLabel(value, options) {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var option = _step2.value;

	          if (value === option.value) {
	            return option.label;
	          }
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }

	      return null;
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
	    key: 'handleToggle',
	    value: function handleToggle() {
	      var _this3 = this;

	      var value = !this.state.opened;
	      this.setState({
	        opened: value
	      });
	      if (value) {
	        setTimeout(function () {
	          window.addEventListener('click', _this3.handleGlobalClick);
	        }, 0);
	      }
	    }
	  }, {
	    key: 'handleClearClick',
	    value: function handleClearClick() {
	      if (!this.props.onChange) {
	        return;
	      }
	      this.props.onChange(this.props.multiple ? [] : '');
	    }
	  }, {
	    key: 'handleOptionItemClick',
	    value: function handleOptionItemClick(value) {
	      if (!this.props.onChange) {
	        return;
	      }

	      if (this.props.multiple) {
	        this.props.onChange(Array.isArray(this.props.value) ? [].concat(_toConsumableArray(this.props.value), [value]) : [value]);
	      } else {
	        this.props.onChange(value);
	      }
	    }
	  }, {
	    key: 'handleLabelRemoverClick',
	    value: function handleLabelRemoverClick(value) {
	      if (!this.props.onChange) {
	        return;
	      }
	      this.props.onChange(this.props.value.filter(function (val) {
	        return val !== value;
	      }));
	    }
	  }, {
	    key: 'renderOptions',
	    value: function renderOptions(options) {
	      return _react2.default.createElement(
	        _menu.Menu,
	        { styleName: this.state.opened ? 'menu-opened' : 'menu-closed' },
	        options.map(function (option) {
	          return _react2.default.createElement(_menu.MenuItem, _extends({}, option, { title: option.label }));
	        })
	      );
	    }
	  }, {
	    key: 'renderToggle',
	    value: function renderToggle() {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'toggle', onClick: this.handleToggle },
	        _react2.default.createElement(_icon.Icon, { type: this.state.opened ? 'arrow-up' : 'arrow-down', styleName: 'toggle-icon' })
	      );
	    }
	  }, {
	    key: 'renderClear',
	    value: function renderClear() {
	      if (this.props.showClear && (this.props.value == null || this.props.value === '' || this.props.value.length === 0)) {
	        return null;
	      }
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'clear', onClick: this.handleClearClick },
	        'x'
	      );
	    }
	  }, {
	    key: 'renderLabels',
	    value: function renderLabels(options) {
	      var _this4 = this;

	      if (this.props.placeholder && (this.props.value == null || this.props.value === '' || this.props.value.length === 0)) {
	        return _react2.default.createElement(
	          'div',
	          { styleName: 'label-placeholder', title: this.props.placeholder },
	          this.props.placeholder
	        );
	      }

	      if (!this.props.multiple) {
	        var label = this.resolveLabel(this.props.value, options);
	        return _react2.default.createElement(
	          'div',
	          { styleName: 'label-single', title: label },
	          label
	        );
	      }

	      return _react2.default.createElement(
	        'ul',
	        { styleName: 'label-list' },
	        this.props.value.map(function (value) {
	          var props = {
	            key: value,
	            onClick: function onClick(e) {
	              e.stopPropagation();
	            }
	          };
	          return _react2.default.createElement(
	            'li',
	            _extends({}, props, { styleName: 'label-item' }),
	            _this4.resolveLabel(value, options),
	            _react2.default.createElement(
	              'span',
	              {
	                styleName: 'label-item-remover',
	                onClick: function onClick() {
	                  _this4.handleLabelRemoverClick(value);
	                }
	              },
	              'x'
	            )
	          );
	        })
	      );
	    }
	  }, {
	    key: 'renderField',
	    value: function renderField(options) {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'field' },
	        _react2.default.createElement(
	          'div',
	          { styleName: 'field-inner', onClick: this.handleToggle },
	          this.renderLabels(options)
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var options = this.resolveOptions();
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { styleName: 'wrap' }),
	        this.renderField(options),
	        this.renderClear(),
	        this.renderToggle(),
	        this.renderOptions(options)
	      );
	    }
	  }]);

	  return Select;
	}(_react.Component);

	Select.defaultProps = {
	  value: '',
	  multiple: false,
	  labelKey: 'label',
	  valueKey: 'value',
	  optionKey: 'option',
	  showClear: true
	};

	exports.default = (0, _reactCssModules2.default)(Select, _selectModule2.default);

/***/ }

/******/ });