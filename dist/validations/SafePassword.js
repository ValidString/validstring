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

var SafePassword = function (_BaseValidation) {
  _inherits(SafePassword, _BaseValidation);

  function SafePassword() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SafePassword);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SafePassword.__proto__ || Object.getPrototypeOf(SafePassword)).call.apply(_ref, [this].concat(args))), _this), _this.errorMessage = '%s must be at least 8 characters long and should contain both letters and numbers.', _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SafePassword, [{
    key: 'evaluate',
    value: function evaluate(text) {
      var longerThan8 = /.{8}/.test(text);
      var containsAlpha = /[A-Za-z]+/.test(text);
      var containsNum = /[0-9]+/.test(text);
      return longerThan8 && containsAlpha && containsNum;
    }
  }]);

  return SafePassword;
}(_BaseValidation3.default);

exports.default = SafePassword;