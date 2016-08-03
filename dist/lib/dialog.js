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

	module.exports = __webpack_require__(66);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-css-modules");

/***/ },
/* 3 */
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
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@alife/alpha-icon/icon.css");

/***/ },
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
/* 10 */
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

	var _anchor = __webpack_require__(17);

	var _buttonModule = __webpack_require__(24);

	var _buttonModule2 = _interopRequireDefault(_buttonModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = function (_Component) {
	  _inherits(Button, _Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
	  }

	  _createClass(Button, [{
	    key: 'resolveStyleName',
	    value: function resolveStyleName() {
	      var list = [];
	      if (this.props.primary) {
	        list.push('primary');
	      } else {
	        list.push('normal');
	      }

	      if (this.props.large) {
	        list.push('large');
	      } else if (this.props.small) {
	        list.push('small');
	      } else {
	        list.push('medium');
	      }

	      return 'button ' + list.join(' ');
	    }
	  }, {
	    key: 'renderTagButton',
	    value: function renderTagButton(props) {
	      return _react2.default.createElement(
	        'button',
	        props,
	        props.children
	      );
	    }
	  }, {
	    key: 'renderTagAnchor',
	    value: function renderTagAnchor(props) {
	      var props2 = props;
	      if (props.onClick && !props.disabled) {
	        props2 = _extends({}, props, {
	          onClick: undefined
	        });
	      }
	      return _react2.default.createElement(_anchor.Anchor, props2);
	    }
	  }, {
	    key: 'renderTagInput',
	    value: function renderTagInput(props) {
	      var props2 = _extends({}, props, {
	        children: undefined
	      });
	      return _react2.default.createElement('input', _extends({ type: 'button', value: props.children }, props2));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = _extends({}, this.props, {
	        styleName: this.resolveStyleName()
	      });
	      if (this.props.tagType === 'input') {
	        return this.renderTagInput(props);
	      } else if (this.props.tagType === 'a') {
	        return this.renderTagAnchor(props);
	      }
	      return this.renderTagButton(props);
	    }
	  }]);

	  return Button;
	}(_react.Component);

	Button.defaultProps = {
	  primary: false,
	  normal: false, // default
	  large: false,
	  medium: false, // default
	  small: false,
	  disabled: false,
	  tagType: 'button' };

	exports.default = (0, _reactCssModules2.default)(Button, _buttonModule2.default, { allowMultiple: true });

/***/ },
/* 11 */
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

	var _contentModule = __webpack_require__(46);

	var _contentModule2 = _interopRequireDefault(_contentModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Content = function (_Component) {
	  _inherits(Content, _Component);

	  function Content(props) {
	    _classCallCheck(this, Content);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Content).call(this, props));

	    _this.state = {
	      scrollControl: false,
	      oldPr: null,
	      oldOverflow: null
	    };

	    _this.handleEscapePress = _this.handleEscapePress.bind(_this);
	    return _this;
	  }

	  _createClass(Content, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onEscapePress) {
	        window.addEventListener('keyup', this.handleEscapePress);
	      }

	      // overflow
	      var oldOverflow = document.body.style.overflow;
	      document.body.style.overflow = 'hidden';
	      this.state.oldOverflow = oldOverflow;

	      // scrollbar width fix
	      var sw = window.innerWidth - document.body.clientWidth;
	      if (sw > 0) {
	        this.state.scrollControl = true;

	        var oldPr = document.body.style.paddingRight;
	        document.body.style.paddingRight = sw + (parseFloat(oldPr) || 0) + 'px';
	        this.state.oldPr = oldPr;
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.onEscapePress) {
	        window.removeEventListener('keyup', this.handleEscapePress);
	      }

	      // overflow
	      document.body.style.overflow = this.state.oldOverflow;

	      // scrollbar width fix
	      if (this.state.scrollControl) {
	        document.body.style.paddingRight = this.state.oldPr;
	      }
	    }
	  }, {
	    key: 'handleEscapePress',
	    value: function handleEscapePress(e) {
	      if (e.key === 'Escape') {
	        this.props.onEscapePress(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'mask' },
	        _react2.default.createElement(
	          'div',
	          { styleName: 'content-wrap' },
	          _react2.default.createElement(
	            'div',
	            _extends({}, this.props, { styleName: 'content' }),
	            this.props.children
	          )
	        )
	      );
	    }
	  }]);

	  return Content;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(Content, _contentModule2.default);

