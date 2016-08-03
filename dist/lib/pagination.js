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

	module.exports = __webpack_require__(72);


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

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextField = undefined;

	var _textField = __webpack_require__(23);

	var _textField2 = _interopRequireDefault(_textField);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.TextField = _textField2.default;

/***/ },

/***/ 19:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"text-field":"text-field-module__text-field___1V0Jm","placeholder":"text-field-module__placeholder___NYic4"};

/***/ },

/***/ 23:
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

	var _textFieldModule = __webpack_require__(19);

	var _textFieldModule2 = _interopRequireDefault(_textFieldModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextField = function (_Component) {
	  _inherits(TextField, _Component);

	  function TextField() {
	    _classCallCheck(this, TextField);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextField).apply(this, arguments));
	  }

	  _createClass(TextField, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('input', _extends({}, this.props, { value: this.props.value || '', styleName: 'text-field' }));
	    }
	  }]);

	  return TextField;
	}(_react.Component);

	TextField.defaultProps = {};

	exports.default = (0, _reactCssModules2.default)(TextField, _textFieldModule2.default);

/***/ },

/***/ 34:
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

	var _textField = __webpack_require__(15);

	var _jumperModule = __webpack_require__(49);

	var _jumperModule2 = _interopRequireDefault(_jumperModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Jumper = function (_Component) {
	  _inherits(Jumper, _Component);

	  function Jumper(props) {
	    _classCallCheck(this, Jumper);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Jumper).call(this, props));

	    _this.state = {
	      value: ''
	    };

	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleGo = _this.handleGo.bind(_this);
	    return _this;
	  }

	  _createClass(Jumper, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({
	        value: e.target.value
	      });
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(e) {
	      if (e.key === 'Enter') {
	        this.handleGo();
	      }
	    }
	  }, {
	    key: 'handleGo',
	    value: function handleGo() {
	      var value = parseInt(this.state.value, 10);
	      if (value && value > 0 && value <= this.props.pageCount) {
	        this.props.onChange(value);
	      }
	      this.setState({
	        value: ''
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'wrap' },
	        _react2.default.createElement(
	          'span',
	          { styleName: 'title' },
	          'Go to Page'
	        ),
	        _react2.default.createElement(_textField.TextField, {
	          styleName: 'input',
	          type: 'text',
	          maxLength: '3',
	          value: this.state.value,
	          onChange: this.handleChange,
	          onKeyPress: this.handleKeyPress
	        }),
	        _react2.default.createElement(
	          'a',
	          {
	            styleName: 'go',
	            onClick: this.handleGo
	          },
	          'Go'
	        )
	      );
	    }
	  }]);

	  return Jumper;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(Jumper, _jumperModule2.default);

/***/ },

