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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.FilesApi = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Files service.
   * @module api/FilesApi
   * @version 3.0.0b
   */

  /**
   * Constructs a new FilesApi. 
   * @alias module:api/FilesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the filesFilenameDelete operation.
     * @callback module:api/FilesApi~filesFilenameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permanently deletes the file from your account
     * @param {String} filename Name of your file.
     * @param {module:api/FilesApi~filesFilenameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.filesFilenameDelete = function(filename, callback) {
      var postBody = null;

      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling filesFilenameDelete");
      }


      var pathParams = {
        'filename': filename
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/files/{filename}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filesFilenameGet operation.
     * @callback module:api/FilesApi~filesFilenameGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets content of the chosen File
     * @param {String} filename Name of your file.
     * @param {module:api/FilesApi~filesFilenameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.filesFilenameGet = function(filename, callback) {
      var postBody = null;

      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling filesFilenameGet");
      }


      var pathParams = {
        'filename': filename
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/octet-stream'];
      var returnType = File;

      return this.apiClient.callApi(
        '/files/{filename}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filesFilenameInfoGet operation.
     * @callback module:api/FilesApi~filesFilenameInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets chosen File info
     * @param {String} filename Name of your file.
     * @param {module:api/FilesApi~filesFilenameInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.filesFilenameInfoGet = function(filename, callback) {
      var postBody = null;

      // verify the required parameter 'filename' is set
      if (filename === undefined || filename === null) {
        throw new Error("Missing the required parameter 'filename' when calling filesFilenameInfoGet");
      }


      var pathParams = {
        'filename': filename
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = File;

      return this.apiClient.callApi(
        '/files/{filename}/info', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filesGet operation.
     * @callback module:api/FilesApi~filesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<File>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all your available files
     * @param {module:api/FilesApi~filesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<File>}
     */
    this.filesGet = function(callback) {
      var postBody = null;


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

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [File];

      return this.apiClient.callApi(
        '/files', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filesPost operation.
     * @callback module:api/FilesApi~filesPostCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Uploads selected file to the server using http form upload format (MIME multipart/form-data) or PUT method.
     * @param {File} file 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.expiresAfterDays After how many days should the file be deleted. (default to 35)
     * @param {module:api/FilesApi~filesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    this.filesPost = function(file, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling filesPost");
      }


      var pathParams = {
      };
      var queryParams = {
        'expiresAfterDays': opts['expiresAfterDays'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = ['apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = File;

      return this.apiClient.callApi(
        '/files', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
