/**
 * elasticemail_Restful_api
 * Send your emails with ElasticEmail API
 *
 * OpenAPI spec version: 3.0.0b
 * Contact: support@elasticemail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ElasticemailRestfulApi);
  }
}(this, function(expect, ElasticemailRestfulApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ElasticemailRestfulApi.LoginResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LoginResponse', function() {
    it('should create an instance of LoginResponse', function() {
      // uncomment below and update the code to test LoginResponse
      //var instane = new ElasticemailRestfulApi.LoginResponse();
      //expect(instance).to.be.a(ElasticemailRestfulApi.LoginResponse);
    });

    it('should have the property apiKey (base name: "ApiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instane = new ElasticemailRestfulApi.LoginResponse();
      //expect(instance).to.be();
    });

    it('should have the property twoFactorAuthCodeDateCreated (base name: "TwoFactorAuthCodeDateCreated")', function() {
      // uncomment below and update the code to test the property twoFactorAuthCodeDateCreated
      //var instane = new ElasticemailRestfulApi.LoginResponse();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ElasticemailRestfulApi.LoginResponse();
      //expect(instance).to.be();
    });

  });

}));
