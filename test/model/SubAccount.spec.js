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
    instance = new ElasticemailRestfulApi.SubAccount();
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

  describe('SubAccount', function() {
    it('should create an instance of SubAccount', function() {
      // uncomment below and update the code to test SubAccount
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be.a(ElasticemailRestfulApi.SubAccount);
    });

    it('should have the property publicAccountID (base name: "PublicAccountID")', function() {
      // uncomment below and update the code to test the property publicAccountID
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property apiKey (base name: "ApiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property poolName (base name: "PoolName")', function() {
      // uncomment below and update the code to test the property poolName
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property lastActivity (base name: "LastActivity")', function() {
      // uncomment below and update the code to test the property lastActivity
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property emailCredits (base name: "EmailCredits")', function() {
      // uncomment below and update the code to test the property emailCredits
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property requiresEmailCredits (base name: "RequiresEmailCredits")', function() {
      // uncomment below and update the code to test the property requiresEmailCredits
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property monthlyRefillCredits (base name: "MonthlyRefillCredits")', function() {
      // uncomment below and update the code to test the property monthlyRefillCredits
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property enablePrivateIPRequest (base name: "EnablePrivateIPRequest")', function() {
      // uncomment below and update the code to test the property enablePrivateIPRequest
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property totalEmailsSent (base name: "TotalEmailsSent")', function() {
      // uncomment below and update the code to test the property totalEmailsSent
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property unknownUsersPercent (base name: "UnknownUsersPercent")', function() {
      // uncomment below and update the code to test the property unknownUsersPercent
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property abusePercent (base name: "AbusePercent")', function() {
      // uncomment below and update the code to test the property abusePercent
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property failedSpamPercent (base name: "FailedSpamPercent")', function() {
      // uncomment below and update the code to test the property failedSpamPercent
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property reputation (base name: "Reputation")', function() {
      // uncomment below and update the code to test the property reputation
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property dailySendLimit (base name: "DailySendLimit")', function() {
      // uncomment below and update the code to test the property dailySendLimit
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "Status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property emailSizeLimit (base name: "EmailSizeLimit")', function() {
      // uncomment below and update the code to test the property emailSizeLimit
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property maxContacts (base name: "MaxContacts")', function() {
      // uncomment below and update the code to test the property maxContacts
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property sendingPermission (base name: "SendingPermission")', function() {
      // uncomment below and update the code to test the property sendingPermission
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property hasModify2FA (base name: "HasModify2FA")', function() {
      // uncomment below and update the code to test the property hasModify2FA
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

    it('should have the property contactsCount (base name: "ContactsCount")', function() {
      // uncomment below and update the code to test the property contactsCount
      //var instane = new ElasticemailRestfulApi.SubAccount();
      //expect(instance).to.be();
    });

  });

}));