/***/ },
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

/***/ },
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Anchor = undefined;

	var _anchor = __webpack_require__(20);

	var _anchor2 = _interopRequireDefault(_anchor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Anchor = _anchor2.default;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ButtonGroup = exports.SplitButton = exports.Button = undefined;

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _split = __webpack_require__(30);

	var _split2 = _interopRequireDefault(_split);

	var _group = __webpack_require__(29);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Button = _button2.default;
	exports.SplitButton = _split2.default;
	exports.ButtonGroup = _group2.default;

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Anchor = function (_Component) {
	  _inherits(Anchor, _Component);

	  function Anchor() {
	    _classCallCheck(this, Anchor);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Anchor).apply(this, arguments));
	  }

	  _createClass(Anchor, [{
	    key: 'render',
	    value: function render() {
	      if (this.props.href) {
	        return _react2.default.createElement('a', this.props);
	      }
	      return _react2.default.createElement('span', this.props);
	    }
	  }]);

	  return Anchor;
	}(_react.Component);

	Anchor.defaultProps = {
	  target: '_blank'
	};

	exports.default = Anchor;

/***/ },
/* 21 */
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

	var _closerModule = __webpack_require__(44);

	var _closerModule2 = _interopRequireDefault(_closerModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Closer = function (_Component) {
	  _inherits(Closer, _Component);

	  function Closer() {
	    _classCallCheck(this, Closer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Closer).apply(this, arguments));
	  }

	  _createClass(Closer, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_icon.Icon, _extends({ type: 'cross' }, this.props, { styleName: 'closer' }));
	    }
	  }]);

	  return Closer;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(Closer, _closerModule2.default);

/***/ },
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"button":"button-module__button___3MTAs","large":"button-module__large___LYwJH","medium":"button-module__medium___jE1fx","small":"button-module__small___2BTgO","primary":"button-module__primary___3uJ5o","normal":"button-module__normal___2qOvA"};

