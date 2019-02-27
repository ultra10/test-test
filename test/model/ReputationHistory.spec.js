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
    instance = new ElasticemailRestfulApi.ReputationHistory();
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

  describe('ReputationHistory', function() {
    it('should create an instance of ReputationHistory', function() {
      // uncomment below and update the code to test ReputationHistory
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be.a(ElasticemailRestfulApi.ReputationHistory);
    });

    it('should have the property dateCreated (base name: "DateCreated")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property abusePercent (base name: "AbusePercent")', function() {
      // uncomment below and update the code to test the property abusePercent
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property unknownUsersPercent (base name: "UnknownUsersPercent")', function() {
      // uncomment below and update the code to test the property unknownUsersPercent
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property openedPercent (base name: "OpenedPercent")', function() {
      // uncomment below and update the code to test the property openedPercent
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property clickedPercent (base name: "ClickedPercent")', function() {
      // uncomment below and update the code to test the property clickedPercent
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property averageSpamScore (base name: "AverageSpamScore")', function() {
      // uncomment below and update the code to test the property averageSpamScore
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property setupScore (base name: "SetupScore")', function() {
      // uncomment below and update the code to test the property setupScore
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property repEmailsSent (base name: "RepEmailsSent")', function() {
      // uncomment below and update the code to test the property repEmailsSent
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

    it('should have the property reputation (base name: "Reputation")', function() {
      // uncomment below and update the code to test the property reputation
      //var instane = new ElasticemailRestfulApi.ReputationHistory();
      //expect(instance).to.be();
    });

  });

}));
