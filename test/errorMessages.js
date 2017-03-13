var expect = require('chai').expect;
var validstring = require('../dist/index')

describe('ValidString#getErrorMessages', function() {

  var validator = new validstring().notEmpty().has({chars:'@'})

  it('should return an array with 2 messages when there are 2/2 validation errors', function() {
      var result = validator.test('').getErrorMessages('Test input')
      expect(result.length===2 && result instanceof Array).to.equal(true);
  });

  it('should return an array with 1 messages when there are 1/2 validation errors', function() {
      var result = validator.test('123').getErrorMessages('Test input')
      expect(result.length===1 && result instanceof Array).to.equal(true);
  });

  it('should return an array with 0 messages when there are 0/2 validation errors', function() {
      var result = validator.test('123@').getErrorMessages('Test input')
      expect(result.length===0 && result instanceof Array).to.equal(true);
  });

});
