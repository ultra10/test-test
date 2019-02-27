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
    root.ElasticemailRestfulApi.UsageData = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UsageData model module.
   * @module model/UsageData
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>UsageData</code>.
   * Detailed data about daily usage
   * @alias module:model/UsageData
   * @class
   * @param _date {Date} Date in YYYY-MM-DDThh:ii:ss format
   * @param jobCount {Number} Number of finished tasks
   * @param recipientCount {Number} Overall number of recipients
   * @param inboundCount {Number} Number of inbound emails
   * @param attachmentCount {Number} Number of attachments sent
   * @param attachmentsSize {Number} Size of attachments sent
   * @param cost {Number} Calculated cost of sending
   * @param privateIPCost {Number} 
   * @param smsCost {Number} Overall cost of SMS
   * @param contactCost {Number} Daily cost of Contact Delivery Tools
   * @param contactCount {Number} Number of contacts
   * @param supportCost {Number} 
   * @param emailCost {Number} 
   */
  var exports = function(_date, jobCount, recipientCount, inboundCount, attachmentCount, attachmentsSize, cost, privateIPCost, smsCost, contactCost, contactCount, supportCost, emailCost) {
    var _this = this;

    _this['Date'] = _date;
    _this['JobCount'] = jobCount;
    _this['RecipientCount'] = recipientCount;
    _this['InboundCount'] = inboundCount;
    _this['AttachmentCount'] = attachmentCount;
    _this['AttachmentsSize'] = attachmentsSize;
    _this['Cost'] = cost;

    _this['PrivateIPCost'] = privateIPCost;

    _this['SmsCost'] = smsCost;

    _this['ContactCost'] = contactCost;
    _this['ContactCount'] = contactCount;
    _this['SupportCost'] = supportCost;
    _this['EmailCost'] = emailCost;
  };

  /**
   * Constructs a <code>UsageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsageData} obj Optional instance to populate.
   * @return {module:model/UsageData} The populated <code>UsageData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Date')) {
        obj['Date'] = ApiClient.convertToType(data['Date'], 'Date');
      }
      if (data.hasOwnProperty('JobCount')) {
        obj['JobCount'] = ApiClient.convertToType(data['JobCount'], 'Number');
      }
      if (data.hasOwnProperty('RecipientCount')) {
        obj['RecipientCount'] = ApiClient.convertToType(data['RecipientCount'], 'Number');
      }
      if (data.hasOwnProperty('InboundCount')) {
        obj['InboundCount'] = ApiClient.convertToType(data['InboundCount'], 'Number');
      }
      if (data.hasOwnProperty('AttachmentCount')) {
        obj['AttachmentCount'] = ApiClient.convertToType(data['AttachmentCount'], 'Number');
      }
      if (data.hasOwnProperty('AttachmentsSize')) {
        obj['AttachmentsSize'] = ApiClient.convertToType(data['AttachmentsSize'], 'Number');
      }
      if (data.hasOwnProperty('Cost')) {
        obj['Cost'] = ApiClient.convertToType(data['Cost'], 'Number');
      }
      if (data.hasOwnProperty('PrivateIPCount')) {
        obj['PrivateIPCount'] = ApiClient.convertToType(data['PrivateIPCount'], 'Number');
      }
      if (data.hasOwnProperty('PrivateIPCost')) {
        obj['PrivateIPCost'] = ApiClient.convertToType(data['PrivateIPCost'], 'Number');
      }
      if (data.hasOwnProperty('SmsCount')) {
        obj['SmsCount'] = ApiClient.convertToType(data['SmsCount'], 'Number');
      }
      if (data.hasOwnProperty('SmsCost')) {
        obj['SmsCost'] = ApiClient.convertToType(data['SmsCost'], 'Number');
      }
      if (data.hasOwnProperty('EmailCreditsCost')) {
        obj['EmailCreditsCost'] = ApiClient.convertToType(data['EmailCreditsCost'], 'Number');
      }
      if (data.hasOwnProperty('ContactCost')) {
        obj['ContactCost'] = ApiClient.convertToType(data['ContactCost'], 'Number');
      }
      if (data.hasOwnProperty('ContactCount')) {
        obj['ContactCount'] = ApiClient.convertToType(data['ContactCount'], 'Number');
      }
      if (data.hasOwnProperty('SupportCost')) {
        obj['SupportCost'] = ApiClient.convertToType(data['SupportCost'], 'Number');
      }
      if (data.hasOwnProperty('EmailCost')) {
        obj['EmailCost'] = ApiClient.convertToType(data['EmailCost'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Date in YYYY-MM-DDThh:ii:ss format
   * @member {Date} Date
   */
  exports.prototype['Date'] = undefined;
  /**
   * Number of finished tasks
   * @member {Number} JobCount
   */
  exports.prototype['JobCount'] = undefined;
  /**
   * Overall number of recipients
   * @member {Number} RecipientCount
   */
  exports.prototype['RecipientCount'] = undefined;
  /**
   * Number of inbound emails
   * @member {Number} InboundCount
   */
  exports.prototype['InboundCount'] = undefined;
  /**
   * Number of attachments sent
   * @member {Number} AttachmentCount
   */
  exports.prototype['AttachmentCount'] = undefined;
  /**
   * Size of attachments sent
   * @member {Number} AttachmentsSize
   */
  exports.prototype['AttachmentsSize'] = undefined;
  /**
   * Calculated cost of sending
   * @member {Number} Cost
   */
  exports.prototype['Cost'] = undefined;
  /**
   * Number of pricate IPs
   * @member {Number} PrivateIPCount
   */
  exports.prototype['PrivateIPCount'] = undefined;
  /**
   * @member {Number} PrivateIPCost
   */
  exports.prototype['PrivateIPCost'] = undefined;
  /**
   * Number of SMS
   * @member {Number} SmsCount
   */
  exports.prototype['SmsCount'] = undefined;
  /**
   * Overall cost of SMS
   * @member {Number} SmsCost
   */
  exports.prototype['SmsCost'] = undefined;
  /**
   * Cost of email credits
   * @member {Number} EmailCreditsCost
   */
  exports.prototype['EmailCreditsCost'] = undefined;
  /**
   * Daily cost of Contact Delivery Tools
   * @member {Number} ContactCost
   */
  exports.prototype['ContactCost'] = undefined;
  /**
   * Number of contacts
   * @member {Number} ContactCount
   */
  exports.prototype['ContactCount'] = undefined;
  /**
   * @member {Number} SupportCost
   */
  exports.prototype['SupportCost'] = undefined;
  /**
   * @member {Number} EmailCost
   */
  exports.prototype['EmailCost'] = undefined;



  return exports;
}));