/***/ },
/* 25 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"group-module__wrap___2HyFy","item":"group-module__item___246vP","button-child":"group-module__button-child___zzI9H","button-child-first":"group-module__button-child-first___2Omgb","button-child-last":"group-module__button-child-last___2Vqo3"};

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"split-module__wrap___Goe1p","main":"split-module__main___UGk3W","toggle":"split-module__toggle___3Pg7k","toggle-icon":"split-module__toggle-icon___16jFC","menu":"split-module__menu___2sU_R","menu-closed":"split-module__menu-closed___zEKgB split-module__menu___2sU_R","menu-opened":"split-module__menu-opened___b6pQ0 split-module__menu___2sU_R"};

/***/ },
/* 27 */,
/* 28 */,
/* 29 */
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

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _groupModule = __webpack_require__(25);

	var _groupModule2 = _interopRequireDefault(_groupModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Group = function (_Component) {
	  _inherits(Group, _Component);

	  function Group() {
	    _classCallCheck(this, Group);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Group).apply(this, arguments));
	  }

	  _createClass(Group, [{
	    key: 'resolveHeadTail',
	    value: function resolveHeadTail(first, last) {
	      var name = 'button-child';
	      if (first) {
	        name = 'button-child-first';
	      } else if (last) {
	        name = 'button-child-last';
	      }
	      return name;
	    }
	  }, {
	    key: 'renderGrandSon',
	    value: function renderGrandSon(son, first, last) {
	      var result = [];
	      var kids = son.props.children;
	      var max = kids.length;

	      for (var i = 0; i < max; i++) {
	        var kid = kids[i];

	        var props = _extends({}, kid.props);
	        if (kid.type === _button2.default) {
	          props.styleName = this.resolveHeadTail(first, last);
	        }

	        result.push(_react2.default.createElement(kid.type, props));
	      }

	      return result;
	    }
	  }, {
	    key: 'renderSon',
	    value: function renderSon() {
	      var kids = this.props.children;
	      var max = kids.length;

	      var result = [];
	      for (var i = 0; i < max; i++) {
	        var kid = kids[i];

	        var props = _extends({}, kid.props);
	        if (kid.type === _button2.default) {
	          var name = this.resolveHeadTail(i === 0, i === max - 1);
	          props.styleName = 'item ' + name;
	        } else {
	          props.styleName = 'item';
	          props.children = this.renderGrandSon(kid, i === 0, i === max - 1);
	        }

	        result.push(_react2.default.createElement(kid.type, _extends({}, props, { key: i })));
	      }

	      return result;
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      return this.props.children.map(function (child, index) {
	        var props = _extends({}, child.props, {
	          key: index
	        });

	        if (child.type === _button2.default) {
	          props.styleName = 'item button-child';
	        } else {
	          var children = child.props.children.map(function (child2) {
	            if (child2.type === _button2.default) {
	              var child2Props = _extends({}, child2.props);
	              child2Props.styleName = 'item button-child';
	              return _react2.default.createElement(child2.type, child2Props);
	            }
	            return child2;
	          });
	          props.styleName = 'item';
	          props.children = children;
	        }

	        return _react2.default.createElement(child.type, props);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'span',
	        _extends({}, this.props, { styleName: 'wrap' }),
	        this.renderSon()
	      );
	    }
	  }]);

	  return Group;
	}(_react.Component);

	Group.defaultProps = {};

	exports.default = (0, _reactCssModules2.default)(Group, _groupModule2.default, { allowMultiple: true });

/***/ },
/* 30 */
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

	var _button = __webpack_require__(10);

	var _button2 = _interopRequireDefault(_button);

	var _menu = __webpack_require__(9);

	var _icon = __webpack_require__(3);

	var _splitModule = __webpack_require__(26);

	var _splitModule2 = _interopRequireDefault(_splitModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Split = function (_Component) {
	  _inherits(Split, _Component);

	  function Split(props) {
	    _classCallCheck(this, Split);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Split).call(this, props));

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

	  _createClass(Split, [{
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
	      }, 350);
	    }
	  }, {
	    key: 'renderInner',
	    value: function renderInner() {
	      var inner = this.props.children.filter(function (child) {
	        return child.type !== _menu.Menu;
	      });
	      if (!inner.length) {
	        return null;
	      }

	      var props = _extends({}, this.props, {
	        children: undefined,
	        styles: undefined
	      });

	      return _react2.default.createElement(
	        _button2.default,
	        _extends({}, props, { styleName: 'main' }),
	        inner
	      );
	    }
	  }, {
	    key: 'renderToggle',
	    value: function renderToggle() {
	      var _this4 = this;

	      var props = {
	        primary: this.props.primary,
	        normal: this.props.normal,
	        large: this.props.large,
	        medium: this.props.medium,
	        small: this.props.small,
	        disabled: this.props.disabled
	      };

	      if (this.props.triggerType === 'click') {
	        props.onClick = function (e) {
	          _this4.handleToggle(e);
	          if (_this4.props.onToggleClick) {
	            _this4.props.onToggleClick(e);
	          }
	        };
	      }

	      return _react2.default.createElement(
	        _button2.default,
	        _extends({}, props, { styleName: 'toggle' }),
	        _react2.default.createElement(_icon.Icon, { type: 'arrow-down', styleName: 'toggle-icon' })
	      );
	    }
	  }, {
	    key: 'renderMenu',
	    value: function renderMenu() {
	      var menu = this.props.children.filter(function (child) {
	        return child.type === _menu.Menu;
	      }).shift();
	      if (!menu) {
	        return null;
	      }

	      var styleName = this.state.opened ? 'menu-opened' : 'menu-closed';
	      return _react2.default.createElement(
	        _menu.Menu,
	        _extends({}, menu.props, { styleName: styleName }),
	        menu.props.children
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = {};
	      if (this.props.triggerType === 'hover') {
	        props.onMouseEnter = this.handleOpen;
	        props.onMouseLeave = this.handleClose;
	      }

	      return _react2.default.createElement(
	        'span',
	        _extends({}, props, { styleName: 'wrap' }),
	        this.renderInner(),
	        this.renderToggle(),
	        this.renderMenu()
	      );
	    }
	  }]);

	  return Split;
	}(_react.Component);

	Split.defaultProps = {
	  triggerType: 'click'
	};

	exports.default = (0, _reactCssModules2.default)(Split, _splitModule2.default);

