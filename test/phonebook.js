var assert = require('assert');

describe('validateAddress', function() {
  var phonebook = require('../routes/phonebook');
  describe('template', function() {
    it('should not return error', function() {
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
  describe('missing required data', function() {
    it('should return error', function() {
      assert(phonebook.test.validateAddress({
        surname: '',
        phone_number: ''
      }));
    });
  });
  describe('falses are OK', function() {
    it('should not return error', function() {
      assert(!phonebook.test.validateAddress({
        surname: '0',
        firstname: '0',
        phone_number: '0'
      }));
    });
  });
  describe('real record', function() {
    it('should not return error', function() {
      assert(!phonebook.test.validateAddress({
        surname: 'Smith',
        firstname: 'John',
        phone_number: '+67 929292 92929 92',
        address: '16 winter gardens, simcity'
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
