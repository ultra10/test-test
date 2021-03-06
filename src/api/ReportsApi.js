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
    define(['ApiClient', 'model/EmailCredits', 'model/EventLog', 'model/ExportLink', 'model/Log', 'model/LogSummary', 'model/Payment', 'model/Referral', 'model/ReputationHistory', 'model/SpamCheck'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EmailCredits'), require('../model/EventLog'), require('../model/ExportLink'), require('../model/Log'), require('../model/LogSummary'), require('../model/Payment'), require('../model/Referral'), require('../model/ReputationHistory'), require('../model/SpamCheck'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.ReportsApi = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.EmailCredits, root.ElasticemailRestfulApi.EventLog, root.ElasticemailRestfulApi.ExportLink, root.ElasticemailRestfulApi.Log, root.ElasticemailRestfulApi.LogSummary, root.ElasticemailRestfulApi.Payment, root.ElasticemailRestfulApi.Referral, root.ElasticemailRestfulApi.ReputationHistory, root.ElasticemailRestfulApi.SpamCheck);
  }
}(this, function(ApiClient, EmailCredits, EventLog, ExportLink, Log, LogSummary, Payment, Referral, ReputationHistory, SpamCheck) {
  'use strict';

  /**
   * Reports service.
   * @module api/ReportsApi
   * @version 3.0.0b
   */

  /**
   * Constructs a new ReportsApi. 
   * @alias module:api/ReportsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the reportsBouncedGet operation.
     * @callback module:api/ReportsApi~reportsBouncedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Log} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns bounced logs filtered by specified parameters.
     * @param {Array.<module:model/String>} messageCategories 
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.channelName Name of selected channel.
     * @param {Number} opts.limit Maximum of loaded items. (default to 0)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {Boolean} opts.includeEmail True: Search includes emails. Otherwise, false. (default to True)
     * @param {Boolean} opts.includeSms True: Search includes SMS. Otherwise, false. (default to True)
     * @param {String} opts.email Proper email address.
     * @param {String} opts.ipaddress Search for recipients that we sent through this IP address
     * @param {module:api/ReportsApi~reportsBouncedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Log}
     */
    this.reportsBouncedGet = function(messageCategories, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'messageCategories' is set
      if (messageCategories === undefined || messageCategories === null) {
        throw new Error("Missing the required parameter 'messageCategories' when calling reportsBouncedGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'channelName': opts['channelName'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'includeEmail': opts['includeEmail'],
        'includeSms': opts['includeSms'],
        'email': opts['email'],
        'ipaddress': opts['ipaddress'],
      };
      var collectionQueryParams = {
        'messageCategories': {
          value: messageCategories,
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
      var returnType = Log;

      return this.apiClient.callApi(
        '/reports/bounced', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsEmailcreditsHistoryGet operation.
     * @callback module:api/ReportsApi~reportsEmailcreditsHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EmailCredits>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists email credits history
     * @param {module:api/ReportsApi~reportsEmailcreditsHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/EmailCredits>}
     */
    this.reportsEmailcreditsHistoryGet = function(callback) {
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
      var returnType = [EmailCredits];

      return this.apiClient.callApi(
        '/reports/emailcredits/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsEventlogGet operation.
     * @callback module:api/ReportsApi~reportsEventlogGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/EventLog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns log of delivery events filtered by specified parameters.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.statuses List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
     * @param {String} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.channelName Name of selected channel.
     * @param {Number} opts.limit Maximum of loaded items. (default to 0)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:api/ReportsApi~reportsEventlogGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/EventLog}
     */
    this.reportsEventlogGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'channelName': opts['channelName'],
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
        'statuses': {
          value: opts['statuses'],
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
      var returnType = EventLog;

      return this.apiClient.callApi(
        '/reports/eventlog', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsEventsExportGet operation.
     * @callback module:api/ReportsApi~reportsEventsExportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export delivery events log information to the specified file format.
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.statuses List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
     * @param {String} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.channelName Name of selected channel.
     * @param {module:model/String} opts.fileFormat Format of the exported file (default to Csv)
     * @param {module:model/String} opts.compressionFormat FileResponse compression format. None or Zip. (default to None)
     * @param {String} opts.fileName Name of your file.
     * @param {module:api/ReportsApi~reportsEventsExportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    this.reportsEventsExportGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'channelName': opts['channelName'],
        'fileFormat': opts['fileFormat'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName'],
      };
      var collectionQueryParams = {
        'statuses': {
          value: opts['statuses'],
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
        '/reports/events/export', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsExportGet operation.
     * @callback module:api/ReportsApi~reportsExportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export email log information to the specified file format.
     * @param {Array.<module:model/String>} statuses List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fileFormat Format of the exported file (default to Csv)
     * @param {String} opts.from Start date.
     * @param {String} opts.to End date.
     * @param {String} opts.channelName Name of selected channel.
     * @param {Boolean} opts.includeEmail True: Search includes emails. Otherwise, false. (default to True)
     * @param {Boolean} opts.includeSms True: Search includes SMS. Otherwise, false. (default to True)
     * @param {Array.<module:model/String>} opts.messageCategory ID of message category
     * @param {module:model/String} opts.compressionFormat FileResponse compression format. None or Zip. (default to None)
     * @param {String} opts.fileName Name of your file.
     * @param {String} opts.email Proper email address.
     * @param {module:api/ReportsApi~reportsExportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    this.reportsExportGet = function(statuses, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'statuses' is set
      if (statuses === undefined || statuses === null) {
        throw new Error("Missing the required parameter 'statuses' when calling reportsExportGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'fileFormat': opts['fileFormat'],
        'from': opts['from'],
        'to': opts['to'],
        'channelName': opts['channelName'],
        'includeEmail': opts['includeEmail'],
        'includeSms': opts['includeSms'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName'],
        'email': opts['email'],
      };
      var collectionQueryParams = {
        'statuses': {
          value: statuses,
          collectionFormat: 'csv'
        },
        'messageCategory': {
          value: opts['messageCategory'],
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
        '/reports/export', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsGet operation.
     * @callback module:api/ReportsApi~reportsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Log} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns logs filtered by specified parameters.
     * @param {Array.<module:model/String>} statuses List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.channelName Name of selected channel.
     * @param {Number} opts.limit Maximum of loaded items. (default to 0)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {Boolean} opts.includeEmail True: Search includes emails. Otherwise, false. (default to True)
     * @param {Boolean} opts.includeSms True: Search includes SMS. Otherwise, false. (default to True)
     * @param {String} opts.email Proper email address.
     * @param {String} opts.ipaddress Search for recipients that we sent through this IP address
     * @param {module:api/ReportsApi~reportsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Log}
     */
    this.reportsGet = function(statuses, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'statuses' is set
      if (statuses === undefined || statuses === null) {
        throw new Error("Missing the required parameter 'statuses' when calling reportsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'channelName': opts['channelName'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'includeEmail': opts['includeEmail'],
        'includeSms': opts['includeSms'],
        'email': opts['email'],
        'ipaddress': opts['ipaddress'],
      };
      var collectionQueryParams = {
        'statuses': {
          value: statuses,
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
      var returnType = Log;

      return this.apiClient.callApi(
        '/reports', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsLinktrackingsExportGet operation.
     * @callback module:api/ReportsApi~reportsLinktrackingsExportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export detailed link tracking information to the specified file format.
     * @param {String} from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.channelName Name of selected channel.
     * @param {module:model/String} opts.fileFormat Format of the exported file (default to Csv)
     * @param {Number} opts.limit Maximum of loaded items. (default to 0)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:model/String} opts.compressionFormat FileResponse compression format. None or Zip. (default to None)
     * @param {String} opts.fileName Name of your file.
     * @param {module:api/ReportsApi~reportsLinktrackingsExportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    this.reportsLinktrackingsExportGet = function(from, to, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling reportsLinktrackingsExportGet");
      }

      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling reportsLinktrackingsExportGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': from,
        'to': to,
        'channelName': opts['channelName'],
        'fileFormat': opts['fileFormat'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName'],
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
      var returnType = ExportLink;

      return this.apiClient.callApi(
        '/reports/linktrackings/export', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsNotificationsGet operation.
     * @callback module:api/ReportsApi~reportsNotificationsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Log} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns notification logs filtered by specified parameters.
     * @param {Array.<module:model/String>} statuses List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
     * @param {Object} opts Optional parameters
     * @param {String} opts.from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} opts.to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Number} opts.limit Maximum of loaded items. (default to 0)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:model/String} opts.notificationType  (default to All)
     * @param {module:api/ReportsApi~reportsNotificationsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Log}
     */
    this.reportsNotificationsGet = function(statuses, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'statuses' is set
      if (statuses === undefined || statuses === null) {
        throw new Error("Missing the required parameter 'statuses' when calling reportsNotificationsGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': opts['from'],
        'to': opts['to'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'notificationType': opts['notificationType'],
      };
      var collectionQueryParams = {
        'statuses': {
          value: statuses,
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
      var returnType = Log;

      return this.apiClient.callApi(
        '/reports/notifications', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsPaymentsHistoryGet operation.
     * @callback module:api/ReportsApi~reportsPaymentsHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Payment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all payments
     * @param {Number} limit Maximum of loaded items.
     * @param {Number} offset How many items should be loaded ahead.
     * @param {String} fromDate Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} toDate Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {module:api/ReportsApi~reportsPaymentsHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Payment>}
     */
    this.reportsPaymentsHistoryGet = function(limit, offset, fromDate, toDate, callback) {
      var postBody = null;

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling reportsPaymentsHistoryGet");
      }

      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling reportsPaymentsHistoryGet");
      }

      // verify the required parameter 'fromDate' is set
      if (fromDate === undefined || fromDate === null) {
        throw new Error("Missing the required parameter 'fromDate' when calling reportsPaymentsHistoryGet");
      }

      // verify the required parameter 'toDate' is set
      if (toDate === undefined || toDate === null) {
        throw new Error("Missing the required parameter 'toDate' when calling reportsPaymentsHistoryGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'limit': limit,
        'offset': offset,
        'fromDate': fromDate,
        'toDate': toDate,
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
      var returnType = [Payment];

      return this.apiClient.callApi(
        '/reports/payments/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsReferralsGet operation.
     * @callback module:api/ReportsApi~reportsReferralsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Referral} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Shows information about your referral details
     * @param {module:api/ReportsApi~reportsReferralsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Referral}
     */
    this.reportsReferralsGet = function(callback) {
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
      var returnType = Referral;

      return this.apiClient.callApi(
        '/reports/referrals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsReferralsPayoutHistoryGet operation.
     * @callback module:api/ReportsApi~reportsReferralsPayoutHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Payment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all referral payout history
     * @param {module:api/ReportsApi~reportsReferralsPayoutHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Payment>}
     */
    this.reportsReferralsPayoutHistoryGet = function(callback) {
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
      var returnType = [Payment];

      return this.apiClient.callApi(
        '/reports/referrals/payout/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsReputationHistoryGet operation.
     * @callback module:api/ReportsApi~reportsReputationHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ReputationHistory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Shows latest changes in your sending reputation
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum of loaded items. (default to 20)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:api/ReportsApi~reportsReputationHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ReputationHistory>}
     */
    this.reportsReputationHistoryGet = function(opts, callback) {
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
      var returnType = [ReputationHistory];

      return this.apiClient.callApi(
        '/reports/reputation/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsSpamchecksHistoryGet operation.
     * @callback module:api/ReportsApi~reportsSpamchecksHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SpamCheck>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns detailed spam check.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum of loaded items. (default to 20)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:api/ReportsApi~reportsSpamchecksHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SpamCheck>}
     */
    this.reportsSpamchecksHistoryGet = function(opts, callback) {
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
      var returnType = [SpamCheck];

      return this.apiClient.callApi(
        '/reports/spamchecks/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the reportsSummaryGet operation.
     * @callback module:api/ReportsApi~reportsSummaryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LogSummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Loads summary information about activity in chosen date range.
     * @param {String} from Starting date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {String} to Ending date for search in YYYY-MM-DDThh:mm:ss format.
     * @param {Object} opts Optional parameters
     * @param {String} opts.channelName Name of selected channel.
     * @param {module:model/String} opts.interval &#39;Hourly&#39; for detailed information, &#39;summary&#39; for daily overview (default to Summary)
     * @param {String} opts.transactionID ID number of transaction
     * @param {module:api/ReportsApi~reportsSummaryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LogSummary}
     */
    this.reportsSummaryGet = function(from, to, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'from' is set
      if (from === undefined || from === null) {
        throw new Error("Missing the required parameter 'from' when calling reportsSummaryGet");
      }

      // verify the required parameter 'to' is set
      if (to === undefined || to === null) {
        throw new Error("Missing the required parameter 'to' when calling reportsSummaryGet");
      }


      var pathParams = {
      };
      var queryParams = {
        'from': from,
        'to': to,
        'channelName': opts['channelName'],
        'interval': opts['interval'],
        'transactionID': opts['transactionID'],
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
      var returnType = LogSummary;

      return this.apiClient.callApi(
        '/reports/summary', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
