var expect = require('chai').expect;
var validation = require('../../dist/validations/HasNot').default

describe('HasNot validation', function() {


  var instance = new validation({
    chars: '@'
  })

  it('should return false when the string contains a @', function() {
      var result = instance.test('test@example.com')
      expect(result.isValid).to.equal(false);
  });

  it('should return true when the string does not contain a @', function() {
      var result = instance.test('test')
      expect(result.isValid).to.equal(true);
  });
});
