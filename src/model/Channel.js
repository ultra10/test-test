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
    root.ElasticemailRestfulApi.Channel = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Channel model module.
   * @module model/Channel
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Channel</code>.
   * SMTP and HTTP API channel for grouping email delivery
   * @alias module:model/Channel
   * @class
   * @param name {String} Descriptive name of the channel.
   * @param dateAdded {Date} The date the channel was added to your account.
   * @param jobCount {Number} The number of email jobs this channel has been used with.
   * @param clickedCount {Number} The number of emails that have been clicked within this channel.
   * @param openedCount {Number} The number of emails that have been opened within this channel.
   * @param recipientCount {Number} The number of emails attempted to be sent within this channel.
   * @param sentCount {Number} The number of emails that have been sent within this channel.
   * @param failedCount {Number} The number of emails that have been bounced within this channel.
   * @param unsubscribedCount {Number} The number of emails that have been unsubscribed within this channel.
   * @param failedAbuse {Number} The number of emails that have been marked as abuse or complaint within this channel.
   * @param cost {Number} The total cost for emails/attachments within this channel.
   */
  var exports = function(name, dateAdded, jobCount, clickedCount, openedCount, recipientCount, sentCount, failedCount, unsubscribedCount, failedAbuse, cost) {
    var _this = this;

    _this['Name'] = name;
    _this['DateAdded'] = dateAdded;

    _this['JobCount'] = jobCount;
    _this['ClickedCount'] = clickedCount;
    _this['OpenedCount'] = openedCount;
    _this['RecipientCount'] = recipientCount;
    _this['SentCount'] = sentCount;
    _this['FailedCount'] = failedCount;
    _this['UnsubscribedCount'] = unsubscribedCount;
    _this['FailedAbuse'] = failedAbuse;
    _this['Cost'] = cost;
  };

  /**
   * Constructs a <code>Channel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Channel} obj Optional instance to populate.
   * @return {module:model/Channel} The populated <code>Channel</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('DateAdded')) {
        obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
      }
      if (data.hasOwnProperty('LastActivity')) {
        obj['LastActivity'] = ApiClient.convertToType(data['LastActivity'], 'Date');
      }
      if (data.hasOwnProperty('JobCount')) {
        obj['JobCount'] = ApiClient.convertToType(data['JobCount'], 'Number');
      }
      if (data.hasOwnProperty('ClickedCount')) {
        obj['ClickedCount'] = ApiClient.convertToType(data['ClickedCount'], 'Number');
      }
      if (data.hasOwnProperty('OpenedCount')) {
        obj['OpenedCount'] = ApiClient.convertToType(data['OpenedCount'], 'Number');
      }
      if (data.hasOwnProperty('RecipientCount')) {
        obj['RecipientCount'] = ApiClient.convertToType(data['RecipientCount'], 'Number');
      }
      if (data.hasOwnProperty('SentCount')) {
        obj['SentCount'] = ApiClient.convertToType(data['SentCount'], 'Number');
      }
      if (data.hasOwnProperty('FailedCount')) {
        obj['FailedCount'] = ApiClient.convertToType(data['FailedCount'], 'Number');
      }
      if (data.hasOwnProperty('UnsubscribedCount')) {
        obj['UnsubscribedCount'] = ApiClient.convertToType(data['UnsubscribedCount'], 'Number');
      }
      if (data.hasOwnProperty('FailedAbuse')) {
        obj['FailedAbuse'] = ApiClient.convertToType(data['FailedAbuse'], 'Number');
      }
      if (data.hasOwnProperty('Cost')) {
        obj['Cost'] = ApiClient.convertToType(data['Cost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Descriptive name of the channel.
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * The date the channel was added to your account.
   * @member {Date} DateAdded
   */
  exports.prototype['DateAdded'] = undefined;
  /**
   * The date the channel was last sent through.
   * @member {Date} LastActivity
   */
  exports.prototype['LastActivity'] = undefined;
  /**
   * The number of email jobs this channel has been used with.
   * @member {Number} JobCount
   */
  exports.prototype['JobCount'] = undefined;
  /**
   * The number of emails that have been clicked within this channel.
   * @member {Number} ClickedCount
   */
  exports.prototype['ClickedCount'] = undefined;
  /**
   * The number of emails that have been opened within this channel.
   * @member {Number} OpenedCount
   */
  exports.prototype['OpenedCount'] = undefined;
  /**
   * The number of emails attempted to be sent within this channel.
   * @member {Number} RecipientCount
   */
  exports.prototype['RecipientCount'] = undefined;
  /**
   * The number of emails that have been sent within this channel.
   * @member {Number} SentCount
   */
  exports.prototype['SentCount'] = undefined;
  /**
   * The number of emails that have been bounced within this channel.
   * @member {Number} FailedCount
   */
  exports.prototype['FailedCount'] = undefined;
  /**
   * The number of emails that have been unsubscribed within this channel.
   * @member {Number} UnsubscribedCount
   */
  exports.prototype['UnsubscribedCount'] = undefined;
  /**
   * The number of emails that have been marked as abuse or complaint within this channel.
   * @member {Number} FailedAbuse
   */
  exports.prototype['FailedAbuse'] = undefined;
  /**
   * The total cost for emails/attachments within this channel.
   * @member {Number} Cost
   */
  exports.prototype['Cost'] = undefined;



  return exports;
}));


