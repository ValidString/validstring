'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseValidation2 = require('../BaseValidation');

var _BaseValidation3 = _interopRequireDefault(_BaseValidation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Has = function (_BaseValidation) {
  _inherits(Has, _BaseValidation);

  function Has() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Has);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Has.__proto__ || Object.getPrototypeOf(Has)).call.apply(_ref, [this].concat(args))), _this), _this.errorMessage = '', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Has, [{
    key: 'evaluate',
    value: function evaluate(text, options) {
      if (!options.chars) {
        throw new Error('Unexpected "' + _typeof(options.chars) + '" input, options.chars is required, and cannot be any other than a string.');
      }
      //TODO: Improve the default message...
      if (!this.errorMessage && !options.errorMessage) {
        this.errorMessage = '%s must contain any of the following characters: ' + options.chars;
      }

      options.chars = options.chars.replace(/([\[\]])/g, '\$1');

      return new RegExp('[' + options.chars + ']').test(text);
    }
  }]);

  return Has;
}(_BaseValidation3.default);

exports.default = Has;