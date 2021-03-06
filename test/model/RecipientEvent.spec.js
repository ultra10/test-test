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
    instance = new ElasticemailRestfulApi.RecipientEvent();
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

  describe('RecipientEvent', function() {
    it('should create an instance of RecipientEvent', function() {
      // uncomment below and update the code to test RecipientEvent
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be.a(ElasticemailRestfulApi.RecipientEvent);
    });

    it('should have the property jobID (base name: "JobID")', function() {
      // uncomment below and update the code to test the property jobID
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property msgID (base name: "MsgID")', function() {
      // uncomment below and update the code to test the property msgID
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property fromEmail (base name: "FromEmail")', function() {
      // uncomment below and update the code to test the property fromEmail
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "To")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property subject (base name: "Subject")', function() {
      // uncomment below and update the code to test the property subject
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property eventType (base name: "EventType")', function() {
      // uncomment below and update the code to test the property eventType
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property eventDate (base name: "EventDate")', function() {
      // uncomment below and update the code to test the property eventDate
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "Channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property messageCategory (base name: "MessageCategory")', function() {
      // uncomment below and update the code to test the property messageCategory
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

    it('should have the property nextTryOn (base name: "NextTryOn")', function() {
      // uncomment below and update the code to test the property nextTryOn
      //var instane = new ElasticemailRestfulApi.RecipientEvent();
      //expect(instance).to.be();
    });

  });

}));
