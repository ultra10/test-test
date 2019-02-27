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
    instance = new ElasticemailRestfulApi.SecurityApi();
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

  describe('SecurityApi', function() {
    describe('securityAccesstokensGet', function() {
      it('should call securityAccesstokensGet successfully', function(done) {
        //uncomment below and update the code to test securityAccesstokensGet
        //instance.securityAccesstokensGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('securityAccesstokensNameDelete', function() {
      it('should call securityAccesstokensNameDelete successfully', function(done) {
        //uncomment below and update the code to test securityAccesstokensNameDelete
        //instance.securityAccesstokensNameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('securityAccesstokensNameGet', function() {
      it('should call securityAccesstokensNameGet successfully', function(done) {
        //uncomment below and update the code to test securityAccesstokensNameGet
        //instance.securityAccesstokensNameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('securityAccesstokensNamePut', function() {
      it('should call securityAccesstokensNamePut successfully', function(done) {
        //uncomment below and update the code to test securityAccesstokensNamePut
        //instance.securityAccesstokensNamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('securityAccesstokensPost', function() {
      it('should call securityAccesstokensPost successfully', function(done) {
        //uncomment below and update the code to test securityAccesstokensPost
        //instance.securityAccesstokensPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));