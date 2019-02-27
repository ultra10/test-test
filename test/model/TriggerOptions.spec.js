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
    instance = new ElasticemailRestfulApi.TriggerOptions();
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

  describe('TriggerOptions', function() {
    it('should create an instance of TriggerOptions', function() {
      // uncomment below and update the code to test TriggerOptions
      //var instane = new ElasticemailRestfulApi.TriggerOptions();
      //expect(instance).to.be.a(ElasticemailRestfulApi.TriggerOptions);
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ElasticemailRestfulApi.TriggerOptions();
      //expect(instance).to.be();
    });

    it('should have the property dateToSendOn (base name: "DateToSendOn")', function() {
      // uncomment below and update the code to test the property dateToSendOn
      //var instane = new ElasticemailRestfulApi.TriggerOptions();
      //expect(instance).to.be();
    });

    it('should have the property sendAfterXMinutes (base name: "SendAfterXMinutes")', function() {
      // uncomment below and update the code to test the property sendAfterXMinutes
      //var instane = new ElasticemailRestfulApi.TriggerOptions();
      //expect(instance).to.be();
    });

    it('should have the property sendEveryXMinutes (base name: "SendEveryXMinutes")', function() {
      // uncomment below and update the code to test the property sendEveryXMinutes
      //var instane = new ElasticemailRestfulApi.TriggerOptions();
      //expect(instance).to.be();
    });

    it('should have the property sendXTimes (base name: "SendXTimes")', function() {
      // uncomment below and update the code to test the property sendXTimes
      //var instane = new ElasticemailRestfulApi.TriggerOptions();
      //expect(instance).to.be();
    });

    it('should have the property triggeredBy (base name: "TriggeredBy")', function() {
      // uncomment below and update the code to test the property triggeredBy
      //var instane = new ElasticemailRestfulApi.TriggerOptions();
      //expect(instance).to.be();
    });

  });

}));