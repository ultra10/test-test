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
    instance = new ElasticemailRestfulApi.Log();
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

  describe('Log', function() {
    it('should create an instance of Log', function() {
      // uncomment below and update the code to test Log
      //var instane = new ElasticemailRestfulApi.Log();
      //expect(instance).to.be.a(ElasticemailRestfulApi.Log);
    });

    it('should have the property from (base name: "From")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new ElasticemailRestfulApi.Log();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "To")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new ElasticemailRestfulApi.Log();
      //expect(instance).to.be();
    });

    it('should have the property recipients (base name: "Recipients")', function() {
      // uncomment below and update the code to test the property recipients
      //var instane = new ElasticemailRestfulApi.Log();
      //expect(instance).to.be();
    });

  });

}));