/***/ },
/* 31 */,
/* 32 */
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

	var _button = __webpack_require__(18);

	var _icon = __webpack_require__(3);

	var _content = __webpack_require__(11);

	var _content2 = _interopRequireDefault(_content);

	var _closer = __webpack_require__(21);

	var _closer2 = _interopRequireDefault(_closer);

	var _alertModule = __webpack_require__(43);

	var _alertModule2 = _interopRequireDefault(_alertModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Alert = function (_Component) {
	  _inherits(Alert, _Component);

	  function Alert(props) {
	    _classCallCheck(this, Alert);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Alert).call(this, props));

	    _this.handleConfirm = _this.handleConfirm.bind(_this);
	    _this.handleCancel = _this.handleCancel.bind(_this);
	    return _this;
	  }

	  _createClass(Alert, [{
	    key: 'handleConfirm',
	    value: function handleConfirm() {
	      if (this.props.onConfirm) {
	        this.props.onConfirm();
	      }
	      if (this.props.onClose) {
	        this.props.onClose(true);
	      }
	    }
	  }, {
	    key: 'handleCancel',
	    value: function handleCancel() {
	      if (this.props.onCancel) {
	        this.props.onCancel();
	      }
	      if (this.props.onClose) {
	        this.props.onClose(false);
	      }
	    }
	  }, {
	    key: 'renderIcon',
	    value: function renderIcon() {
	      if (this.props.type === 'info') {
	        return _react2.default.createElement(_icon.Icon, { type: 'notice', styleName: 'alert-icon-info' });
	      } else if (this.props.type === 'success') {
	        return _react2.default.createElement(_icon.Icon, { type: 'success', styleName: 'alert-icon-success' });
	      } else if (this.props.type === 'warning') {
	        return _react2.default.createElement(_icon.Icon, { type: 'warning', styleName: 'alert-icon-warning' });
	      } else if (this.props.type === 'error') {
	        return _react2.default.createElement(_icon.Icon, { type: 'error', styleName: 'alert-icon-error' });
	      }

	      return null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = _extends({}, this.props, {
	        title: null,
	        styles: null,
	        children: null,
	        onConfirm: null,
	        onCancel: null,
	        onClose: null
	      });
	      return _react2.default.createElement(
	        _content2.default,
	        _extends({}, props, { styleName: 'alert', onEscapePress: this.handleCancel }),
	        _react2.default.createElement(_closer2.default, { onClick: this.handleCancel }),
	        this.renderIcon(),
	        this.props.title ? _react2.default.createElement(
	          'div',
	          { styleName: 'alert-title' },
	          this.props.title
	        ) : null,
	        this.props.children ? _react2.default.createElement(
	          'div',
	          { styleName: 'alert-content' },
	          this.props.children
	        ) : null,
	        _react2.default.createElement(
	          'div',
	          { styleName: 'alert-actions' },
	          _react2.default.createElement(
	            _button.Button,
	            { primary: true, styleName: 'alert-btn', onClick: this.handleConfirm },
	            this.props.confirmText
	          )
	        )
	      );
	    }
	  }]);

	  return Alert;
	}(_react.Component);

	Alert.defaultProps = {
	  confirmText: 'Ok',
	  type: 'info'
	};

	exports.default = (0, _reactCssModules2.default)(Alert, _alertModule2.default);

