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
    instance = new ElasticemailRestfulApi.AccountOverview();
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

  describe('AccountOverview', function() {
    it('should create an instance of AccountOverview', function() {
      // uncomment below and update the code to test AccountOverview
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be.a(ElasticemailRestfulApi.AccountOverview);
    });

    it('should have the property totalEmailsSent (base name: "TotalEmailsSent")', function() {
      // uncomment below and update the code to test the property totalEmailsSent
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property credit (base name: "Credit")', function() {
      // uncomment below and update the code to test the property credit
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property costPerThousand (base name: "CostPerThousand")', function() {
      // uncomment below and update the code to test the property costPerThousand
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property inProgressCount (base name: "InProgressCount")', function() {
      // uncomment below and update the code to test the property inProgressCount
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property blockedContactsCount (base name: "BlockedContactsCount")', function() {
      // uncomment below and update the code to test the property blockedContactsCount
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property reputation (base name: "Reputation")', function() {
      // uncomment below and update the code to test the property reputation
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property contactCount (base name: "ContactCount")', function() {
      // uncomment below and update the code to test the property contactCount
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property campaignCount (base name: "CampaignCount")', function() {
      // uncomment below and update the code to test the property campaignCount
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property templateCount (base name: "TemplateCount")', function() {
      // uncomment below and update the code to test the property templateCount
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property subAccountCount (base name: "SubAccountCount")', function() {
      // uncomment below and update the code to test the property subAccountCount
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

    it('should have the property referralCount (base name: "ReferralCount")', function() {
      // uncomment below and update the code to test the property referralCount
      //var instane = new ElasticemailRestfulApi.AccountOverview();
      //expect(instance).to.be();
    });

  });

}));
