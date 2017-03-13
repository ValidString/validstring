var expect = require('chai').expect;
var validation = require('../../dist/validations/RegExPattern').default

describe('RegExPattern validation', function() {

  var instance = new validation({
    pattern: /^Hello World$/
  })

  it('should return true when the string matches the pattern', function() {
      var result = instance.test('Hello World')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string does not match with the pattern', function() {
      var result = instance.test('hello world')
      expect(result.isValid).to.equal(false);
  });
});
