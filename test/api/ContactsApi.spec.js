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
    instance = new ElasticemailRestfulApi.ContactsApi();
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

  describe('ContactsApi', function() {
    describe('contactsDelete', function() {
      it('should call contactsDelete successfully', function(done) {
        //uncomment below and update the code to test contactsDelete
        //instance.contactsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsEmailGet', function() {
      it('should call contactsEmailGet successfully', function(done) {
        //uncomment below and update the code to test contactsEmailGet
        //instance.contactsEmailGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsEmailHistoryGet', function() {
      it('should call contactsEmailHistoryGet successfully', function(done) {
        //uncomment below and update the code to test contactsEmailHistoryGet
        //instance.contactsEmailHistoryGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsEmailPut', function() {
      it('should call contactsEmailPut successfully', function(done) {
        //uncomment below and update the code to test contactsEmailPut
        //instance.contactsEmailPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsGet', function() {
      it('should call contactsGet successfully', function(done) {
        //uncomment below and update the code to test contactsGet
        //instance.contactsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsPost', function() {
      it('should call contactsPost successfully', function(done) {
        //uncomment below and update the code to test contactsPost
        //instance.contactsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsStatsGet', function() {
      it('should call contactsStatsGet successfully', function(done) {
        //uncomment below and update the code to test contactsStatsGet
        //instance.contactsStatsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsTasksExportGet', function() {
      it('should call contactsTasksExportGet successfully', function(done) {
        //uncomment below and update the code to test contactsTasksExportGet
        //instance.contactsTasksExportGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('contactsTasksImportPost', function() {
      it('should call contactsTasksImportPost successfully', function(done) {
        //uncomment below and update the code to test contactsTasksImportPost
        //instance.contactsTasksImportPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
