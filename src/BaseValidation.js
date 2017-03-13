/**
 * BaseValidation
 * @constructor
 * @param {Object} options
 * @param {BaseValidation} baseValidation
 */
class BaseValidation {

  constructor() {

    var baseValidation = false
    var options = false

    for (let i = 0; i < arguments.length; i++) {
      if(!options && arguments[i].constructor.name === 'Object') {
        options = arguments[i]
      } else if(!baseValidation && arguments[i] instanceof BaseValidation) {
        baseValidation = arguments[i]
      }
    }

    Object.defineProperties(this, {
      'baseValidation':{
        configurable: false,
        writable: false,
        value: baseValidation
      },
      'options':{
        configurable: false,
        writable: false,
        value: options || {}
      },
      'tested': {
        configurable: true,
        writable: false,
        value: false
      },
      'isValid': {
        configurable: true,
        writable: false,
        value: null
      },
      'isThisValid': {
        configurable: true,
        writable: false,
        value: null
      }
    })
  }

  /**
   * setErrorMessage
   *
   * @param {object} options
   * @return {this}
   */
  setErrorMessage(options){
    if(typeof options.errorMessage === 'string') {
      this.errorMessage = options.errorMessage
    } else if(options.errorMessage) {
      throw new Error(`Unexpected "${typeof options.errorMessage}" input, the argument of .getErrorMessage() cannot be any other than a string.`)
    }
    
    return this
  }

  /**
   * getErrorMessage
   *
   * @param {string} replacement
   * @return {array}
   */
  getErrorMessage(replacement) {
    if(!this.tested) {
      throw new Error(`Cannot get error messages for an untested validation, try running .test() first.`)
    }
    if(typeof replacement !== 'string') {
      throw new Error(`Unexpected "${typeof replacement}" input, the argument of .getErrorMessage() cannot be any other than a string.`)
    }

    var thisMessage = this.errorMessage && !this.isThisValid ? [this.errorMessage.replace(/%s/,replacement)] : []

    return this.baseValidation instanceof BaseValidation ? this.baseValidation.getErrorMessage(replacement).concat(thisMessage) : thisMessage
  }

  /**
   * test
   *
   * @param {string} text
   * @return {Object}
   */
  test(text) {
    if(typeof text !== 'string') {
      throw new Error(`Unexpected "${typeof text}" input, the argument of .test() cannot be any other than a string.`)
    }

    this.setErrorMessage(this.options)

    var isThisValid = this.evaluate(text, this.options)

    Object.defineProperties(this, {
      'tested': {
        configurable: true,
        writable: false,
        value: true
      },
      'isValid': {
        configurable: true,
        writable: false,
        value: this.baseValidation instanceof BaseValidation ? this.baseValidation.test(text).isValid && isThisValid : isThisValid
      },
      'isThisValid': {
        configurable: true,
        writable: false,
        value: isThisValid
      }
    })

    return {
      isValid: this.isValid,
      getErrorMessage: subject => this.getErrorMessage(subject),
      assert: (b) => this.assert(this, b)
    }
  }

  /**
   * assert
   *
   * @param {string|BaseValidation} subject
   * @param {bollean|number} assertion
   * @return {boolean}
   */
  assert() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
    var isBaseValidationInstance = a instanceof BaseValidation

    if(typeof a !== 'string' && !isBaseValidationInstance) {
      throw new Error(`Unexpected "${typeof a}" input, the first argument of .assert() cannot be any other than a string or a BaseValidation instance.`)
    }
    if(typeof b !== 'boolean' && typeof b !== 'number') {
      throw new Error(`Unexpected "${typeof b}" input, the second argument of .assert() cannot be any other than a boolean or a number.`)
    }

    return isBaseValidationInstance ? a.isValid == b : this.test(a).isValid == b
  }

  /**
   * errorMessage - this property is ment to be overridden
   *
   * @var {string} The error message returned by .getErrorMessage()
   */
  errorMessage = ''

  /**
   * evaluate - this method is ment to be overridden
   *
   * @param {string} text
   * @return {boolean}
   */
  evaluate(text){
    return true
  }
}

export default BaseValidation
