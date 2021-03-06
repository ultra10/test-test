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
    define(['ApiClient', 'model/Contact', 'model/ContactHistory', 'model/ContactStats', 'model/ContactUpdatePayload', 'model/ExportLink', 'model/QuickAddPayload'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Contact'), require('../model/ContactHistory'), require('../model/ContactStats'), require('../model/ContactUpdatePayload'), require('../model/ExportLink'), require('../model/QuickAddPayload'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.ContactsApi = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.Contact, root.ElasticemailRestfulApi.ContactHistory, root.ElasticemailRestfulApi.ContactStats, root.ElasticemailRestfulApi.ContactUpdatePayload, root.ElasticemailRestfulApi.ExportLink, root.ElasticemailRestfulApi.QuickAddPayload);
  }
}(this, function(ApiClient, Contact, ContactHistory, ContactStats, ContactUpdatePayload, ExportLink, QuickAddPayload) {
  'use strict';

  /**
   * Contacts service.
   * @module api/ContactsApi
   * @version 3.0.0b
   */

  /**
   * Constructs a new ContactsApi. 
   * @alias module:api/ContactsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the contactsDelete operation.
     * @callback module:api/ContactsApi~contactsDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Permanantly deletes the contacts provided.  You can provide either a qualified rule or a list of emails (comma separated string).
     * @param {Object} opts Optional parameters
     * @param {String} opts.rule Query used for filtering.
     * @param {Array.<String>} opts.emails Comma delimited list of contact emails
     * @param {Array.<String>} opts.listNames 
     * @param {module:api/ContactsApi~contactsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contactsDelete = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'rule': opts['rule'],
      };
      var collectionQueryParams = {
        'emails': {
          value: opts['emails'],
          collectionFormat: 'csv'
        },
        'listNames': {
          value: opts['listNames'],
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
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsEmailGet operation.
     * @callback module:api/ContactsApi~contactsEmailGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Load detailed contact information
     * @param {String} email Proper email address.
     * @param {module:api/ContactsApi~contactsEmailGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contact}
     */
    this.contactsEmailGet = function(email, callback) {
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsEmailGet");
      }


      var pathParams = {
        'email': email
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
      var returnType = Contact;

      return this.apiClient.callApi(
        '/contacts/{email}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsEmailHistoryGet operation.
     * @callback module:api/ContactsApi~contactsEmailHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContactHistory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Shows detailed history of chosen Contact.
     * @param {String} email Proper email address.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum of loaded items. (default to 0)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:api/ContactsApi~contactsEmailHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContactHistory>}
     */
    this.contactsEmailHistoryGet = function(email, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsEmailHistoryGet");
      }


      var pathParams = {
        'email': email
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
      var returnType = [ContactHistory];

      return this.apiClient.callApi(
        '/contacts/{email}/history', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsEmailPut operation.
     * @callback module:api/ContactsApi~contactsEmailPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Contact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update selected contact. Omitted contact&#39;s fields will be reset by default (see the clearRestOfFields parameter)
     * @param {String} email Proper email address.
     * @param {module:model/ContactUpdatePayload} body 
     * @param {module:api/ContactsApi~contactsEmailPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Contact}
     */
    this.contactsEmailPut = function(email, body, callback) {
      var postBody = body;

      // verify the required parameter 'email' is set
      if (email === undefined || email === null) {
        throw new Error("Missing the required parameter 'email' when calling contactsEmailPut");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling contactsEmailPut");
      }


      var pathParams = {
        'email': email
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
      var returnType = Contact;

      return this.apiClient.callApi(
        '/contacts/{email}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsGet operation.
     * @callback module:api/ContactsApi~contactsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Contact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List of all contacts. If you have not specified RULE, all Contacts will be listed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.rule Query used for filtering.
     * @param {Number} opts.limit Maximum of loaded items. (default to 20)
     * @param {Number} opts.offset How many items should be loaded ahead. (default to 0)
     * @param {module:api/ContactsApi~contactsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Contact>}
     */
    this.contactsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'rule': opts['rule'],
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
      var returnType = [Contact];

      return this.apiClient.callApi(
        '/contacts', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsPost operation.
     * @callback module:api/ContactsApi~contactsPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Contact>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add new Contact to one of your Lists.
     * @param {module:model/QuickAddPayload} body 
     * @param {module:api/ContactsApi~contactsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Contact>}
     */
    this.contactsPost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling contactsPost");
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
      var returnType = [Contact];

      return this.apiClient.callApi(
        '/contacts', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsStatsGet operation.
     * @callback module:api/ContactsApi~contactsStatsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContactStats} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns number of Contacts, RULE specifies contact Status.
     * @param {Object} opts Optional parameters
     * @param {String} opts.rule Query used for filtering.
     * @param {Array.<String>} opts.listNames 
     * @param {module:api/ContactsApi~contactsStatsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContactStats}
     */
    this.contactsStatsGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'rule': opts['rule'],
      };
      var collectionQueryParams = {
        'listNames': {
          value: opts['listNames'],
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
      var returnType = ContactStats;

      return this.apiClient.callApi(
        '/contacts/stats', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsTasksExportGet operation.
     * @callback module:api/ContactsApi~contactsTasksExportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExportLink} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export selected Contacts to file.
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.fileFormat Format of the exported file (default to Csv)
     * @param {String} opts.rule Query used for filtering.
     * @param {Array.<String>} opts.emails Comma delimited list of contact emails
     * @param {module:model/String} opts.compressionFormat FileResponse compression format. None or Zip. (default to None)
     * @param {String} opts.fileName Name of your file.
     * @param {Array.<String>} opts.listNames 
     * @param {module:api/ContactsApi~contactsTasksExportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExportLink}
     */
    this.contactsTasksExportGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'fileFormat': opts['fileFormat'],
        'rule': opts['rule'],
        'compressionFormat': opts['compressionFormat'],
        'fileName': opts['fileName'],
      };
      var collectionQueryParams = {
        'emails': {
          value: opts['emails'],
          collectionFormat: 'csv'
        },
        'listNames': {
          value: opts['listNames'],
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
        '/contacts/tasks/export', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the contactsTasksImportPost operation.
     * @callback module:api/ContactsApi~contactsTasksImportPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload contacts from a file.
     * @param {File} file 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.allowUnsubscribe True: Allow unsubscribing from this list. Otherwise, false (default to False)
     * @param {String} opts.listName Name of your list.
     * @param {module:model/String} opts.status Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed. (default to Active)
     * @param {String} opts.consentDate Date of consent to send this contact(s) your email. If not provided current date is used for consent.
     * @param {String} opts.consentIP IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent.
     * @param {module:model/String} opts.consentTracking  (default to Unknown)
     * @param {module:api/ContactsApi~contactsTasksImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.contactsTasksImportPost = function(file, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling contactsTasksImportPost");
      }


      var pathParams = {
      };
      var queryParams = {
        'allowUnsubscribe': opts['allowUnsubscribe'],
        'listName': opts['listName'],
        'status': opts['status'],
        'consentDate': opts['consentDate'],
        'consentIP': opts['consentIP'],
        'consentTracking': opts['consentTracking'],
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
      var returnType = null;

      return this.apiClient.callApi(
        '/contacts/tasks/import', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
