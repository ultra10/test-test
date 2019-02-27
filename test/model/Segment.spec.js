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
    instance = new ElasticemailRestfulApi.Segment();
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

  describe('Segment', function() {
    it('should create an instance of Segment', function() {
      // uncomment below and update the code to test Segment
      //var instane = new ElasticemailRestfulApi.Segment();
      //expect(instance).to.be.a(ElasticemailRestfulApi.Segment);
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ElasticemailRestfulApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property rule (base name: "Rule")', function() {
      // uncomment below and update the code to test the property rule
      //var instane = new ElasticemailRestfulApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property lastCount (base name: "LastCount")', function() {
      // uncomment below and update the code to test the property lastCount
      //var instane = new ElasticemailRestfulApi.Segment();
      //expect(instance).to.be();
    });

    it('should have the property history (base name: "History")', function() {
      // uncomment below and update the code to test the property history
      //var instane = new ElasticemailRestfulApi.Segment();
      //expect(instance).to.be();
    });

  });

}));