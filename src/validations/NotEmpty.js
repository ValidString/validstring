import BaseValidation from '../BaseValidation'

class NotEmpty extends BaseValidation {
  errorMessage = '%s must not be empty.'
  evaluate(text){
    return /(?:\s|\S)+/.test(text)
  }
}

export default NotEmpty
