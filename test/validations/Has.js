var expect = require('chai').expect;
var validation = require('../../dist/validations/Has').default

describe('Has validation', function() {


  var instance = new validation({
    chars: '@'
  })

  it('should return true when the string contains a @', function() {
      var result = instance.test('test@example.com')
      expect(result.isValid).to.equal(true);
  });

  it('should return false when the string does not contain a @', function() {
      var result = instance.test('test')
      expect(result.isValid).to.equal(false);
  });
});
