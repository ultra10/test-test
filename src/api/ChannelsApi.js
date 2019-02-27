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
    define(['ApiClient', 'model/Channel', 'model/ExportLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Channel'), require('../model/ExportLink'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.ChannelsApi = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.Channel, root.ElasticemailRestfulApi.ExportLink);
  }
}(this, function(ApiClient, Channel, ExportLink) {
  'use strict';

  /**
   * Channels service.
   * @module api/ChannelsApi
   * @version 3.0.0b
   */

  /**
   * Constructs a new ChannelsApi. 
   * @alias module:api/ChannelsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the channelsGet operation.
     * @callback module:api/ChannelsApi~channelsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Channel>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all of your channels
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum of loaded items. (default to 0)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:api/ChannelsApi~channelsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Channel>}
     */
    this.channelsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
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
      var returnType = [Channel];

      return this.apiClient.callApi(
        '/channels', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the channelsNameCancelPost operation.
     * @callback module:api/ChannelsApi~channelsNameCancelPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the emails being sent with this channel
     * @param {String} name The name of the channel to cancel.
     * @param {module:api/ChannelsApi~channelsNameCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.channelsNameCancelPost = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling channelsNameCancelPost");
      }


      var pathParams = {
        'name': name
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
        '/channels/{name}/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the channelsNameDelete operation.
     * @callback module:api/ChannelsApi~channelsNameDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the channel.
     * @param {String} name The name of the channel to delete.
     * @param {module:api/ChannelsApi~channelsNameDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.channelsNameDelete = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling channelsNameDelete");
      }


      var pathParams = {
        'name': name
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
        '/channels/{name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the channelsNameGet operation.
     * @callback module:api/ChannelsApi~channelsNameGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an existing channel.
     * @param {String} name The name of the channel to get.
     * @param {module:api/ChannelsApi~channelsNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    this.channelsNameGet = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling channelsNameGet");
      }


      var pathParams = {
        'name': name
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
      var returnType = Channel;

      return this.apiClient.callApi(
        '/channels/{name}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the channelsNamePut operation.
     * @callback module:api/ChannelsApi~channelsNamePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rename an existing channel.
     * @param {String} name The name of the channel to update.
     * @param {String} body The new name for the channel.
     * @param {module:api/ChannelsApi~channelsNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    this.channelsNamePut = function(name, body, callback) {
      var postBody = body;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling channelsNamePut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling channelsNamePut");
      }


      var pathParams = {
        'name': name
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
      var returnType = Channel;

      return this.apiClient.callApi(
        '/channels/{name}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the channelsPost operation.
     * @callback module:api/ChannelsApi~channelsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Channel} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Manually add a channel to your account to group email
     * @param {String} body Descriptive name of the channel
     * @param {module:api/ChannelsApi~channelsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Channel}
     */
    this.channelsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling channelsPost");
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

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Channel;

      return this.apiClient.callApi(
        '/channels', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the channelsTasksExportGet operation.
     * @callback module:api/ChannelsApi~channelsTasksExportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export selected channels to chosen file format.
     * @param {Array.<String>} channelNames List of channel names used for processing
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fileFormat Format of the exported file (default to Csv)
     * @param {module:model/String} opts.compressionFormat FileResponse compression format. None or Zip. (default to None)
     * @param {String} opts.fileName Name of your file.
     * @param {module:api/ChannelsApi~channelsTasksExportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    this.channelsTasksExportGet = function(channelNames, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'channelNames' is set
      if (channelNames === undefined || channelNames === null) {
        throw new Error("Missing the required parameter 'channelNames' when calling channelsTasksExportGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'fileFormat': opts['fileFormat'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName'],
      };
      var collectionQueryParams = {
        'channelNames': {
          value: channelNames,
          collectionFormat: 'csv'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['apikey'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ExportLink;

      return this.apiClient.callApi(
        '/channels/tasks/export', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
