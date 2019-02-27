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
    instance = new ElasticemailRestfulApi.EmailStatus();
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

  describe('EmailStatus', function() {
    it('should create an instance of EmailStatus', function() {
      // uncomment below and update the code to test EmailStatus
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be.a(ElasticemailRestfulApi.EmailStatus);
    });

    it('should have the property from (base name: "From")', function() {
      // uncomment below and update the code to test the property from
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property to (base name: "To")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "Date")', function() {
      // uncomment below and update the code to test the property _date
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property statusName (base name: "StatusName")', function() {
      // uncomment below and update the code to test the property statusName
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property statusChangeDate (base name: "StatusChangeDate")', function() {
      // uncomment below and update the code to test the property statusChangeDate
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property dateSent (base name: "DateSent")', function() {
      // uncomment below and update the code to test the property dateSent
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property dateOpened (base name: "DateOpened")', function() {
      // uncomment below and update the code to test the property dateOpened
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property dateClicked (base name: "DateClicked")', function() {
      // uncomment below and update the code to test the property dateClicked
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property errorMessage (base name: "ErrorMessage")', function() {
      // uncomment below and update the code to test the property errorMessage
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

    it('should have the property transactionID (base name: "TransactionID")', function() {
      // uncomment below and update the code to test the property transactionID
      //var instane = new ElasticemailRestfulApi.EmailStatus();
      //expect(instance).to.be();
    });

  });

}));
