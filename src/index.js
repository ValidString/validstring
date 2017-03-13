import ValidationFactory from './ValidationFactory'

import NotEmpty from './validations/NotEmpty'
import Alphabetic from './validations/Alphabetic'
import AlphaNumeric from './validations/AlphaNumeric'
import Numeric from './validations/Numeric'
import RegExPattern from './validations/RegExPattern'
import SafePassword from './validations/SafePassword'
import Has from './validations/Has'
import HasNot from './validations/HasNot'


const validationsMap = {
  'alphabetic': Alphabetic,
  'alphaNumeric': AlphaNumeric,
  'notEmpty': NotEmpty,
  'numeric': Numeric,
  'regExPattern': RegExPattern,
  'safePassword': SafePassword,
  'has': Has,
  'hasNot': HasNot
}

var factory = new ValidationFactory(validationsMap)



class ValidString {
  validation = null

  constructor(validations){

    if(validations){
      this.appendMap(validations)
    }

    Object.defineProperties(this, {
      'hasValidations':{
        get: () => typeof this.validation === "object",
        set: () => {}
      },
      'isTested':{
        get: () => this.validation ? this.validation.tested : false,
        set: () => {}
      },
      'isValid': {
        get: () => this.validation ? this.validation.isValid : null,
        set: () => {}
      },
      'isLastValid': {
        get: () => this.validation ? this.validation.isThisValid : null,
        set: () => {}
      }
    })
  }

  append(validationKey, options) {
    this.validation = factory.spawn(validationKey, this.validation, options)
    return this
  }

  appendMap(obj) {
    if(!obj.constructor || obj.constructor.name !== 'Object') {
      throw new Error(`Unexpected "${obj}" input, the argument of .appendMap() cannot be any other than an Object.`)
    }

    for (let validationKey in obj) {
      this.append(validationKey, obj[validationKey])
    }

    return this
  }

  getErrorMessage(replacement) {
    if(!this.isTested) {
      throw new Error(`Cannot get error messages for an untested validation, try running .test() or .assert() first.`)
    }
    if(typeof replacement !== 'string') {
      throw new Error(`Unexpected "${typeof replacement}" input, the argument of .getErrorMessage() cannot be any other than a string.`)
    }

    return this.validation.getErrorMessage(replacement)
  }

  test(text) {
    if(!this.hasValidations) {
      throw new Error(`It is not possible to use .test() before defining the desired validations. Please refer to the manual for more info: `)
    }

    return this.validation.test(text)
  }

  assert(text, assertion){
    if(!this.hasValidations) {
      throw new Error(`It is not possible to use .assert() before defining the desired validations. Please refer to the manual for more info: `)
    }

    return this.validation.assert(text, assertion)
  }

  //-------

  alphabetic(options) {
    return this.append('alphabetic', options)
  }

  alphaNumeric(options) {
    return this.append('alphaNumeric', options)
  }

  notEmpty(options) {
    return this.append('notEmpty', options)
  }

  numeric(options) {
    return this.append('numeric', options)
  }

  regExPattern(options) {
    return this.append('regExPattern', options)
  }

  safePassword(options) {
    return this.append('safePassword', options)
  }

  has(options) {
    return this.append('Has', options)
  }

  hasNot(options) {
    return this.append('HasNot', options)
  }
}

export default ValidString
/*
export NotEmpty
export Alphabetic
export AlphaNumeric
export Numeric
export RegExPattern
export SafePassword
export Has
export HasNot
*/
