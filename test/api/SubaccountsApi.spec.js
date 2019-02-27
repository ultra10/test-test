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
    instance = new ElasticemailRestfulApi.SubaccountsApi();
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

  describe('SubaccountsApi', function() {
    describe('subaccountsEmailCreditsDelete', function() {
      it('should call subaccountsEmailCreditsDelete successfully', function(done) {
        //uncomment below and update the code to test subaccountsEmailCreditsDelete
        //instance.subaccountsEmailCreditsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsEmailCreditsPost', function() {
      it('should call subaccountsEmailCreditsPost successfully', function(done) {
        //uncomment below and update the code to test subaccountsEmailCreditsPost
        //instance.subaccountsEmailCreditsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsEmailDelete', function() {
      it('should call subaccountsEmailDelete successfully', function(done) {
        //uncomment below and update the code to test subaccountsEmailDelete
        //instance.subaccountsEmailDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsEmailGet', function() {
      it('should call subaccountsEmailGet successfully', function(done) {
        //uncomment below and update the code to test subaccountsEmailGet
        //instance.subaccountsEmailGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsEmailSettingsGet', function() {
      it('should call subaccountsEmailSettingsGet successfully', function(done) {
        //uncomment below and update the code to test subaccountsEmailSettingsGet
        //instance.subaccountsEmailSettingsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsEmailSettingsPut', function() {
      it('should call subaccountsEmailSettingsPut successfully', function(done) {
        //uncomment below and update the code to test subaccountsEmailSettingsPut
        //instance.subaccountsEmailSettingsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsGet', function() {
      it('should call subaccountsGet successfully', function(done) {
        //uncomment below and update the code to test subaccountsGet
        //instance.subaccountsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subaccountsPost', function() {
      it('should call subaccountsPost successfully', function(done) {
        //uncomment below and update the code to test subaccountsPost
        //instance.subaccountsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
