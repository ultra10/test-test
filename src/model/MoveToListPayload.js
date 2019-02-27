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
    root.ElasticemailRestfulApi.MoveToListPayload = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MoveToListPayload model module.
   * @module model/MoveToListPayload
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>MoveToListPayload</code>.
   * @alias module:model/MoveToListPayload
   * @class
   * @param newListName {String} Name of your list if you want to change it.
   * @param statuses {Array.<module:model/MoveToListPayload.StatusesEnum>} List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
   * @param emails {Array.<String>} Comma delimited list of contact emails
   * @param rule {String} Query used for filtering.
   */
  var exports = function(newListName, statuses, emails, rule) {
    var _this = this;

    _this['NewListName'] = newListName;
    _this['Statuses'] = statuses;
    _this['Emails'] = emails;

    _this['Rule'] = rule;
  };

  /**
   * Constructs a <code>MoveToListPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoveToListPayload} obj Optional instance to populate.
   * @return {module:model/MoveToListPayload} The populated <code>MoveToListPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('NewListName')) {
        obj['NewListName'] = ApiClient.convertToType(data['NewListName'], 'String');
      }
      if (data.hasOwnProperty('Statuses')) {
        obj['Statuses'] = ApiClient.convertToType(data['Statuses'], ['String']);
      }
      if (data.hasOwnProperty('Emails')) {
        obj['Emails'] = ApiClient.convertToType(data['Emails'], ['String']);
      }
      if (data.hasOwnProperty('AllContacts')) {
        obj['AllContacts'] = ApiClient.convertToType(data['AllContacts'], 'Boolean');
      }
      if (data.hasOwnProperty('Rule')) {
        obj['Rule'] = ApiClient.convertToType(data['Rule'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of your list if you want to change it.
   * @member {String} NewListName
   */
  exports.prototype['NewListName'] = undefined;
  /**
   * List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
   * @member {Array.<module:model/MoveToListPayload.StatusesEnum>} Statuses
   */
  exports.prototype['Statuses'] = undefined;
  /**
   * Comma delimited list of contact emails
   * @member {Array.<String>} Emails
   */
  exports.prototype['Emails'] = undefined;
  /**
   * True: Include every Contact in your Account. Otherwise, false
   * @member {Boolean} AllContacts
   */
  exports.prototype['AllContacts'] = undefined;
  /**
   * Query used for filtering.
   * @member {String} Rule
   */
  exports.prototype['Rule'] = undefined;


  /**
   * Allowed values for the <code>statuses</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusesEnum = {
    /**
     * value: "Transactional"
     * @const
     */
    "Transactional": "Transactional",
    /**
     * value: "Engaged"
     * @const
     */
    "Engaged": "Engaged",
    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",
    /**
     * value: "Bounced"
     * @const
     */
    "Bounced": "Bounced",
    /**
     * value: "Unsubscribed"
     * @const
     */
    "Unsubscribed": "Unsubscribed",
    /**
     * value: "Abuse"
     * @const
     */
    "Abuse": "Abuse",
    /**
     * value: "Inactive"
     * @const
     */
    "Inactive": "Inactive",
    /**
     * value: "Stale"
     * @const
     */
    "Stale": "Stale",
    /**
     * value: "NotConfirmed"
     * @const
     */
    "NotConfirmed": "NotConfirmed"  };


  return exports;
}));

