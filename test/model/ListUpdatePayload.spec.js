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
    instance = new ElasticemailRestfulApi.ListUpdatePayload();
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

  describe('ListUpdatePayload', function() {
    it('should create an instance of ListUpdatePayload', function() {
      // uncomment below and update the code to test ListUpdatePayload
      //var instane = new ElasticemailRestfulApi.ListUpdatePayload();
      //expect(instance).to.be.a(ElasticemailRestfulApi.ListUpdatePayload);
    });

    it('should have the property newListName (base name: "NewListName")', function() {
      // uncomment below and update the code to test the property newListName
      //var instane = new ElasticemailRestfulApi.ListUpdatePayload();
      //expect(instance).to.be();
    });

    it('should have the property allowUnsubscribe (base name: "AllowUnsubscribe")', function() {
      // uncomment below and update the code to test the property allowUnsubscribe
      //var instane = new ElasticemailRestfulApi.ListUpdatePayload();
      //expect(instance).to.be();
    });

  });

}));
