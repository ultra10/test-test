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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LoginPayload', 'model/LoginResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/LoginPayload'), require('../model/LoginResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.AuthApi = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.LoginPayload, root.ElasticemailRestfulApi.LoginResponse);
  }
}(this, function(ApiClient, LoginPayload, LoginResponse) {
  'use strict';

  /**
   * Auth service.
   * @module api/AuthApi
   * @version 3.0.0b
   */

  /**
   * Constructs a new AuthApi. 
   * @alias module:api/AuthApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the authPost operation.
     * @callback module:api/AuthApi~authPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Log into your account
     * @param {module:model/LoginPayload} body 
     * @param {module:api/AuthApi~authPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoginResponse}
     */
    this.authPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling authPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LoginResponse;

      return this.apiClient.callApi(
        '/auth', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
