'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseValidation2 = require('../BaseValidation');

var _BaseValidation3 = _interopRequireDefault(_BaseValidation2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlphaNumeric = function (_BaseValidation) {
  _inherits(AlphaNumeric, _BaseValidation);

  function AlphaNumeric() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AlphaNumeric);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlphaNumeric.__proto__ || Object.getPrototypeOf(AlphaNumeric)).call.apply(_ref, [this].concat(args))), _this), _this.errorMessage = '%s must contain upper and lower case letters from A to Z and numbers only.', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AlphaNumeric, [{
    key: 'evaluate',
    value: function evaluate(text, options) {
      var extraChars = typeof options.extraChars === 'string' ? options.extraChars : '';
      return new RegExp('^[A-Za-z0-9' + extraChars + ']*?$').test(text);
    }
  }]);

  return AlphaNumeric;
}(_BaseValidation3.default);

exports.default = AlphaNumeric;