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
    instance = new ElasticemailRestfulApi.DailyLogStatusSummary();
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

  describe('DailyLogStatusSummary', function() {
    it('should create an instance of DailyLogStatusSummary', function() {
      // uncomment below and update the code to test DailyLogStatusSummary
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be.a(ElasticemailRestfulApi.DailyLogStatusSummary);
    });

    it('should have the property _date (base name: "Date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property sms (base name: "Sms")', function() {
      // uncomment below and update the code to test the property sms
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property delivered (base name: "Delivered")', function() {
      // uncomment below and update the code to test the property delivered
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property opened (base name: "Opened")', function() {
      // uncomment below and update the code to test the property opened
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property clicked (base name: "Clicked")', function() {
      // uncomment below and update the code to test the property clicked
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribed (base name: "Unsubscribed")', function() {
      // uncomment below and update the code to test the property unsubscribed
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property complaint (base name: "Complaint")', function() {
      // uncomment below and update the code to test the property complaint
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property bounced (base name: "Bounced")', function() {
      // uncomment below and update the code to test the property bounced
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property inbound (base name: "Inbound")', function() {
      // uncomment below and update the code to test the property inbound
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property manualCancel (base name: "ManualCancel")', function() {
      // uncomment below and update the code to test the property manualCancel
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

    it('should have the property notDelivered (base name: "NotDelivered")', function() {
      // uncomment below and update the code to test the property notDelivered
      //var instane = new ElasticemailRestfulApi.DailyLogStatusSummary();
      //expect(instance).to.be();
    });

  });

}));
