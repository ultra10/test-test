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
    instance = new ElasticemailRestfulApi.BouncedCategorySummary();
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

  describe('BouncedCategorySummary', function() {
    it('should create an instance of BouncedCategorySummary', function() {
      // uncomment below and update the code to test BouncedCategorySummary
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be.a(ElasticemailRestfulApi.BouncedCategorySummary);
    });

    it('should have the property spam (base name: "Spam")', function() {
      // uncomment below and update the code to test the property spam
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property blackListed (base name: "BlackListed")', function() {
      // uncomment below and update the code to test the property blackListed
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property noMailbox (base name: "NoMailbox")', function() {
      // uncomment below and update the code to test the property noMailbox
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property greyListed (base name: "GreyListed")', function() {
      // uncomment below and update the code to test the property greyListed
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property throttled (base name: "Throttled")', function() {
      // uncomment below and update the code to test the property throttled
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "Timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property connectionProblem (base name: "ConnectionProblem")', function() {
      // uncomment below and update the code to test the property connectionProblem
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property spfProblem (base name: "SpfProblem")', function() {
      // uncomment below and update the code to test the property spfProblem
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property accountProblem (base name: "AccountProblem")', function() {
      // uncomment below and update the code to test the property accountProblem
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property dnsProblem (base name: "DnsProblem")', function() {
      // uncomment below and update the code to test the property dnsProblem
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property whitelistingProblem (base name: "WhitelistingProblem")', function() {
      // uncomment below and update the code to test the property whitelistingProblem
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property codeError (base name: "CodeError")', function() {
      // uncomment below and update the code to test the property codeError
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property notDelivered (base name: "NotDelivered")', function() {
      // uncomment below and update the code to test the property notDelivered
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property manualCancel (base name: "ManualCancel")', function() {
      // uncomment below and update the code to test the property manualCancel
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

    it('should have the property connectionTerminated (base name: "ConnectionTerminated")', function() {
      // uncomment below and update the code to test the property connectionTerminated
      //var instane = new ElasticemailRestfulApi.BouncedCategorySummary();
      //expect(instance).to.be();
    });

  });

}));