/***/ },
/* 33 */
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

	var _button = __webpack_require__(18);

	var _icon = __webpack_require__(3);

	var _content = __webpack_require__(11);

	var _content2 = _interopRequireDefault(_content);

	var _closer = __webpack_require__(21);

	var _closer2 = _interopRequireDefault(_closer);

	var _confirmModule = __webpack_require__(45);

	var _confirmModule2 = _interopRequireDefault(_confirmModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Confirm = function (_Component) {
	  _inherits(Confirm, _Component);

	  function Confirm(props) {
	    _classCallCheck(this, Confirm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Confirm).call(this, props));

	    _this.handleConfirm = _this.handleConfirm.bind(_this);
	    _this.handleCancel = _this.handleCancel.bind(_this);
	    return _this;
	  }

	  _createClass(Confirm, [{
	    key: 'handleConfirm',
	    value: function handleConfirm() {
	      if (this.props.onConfirm) {
	        this.props.onConfirm();
	      }
	      if (this.props.onClose) {
	        this.props.onClose(true);
	      }
	    }
	  }, {
	    key: 'handleCancel',
	    value: function handleCancel() {
	      if (this.props.onCancel) {
	        this.props.onCancel();
	      }
	      if (this.props.onClose) {
	        this.props.onClose(false);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = _extends({}, this.props, {
	        title: null,
	        styles: null,
	        children: null,
	        onConfirm: null,
	        onCancel: null,
	        onClose: null
	      });
	      return _react2.default.createElement(
	        _content2.default,
	        _extends({}, props, { styleName: 'confirm', onEscapePress: this.handleCancel }),
	        _react2.default.createElement(_closer2.default, { onClick: this.handleCancel }),
	        _react2.default.createElement(_icon.Icon, { type: 'help', styleName: 'confirm-icon' }),
	        this.props.title ? _react2.default.createElement(
	          'div',
	          { styleName: 'confirm-title' },
	          this.props.title
	        ) : null,
	        this.props.children ? _react2.default.createElement(
	          'div',
	          { styleName: 'confirm-content' },
	          this.props.children
	        ) : null,
	        _react2.default.createElement(
	          'div',
	          { styleName: 'confirm-actions' },
	          _react2.default.createElement(
	            _button.Button,
	            { primary: true, styleName: 'confirm-btn', onClick: this.handleConfirm },
	            this.props.confirmText
	          ),
	          _react2.default.createElement(
	            _button.Button,
	            { styleName: 'confirm-btn', onClick: this.handleCancel },
	            this.props.cancelText
	          )
	        )
	      );
	    }
	  }]);

	  return Confirm;
	}(_react.Component);

	Confirm.defaultProps = {
	  confirmText: 'Ok',
	  cancelText: 'Cancel'
	};

	exports.default = (0, _reactCssModules2.default)(Confirm, _confirmModule2.default);

/***/ },
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"alert":"alert-module__alert___10uWm","alert-icon":"alert-module__alert-icon___1yM9p","alert-title":"alert-module__alert-title___3Ei3Y","alert-content":"alert-module__alert-content___3p1vI","alert-actions":"alert-module__alert-actions___3fz10","alert-btn":"alert-module__alert-btn___2wrrq","alert-icon-info":"alert-module__alert-icon-info___1QZww alert-module__alert-icon___1yM9p","alert-icon-success":"alert-module__alert-icon-success___3iskX alert-module__alert-icon___1yM9p","alert-icon-warning":"alert-module__alert-icon-warning___1JOou alert-module__alert-icon___1yM9p","alert-icon-error":"alert-module__alert-icon-error___2I8I9 alert-module__alert-icon___1yM9p"};

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"closer":"closer-module__closer___2CXPF"};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"confirm":"confirm-module__confirm___1q966","confirm-icon":"confirm-module__confirm-icon___yLWcj","confirm-title":"confirm-module__confirm-title___1l5zN","confirm-content":"confirm-module__confirm-content___1LUWs","confirm-actions":"confirm-module__confirm-actions___2EsLp","confirm-btn":"confirm-module__confirm-btn___3usTo"};

