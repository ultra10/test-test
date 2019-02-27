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
    instance = new ElasticemailRestfulApi.Contact();
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

  describe('Contact', function() {
    it('should create an instance of Contact', function() {
      // uncomment below and update the code to test Contact
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be.a(ElasticemailRestfulApi.Contact);
    });

    it('should have the property contactScore (base name: "ContactScore")', function() {
      // uncomment below and update the code to test the property contactScore
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property dateAdded (base name: "DateAdded")', function() {
      // uncomment below and update the code to test the property dateAdded
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "FirstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "LastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property bouncedErrorCode (base name: "BouncedErrorCode")', function() {
      // uncomment below and update the code to test the property bouncedErrorCode
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property bouncedErrorMessage (base name: "BouncedErrorMessage")', function() {
      // uncomment below and update the code to test the property bouncedErrorMessage
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property totalSent (base name: "TotalSent")', function() {
      // uncomment below and update the code to test the property totalSent
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property totalFailed (base name: "TotalFailed")', function() {
      // uncomment below and update the code to test the property totalFailed
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property totalOpened (base name: "TotalOpened")', function() {
      // uncomment below and update the code to test the property totalOpened
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property totalClicked (base name: "TotalClicked")', function() {
      // uncomment below and update the code to test the property totalClicked
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property firstFailedDate (base name: "FirstFailedDate")', function() {
      // uncomment below and update the code to test the property firstFailedDate
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property lastFailedCount (base name: "LastFailedCount")', function() {
      // uncomment below and update the code to test the property lastFailedCount
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property dateUpdated (base name: "DateUpdated")', function() {
      // uncomment below and update the code to test the property dateUpdated
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "Source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property errorCode (base name: "ErrorCode")', function() {
      // uncomment below and update the code to test the property errorCode
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property friendlyErrorMessage (base name: "FriendlyErrorMessage")', function() {
      // uncomment below and update the code to test the property friendlyErrorMessage
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property createdFromIP (base name: "CreatedFromIP")', function() {
      // uncomment below and update the code to test the property createdFromIP
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property consentIP (base name: "ConsentIP")', function() {
      // uncomment below and update the code to test the property consentIP
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property consentDate (base name: "ConsentDate")', function() {
      // uncomment below and update the code to test the property consentDate
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property consentTracking (base name: "ConsentTracking")', function() {
      // uncomment below and update the code to test the property consentTracking
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribedDate (base name: "UnsubscribedDate")', function() {
      // uncomment below and update the code to test the property unsubscribedDate
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "Notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property websiteUrl (base name: "WebsiteUrl")', function() {
      // uncomment below and update the code to test the property websiteUrl
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property lastOpened (base name: "LastOpened")', function() {
      // uncomment below and update the code to test the property lastOpened
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property lastClicked (base name: "LastClicked")', function() {
      // uncomment below and update the code to test the property lastClicked
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "CustomFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new ElasticemailRestfulApi.Contact();
      //expect(instance).to.be();
    });

  });

}));