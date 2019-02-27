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
    instance = new ElasticemailRestfulApi.ListsApi();
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

  describe('ListsApi', function() {
    describe('listsFromcampaignPost', function() {
      it('should call listsFromcampaignPost successfully', function(done) {
        //uncomment below and update the code to test listsFromcampaignPost
        //instance.listsFromcampaignPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsGet', function() {
      it('should call listsGet successfully', function(done) {
        //uncomment below and update the code to test listsGet
        //instance.listsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsListnameContactsDelete', function() {
      it('should call listsListnameContactsDelete successfully', function(done) {
        //uncomment below and update the code to test listsListnameContactsDelete
        //instance.listsListnameContactsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsListnameContactsMovePut', function() {
      it('should call listsListnameContactsMovePut successfully', function(done) {
        //uncomment below and update the code to test listsListnameContactsMovePut
        //instance.listsListnameContactsMovePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsListnameContactsPut', function() {
      it('should call listsListnameContactsPut successfully', function(done) {
        //uncomment below and update the code to test listsListnameContactsPut
        //instance.listsListnameContactsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsListnameDelete', function() {
      it('should call listsListnameDelete successfully', function(done) {
        //uncomment below and update the code to test listsListnameDelete
        //instance.listsListnameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsListnameGet', function() {
      it('should call listsListnameGet successfully', function(done) {
        //uncomment below and update the code to test listsListnameGet
        //instance.listsListnameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsListnamePut', function() {
      it('should call listsListnamePut successfully', function(done) {
        //uncomment below and update the code to test listsListnamePut
        //instance.listsListnamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsPost', function() {
      it('should call listsPost successfully', function(done) {
        //uncomment below and update the code to test listsPost
        //instance.listsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listsRandomPost', function() {
      it('should call listsRandomPost successfully', function(done) {
        //uncomment below and update the code to test listsRandomPost
        //instance.listsRandomPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));