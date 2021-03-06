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
    instance = new ElasticemailRestfulApi.SubAccountSettings();
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

  describe('SubAccountSettings', function() {
    it('should create an instance of SubAccountSettings', function() {
      // uncomment below and update the code to test SubAccountSettings
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be.a(ElasticemailRestfulApi.SubAccountSettings);
    });

    it('should have the property email (base name: "Email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property requiresEmailCredits (base name: "RequiresEmailCredits")', function() {
      // uncomment below and update the code to test the property requiresEmailCredits
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property monthlyRefillCredits (base name: "MonthlyRefillCredits")', function() {
      // uncomment below and update the code to test the property monthlyRefillCredits
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property emailSizeLimit (base name: "EmailSizeLimit")', function() {
      // uncomment below and update the code to test the property emailSizeLimit
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property dailySendLimit (base name: "DailySendLimit")', function() {
      // uncomment below and update the code to test the property dailySendLimit
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property maxContacts (base name: "MaxContacts")', function() {
      // uncomment below and update the code to test the property maxContacts
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property enablePrivateIPRequest (base name: "EnablePrivateIPRequest")', function() {
      // uncomment below and update the code to test the property enablePrivateIPRequest
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property enableContactFeatures (base name: "EnableContactFeatures")', function() {
      // uncomment below and update the code to test the property enableContactFeatures
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property sendingPermission (base name: "SendingPermission")', function() {
      // uncomment below and update the code to test the property sendingPermission
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property poolName (base name: "PoolName")', function() {
      // uncomment below and update the code to test the property poolName
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property publicAccountID (base name: "PublicAccountID")', function() {
      // uncomment below and update the code to test the property publicAccountID
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

    it('should have the property allow2FA (base name: "Allow2FA")', function() {
      // uncomment below and update the code to test the property allow2FA
      //var instane = new ElasticemailRestfulApi.SubAccountSettings();
      //expect(instance).to.be();
    });

  });

}));