/***/ 35:
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

	var _listModule = __webpack_require__(50);

	var _listModule2 = _interopRequireDefault(_listModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_Component) {
	  _inherits(List, _Component);

	  function List() {
	    _classCallCheck(this, List);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	  }

	  _createClass(List, [{
	    key: 'renderItem',
	    value: function renderItem(type, key) {
	      var _this2 = this;

	      var content = arguments.length <= 2 || arguments[2] === undefined ? key : arguments[2];

	      var onClick = undefined;
	      if (type === 'link' && key === 'prev') {
	        onClick = function onClick() {
	          _this2.props.onChange(_this2.props.currentPage - 1);
	        };
	      } else if (type === 'link' && key === 'next') {
	        onClick = function onClick() {
	          _this2.props.onChange(_this2.props.currentPage + 1);
	        };
	      } else if (type === 'link') {
	        onClick = function onClick() {
	          _this2.props.onChange(key);
	        };
	      }

	      var props = {
	        styleName: type,
	        key: key,
	        onClick: onClick
	      };

	      return _react2.default.createElement(
	        'li',
	        props,
	        type === 'link' ? _react2.default.createElement(
	          'a',
	          { styleName: 'item-inner' },
	          content
	        ) : _react2.default.createElement(
	          'span',
	          { styleName: 'item-inner' },
	          content
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pageCount = this.props.pageCount;
	      var currentPage = this.props.currentPage;

	      var start = Math.max(currentPage - 2, 2);
	      var end = Math.min(currentPage + 2, pageCount);

	      var result = [];

	      // prev
	      result.push(this.renderItem(currentPage === 1 ? 'item' : 'link', 'prev', _react2.default.createElement(_icon.Icon, { type: 'arrow-left', styleName: 'arrow' })));
	      // first
	      result.push(this.renderItem(currentPage === 1 ? 'active' : 'link', 1));
	      // dot
	      if (start > 2) {
	        result.push(this.renderItem('item', 'prev-dot', '...'));
	      }
	      // list
	      for (var i = start; i <= end; i++) {
	        result.push(this.renderItem(currentPage === i ? 'active' : 'link', i));
	      }
	      // dot
	      if (end < pageCount - 1) {
	        result.push(this.renderItem('item', 'next-dot', '...'));
	      }
	      // last
	      if (end < pageCount) {
	        result.push(this.renderItem(currentPage === pageCount ? 'active' : 'link', pageCount));
	      }
	      // next
	      result.push(this.renderItem(currentPage === pageCount ? 'item' : 'link', 'next', _react2.default.createElement(
	        'span',
	        null,
	        'Next ',
	        _react2.default.createElement(_icon.Icon, { type: 'arrow-right', styleName: 'arrow' })
	      )));

	      return _react2.default.createElement(
	        'ul',
	        { styleName: 'list' },
	        result
	      );
	    }
	  }]);

	  return List;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(List, _listModule2.default);

/***/ },

/***/ 36:
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

	var _sizeSelectorModule = __webpack_require__(52);

	var _sizeSelectorModule2 = _interopRequireDefault(_sizeSelectorModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SizeSelector = function (_Component) {
	  _inherits(SizeSelector, _Component);

	  function SizeSelector() {
	    _classCallCheck(this, SizeSelector);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SizeSelector).apply(this, arguments));
	  }

	  _createClass(SizeSelector, [{
	    key: 'renderItems',
	    value: function renderItems() {
	      var _this2 = this;

	      return this.props.pageSizeList.map(function (item) {
	        var isActive = _this2.props.pageSize === item;
	        return _react2.default.createElement(
	          'dd',
	          { styleName: _this2.props.pageSize === item ? 'active' : 'item', key: item },
	          isActive ? _react2.default.createElement(
	            'span',
	            { styleName: 'item-inner' },
	            item
	          ) : _react2.default.createElement(
	            'a',
	            { styleName: 'item-inner', onClick: function onClick() {
	                _this2.props.onChange(item);
	              } },
	            item
	          )
	        );
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'dl',
	        { styleName: 'list' },
	        _react2.default.createElement(
	          'dt',
	          { styleName: 'title' },
	          'Show :'
	        ),
	        this.renderItems()
	      );
	    }
	  }]);

	  return SizeSelector;
	}(_react.Component);

	exports.default = (0, _reactCssModules2.default)(SizeSelector, _sizeSelectorModule2.default);

/***/ },

/***/ 49:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"jumper-module__wrap___1t21e","title":"jumper-module__title___Z2RyW","input":"jumper-module__input___2tc5A","go":"jumper-module__go___1Aqyh"};

/***/ },

/***/ 50:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"list-module__list___1_Eak","item":"list-module__item___1gWaU","active":"list-module__active___1tFIO list-module__item___1gWaU","arrow":"list-module__arrow___2W5_F","link":"list-module__link___18hLt list-module__item___1gWaU","item-inner":"list-module__item-inner___2tfQI"};

/***/ },

