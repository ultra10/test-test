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
    instance = new ElasticemailRestfulApi.MergeRecipient();
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

  describe('MergeRecipient', function() {
    it('should create an instance of MergeRecipient', function() {
      // uncomment below and update the code to test MergeRecipient
      //var instane = new ElasticemailRestfulApi.MergeRecipient();
      //expect(instance).to.be.a(ElasticemailRestfulApi.MergeRecipient);
    });

    it('should have the property recipientList (base name: "RecipientList")', function() {
      // uncomment below and update the code to test the property recipientList
      //var instane = new ElasticemailRestfulApi.MergeRecipient();
      //expect(instance).to.be();
    });

    it('should have the property listNames (base name: "ListNames")', function() {
      // uncomment below and update the code to test the property listNames
      //var instane = new ElasticemailRestfulApi.MergeRecipient();
      //expect(instance).to.be();
    });

    it('should have the property segmentNames (base name: "SegmentNames")', function() {
      // uncomment below and update the code to test the property segmentNames
      //var instane = new ElasticemailRestfulApi.MergeRecipient();
      //expect(instance).to.be();
    });

    it('should have the property mergeFilename (base name: "MergeFilename")', function() {
      // uncomment below and update the code to test the property mergeFilename
      //var instane = new ElasticemailRestfulApi.MergeRecipient();
      //expect(instance).to.be();
    });

  });

}));