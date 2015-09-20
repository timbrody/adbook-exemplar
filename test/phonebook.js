var assert = require('assert');

describe('validateAddress', function() {
  var phonebook = require('../routes/phonebook');
  describe('template', function() {
    it('should return false with template', function() {
      assert(!phonebook.test.validateAddress({
        surname: '',
        firstname: '',
        phone_number: '',
        address: ''
      }));
    });
  });
  describe('extra key', function() {
    it('should return error', function() {
      assert(phonebook.test.validateAddress({
        surname: '',
        firstname: '',
        phone_number: '',
        _invalidINVALID: ''
      }));
    });
  });
  describe('bad data type', function() {
    it('should return error', function() {
      assert(phonebook.test.validateAddress({
        surname: '',
        firstname: '',
        phone_number: '',
        address: 123
      }));
    });
  });
  describe('empty object', function() {
    it('should return error', function() {
      assert(phonebook.test.validateAddress({
      }));
    });
  });
});