/***/ },
/* 46 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"mask":"content-module__mask___5u18N","content-wrap":"content-module__content-wrap___2UPmH","content":"content-module__content___3yjww"};

/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var title = _ref.title;
	  var content = _ref.content;
	  var _ref$type = _ref.type;
	  var type = _ref$type === undefined ? 'info' : _ref$type;

	  var wrap = document.createElement('div');
	  document.body.appendChild(wrap);

	  var p = new Promise(function (resolve) {
	    (0, _reactDom.render)(_react2.default.createElement(
	      _alert2.default,
	      { onClose: resolve, title: title, type: type },
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

	var _alert = __webpack_require__(32);

	var _alert2 = _interopRequireDefault(_alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (_ref) {
	  var title = _ref.title;
	  var content = _ref.content;

	  var wrap = document.createElement('div');
	  document.body.appendChild(wrap);

	  var p = new Promise(function (resolve) {
	    (0, _reactDom.render)(_react2.default.createElement(
	      _confirm2.default,
	      { onClose: resolve, title: title },
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

	var _confirm = __webpack_require__(33);

	var _confirm2 = _interopRequireDefault(_confirm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (func, props) {
	  var wrap = document.createElement('div');
	  document.body.appendChild(wrap);

	  var p = new Promise(function (resolve, reject) {
	    var element = func(resolve, reject);
	    (0, _reactDom.render)(_react2.default.createElement(
	      _content2.default,
	      props,
	      element
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

	var _content = __webpack_require__(11);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _content = __webpack_require__(11);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Dialog = function (_Component) {
	  _inherits(Dialog, _Component);

	  function Dialog() {
	    _classCallCheck(this, Dialog);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Dialog).apply(this, arguments));
	  }

	  _createClass(Dialog, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.open) {
	        this.renderContent(this.props);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (this.props.open || newProps.open) {
	        this.renderContent(_extends({}, this.props, newProps));
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.wrap) {
	        (0, _reactDom.unmountComponentAtNode)(this.wrap);
	        document.body.removeChild(this.wrap);
	      }
	    }
	  }, {
	    key: 'renderContent',
	    value: function renderContent(props) {
	      if (!this.wrap) {
	        this.wrap = document.createElement('div');
	        document.body.appendChild(this.wrap);
	      }

	      (0, _reactDom.render)(props.open ? _react2.default.createElement(_content2.default, props) : _react2.default.createElement('noscript', null), this.wrap);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);

	  return Dialog;
	}(_react.Component);

	Dialog.defaultProps = {
	  open: false
	};

	exports.default = Dialog;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Closer = exports.alertStatic = exports.Alert = exports.confirmStatic = exports.Confirm = exports.dialogStatic = exports.DialogContent = exports.Dialog = undefined;

	var _dialog = __webpack_require__(65);

	var _dialog2 = _interopRequireDefault(_dialog);

	var _content = __webpack_require__(11);

	var _content2 = _interopRequireDefault(_content);

	var _dialogStatic = __webpack_require__(64);

	var _dialogStatic2 = _interopRequireDefault(_dialogStatic);

	var _confirm = __webpack_require__(33);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _confirmStatic = __webpack_require__(63);

	var _confirmStatic2 = _interopRequireDefault(_confirmStatic);

	var _alert = __webpack_require__(32);

	var _alert2 = _interopRequireDefault(_alert);

	var _alertStatic = __webpack_require__(62);

	var _alertStatic2 = _interopRequireDefault(_alertStatic);

	var _closer = __webpack_require__(21);

	var _closer2 = _interopRequireDefault(_closer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Dialog = _dialog2.default;
	exports.DialogContent = _content2.default;
	exports.dialogStatic = _dialogStatic2.default;
	exports.Confirm = _confirm2.default;
	exports.confirmStatic = _confirmStatic2.default;
	exports.Alert = _alert2.default;
	exports.alertStatic = _alertStatic2.default;
	exports.Closer = _closer2.default;

/***/ }
/******/ ]);