/***/ 51:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrap":"pagination-module__wrap___2sApy index-module__clearfix___2UdQr","size-selector":"pagination-module__size-selector___1VjN_","jumper":"pagination-module__jumper___vclGq","list":"pagination-module__list___3NckC"};

/***/ },

/***/ 52:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"size-selector-module__list___2wLJR","title":"size-selector-module__title___2p4Kn","item":"size-selector-module__item___2IOoV","item-inner":"size-selector-module__item-inner___3ZYIa","active":"size-selector-module__active___3cbja size-selector-module__item___2IOoV"};

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageSizeSelector = exports.PageJumper = exports.PageList = exports.Pagination = undefined;

	var _pagination = __webpack_require__(73);

	var _pagination2 = _interopRequireDefault(_pagination);

	var _list = __webpack_require__(35);

	var _list2 = _interopRequireDefault(_list);

	var _jumper = __webpack_require__(34);

	var _jumper2 = _interopRequireDefault(_jumper);

	var _sizeSelector = __webpack_require__(36);

	var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Pagination = _pagination2.default;
	exports.PageList = _list2.default;
	exports.PageJumper = _jumper2.default;
	exports.PageSizeSelector = _sizeSelector2.default;

/***/ },

/***/ 73:
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

	var _jumper = __webpack_require__(34);

	var _jumper2 = _interopRequireDefault(_jumper);

	var _list = __webpack_require__(35);

	var _list2 = _interopRequireDefault(_list);

	var _sizeSelector = __webpack_require__(36);

	var _sizeSelector2 = _interopRequireDefault(_sizeSelector);

	var _paginationModule = __webpack_require__(51);

	var _paginationModule2 = _interopRequireDefault(_paginationModule);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Pagination = function (_Component) {
	  _inherits(Pagination, _Component);

	  function Pagination() {
	    _classCallCheck(this, Pagination);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).apply(this, arguments));
	  }

	  _createClass(Pagination, [{
	    key: 'renderSizeSelector',
	    value: function renderSizeSelector() {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'size-selector' },
	        _react2.default.createElement(_sizeSelector2.default, {
	          pageSize: this.props.pageSize,
	          pageSizeList: this.props.pageSizeList,
	          onChange: this.props.onPageSizeChange
	        })
	      );
	    }
	  }, {
	    key: 'renderJumper',
	    value: function renderJumper(pageCount) {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'jumper' },
	        _react2.default.createElement(_jumper2.default, { pageCount: pageCount, onChange: this.props.onPageChange })
	      );
	    }
	  }, {
	    key: 'renderList',
	    value: function renderList(pageCount) {
	      return _react2.default.createElement(
	        'div',
	        { styleName: 'list' },
	        _react2.default.createElement(_list2.default, { currentPage: this.props.currentPage, pageCount: pageCount, onChange: this.props.onPageChange })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pageCount = this.props.pageCount !== undefined || Math.ceil(this.props.total / this.props.pageSize) || 1;
	      var currentPage = this.props.currentPage > 0 && this.props.currentPage <= pageCount ? this.props.currentPage : 1;
	      return _react2.default.createElement(
	        'div',
	        _extends({}, this.props, { styleName: 'wrap' }),
	        this.props.showSizeSelector ? this.renderSizeSelector() : null,
	        _react2.default.createElement(
	          'div',
	          { styleName: 'list' },
	          _react2.default.createElement(_list2.default, { currentPage: currentPage, pageCount: pageCount, onChange: this.props.onPageChange })
	        ),
	        this.props.showJumper ? this.renderJumper(pageCount) : null
	      );
	    }
	  }]);

	  return Pagination;
	}(_react.Component);

	Pagination.defaultProps = {
	  currentPage: 1,
	  total: 1,
	  pageSize: 10,
	  pageSizeList: [10, 20, 30],
	  showSizeSelector: false,
	  showJumper: false
	};

	exports.default = (0, _reactCssModules2.default)(Pagination, _paginationModule2.default);

/***/ }

/******/ });