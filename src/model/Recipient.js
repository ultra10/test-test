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
    root.ElasticemailRestfulApi.Recipient = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Recipient model module.
   * @module model/Recipient
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Recipient</code>.
   * Detailed information about message recipient
   * @alias module:model/Recipient
   * @class
   * @param isSms {Boolean} True, if message is SMS. Otherwise, false
   * @param msgID {String} ID number of selected message.
   * @param to {String} Ending date for search in YYYY-MM-DDThh:mm:ss format.
   * @param status {String} Name of recipient's status: Submitted, ReadyToSend, WaitingToRetry, Sending, Bounced, Sent, Opened, Clicked, Unsubscribed, AbuseReport
   * @param channel {String} Name of selected Channel.
   * @param _date {String} Creation date
   * @param dateSent {String} Date when the email was sent
   * @param dateOpened {String} Date when the email changed the status to 'opened'
   * @param dateClicked {String} Date when the email changed the status to 'clicked'
   * @param message {String} Content of message, HTML encoded
   * @param showCategory {Boolean} True, if message category should be shown. Otherwise, false
   * @param messageCategory {String} Name of message category
   * @param statusChangeDate {String} Date of last status change.
   * @param nextTryOn {String} Date of next try
   * @param subject {String} Default subject of email.
   * @param fromEmail {String} Default From: email address.
   * @param envelopeFrom {String} 
   * @param jobID {String} ID of certain mail job
   * @param smsUpdateRequired {Boolean} True, if message is a SMS and status is not yet confirmed. Otherwise, false
   * @param textMessage {String} Content of message
   * @param messageSid {String} Comma separated ID numbers of messages.
   * @param contactLastError {String} Recipient's last bounce error because of which this e-mail was suppressed
   * @param iPAddress {String} 
   */
  var exports = function(isSms, msgID, to, status, channel, _date, dateSent, dateOpened, dateClicked, message, showCategory, messageCategory, statusChangeDate, nextTryOn, subject, fromEmail, envelopeFrom, jobID, smsUpdateRequired, textMessage, messageSid, contactLastError, iPAddress) {
    var _this = this;

    _this['IsSms'] = isSms;
    _this['MsgID'] = msgID;
    _this['To'] = to;
    _this['Status'] = status;
    _this['Channel'] = channel;
    _this['Date'] = _date;
    _this['DateSent'] = dateSent;
    _this['DateOpened'] = dateOpened;
    _this['DateClicked'] = dateClicked;
    _this['Message'] = message;
    _this['ShowCategory'] = showCategory;
    _this['MessageCategory'] = messageCategory;

    _this['StatusChangeDate'] = statusChangeDate;
    _this['NextTryOn'] = nextTryOn;
    _this['Subject'] = subject;
    _this['FromEmail'] = fromEmail;
    _this['EnvelopeFrom'] = envelopeFrom;
    _this['JobID'] = jobID;
    _this['SmsUpdateRequired'] = smsUpdateRequired;
    _this['TextMessage'] = textMessage;
    _this['MessageSid'] = messageSid;
    _this['ContactLastError'] = contactLastError;
    _this['IPAddress'] = iPAddress;
  };

  /**
   * Constructs a <code>Recipient</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Recipient} obj Optional instance to populate.
   * @return {module:model/Recipient} The populated <code>Recipient</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('IsSms')) {
        obj['IsSms'] = ApiClient.convertToType(data['IsSms'], 'Boolean');
      }
      if (data.hasOwnProperty('MsgID')) {
        obj['MsgID'] = ApiClient.convertToType(data['MsgID'], 'String');
      }
      if (data.hasOwnProperty('To')) {
        obj['To'] = ApiClient.convertToType(data['To'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('Channel')) {
        obj['Channel'] = ApiClient.convertToType(data['Channel'], 'String');
      }
      if (data.hasOwnProperty('Date')) {
        obj['Date'] = ApiClient.convertToType(data['Date'], 'String');
      }
      if (data.hasOwnProperty('DateSent')) {
        obj['DateSent'] = ApiClient.convertToType(data['DateSent'], 'String');
      }
      if (data.hasOwnProperty('DateOpened')) {
        obj['DateOpened'] = ApiClient.convertToType(data['DateOpened'], 'String');
      }
      if (data.hasOwnProperty('DateClicked')) {
        obj['DateClicked'] = ApiClient.convertToType(data['DateClicked'], 'String');
      }
      if (data.hasOwnProperty('Message')) {
        obj['Message'] = ApiClient.convertToType(data['Message'], 'String');
      }
      if (data.hasOwnProperty('ShowCategory')) {
        obj['ShowCategory'] = ApiClient.convertToType(data['ShowCategory'], 'Boolean');
      }
      if (data.hasOwnProperty('MessageCategory')) {
        obj['MessageCategory'] = ApiClient.convertToType(data['MessageCategory'], 'String');
      }
      if (data.hasOwnProperty('MessageCategoryID')) {
        obj['MessageCategoryID'] = ApiClient.convertToType(data['MessageCategoryID'], 'String');
      }
      if (data.hasOwnProperty('StatusChangeDate')) {
        obj['StatusChangeDate'] = ApiClient.convertToType(data['StatusChangeDate'], 'String');
      }
      if (data.hasOwnProperty('NextTryOn')) {
        obj['NextTryOn'] = ApiClient.convertToType(data['NextTryOn'], 'String');
      }
      if (data.hasOwnProperty('Subject')) {
        obj['Subject'] = ApiClient.convertToType(data['Subject'], 'String');
      }
      if (data.hasOwnProperty('FromEmail')) {
        obj['FromEmail'] = ApiClient.convertToType(data['FromEmail'], 'String');
      }
      if (data.hasOwnProperty('EnvelopeFrom')) {
        obj['EnvelopeFrom'] = ApiClient.convertToType(data['EnvelopeFrom'], 'String');
      }
      if (data.hasOwnProperty('JobID')) {
        obj['JobID'] = ApiClient.convertToType(data['JobID'], 'String');
      }
      if (data.hasOwnProperty('SmsUpdateRequired')) {
        obj['SmsUpdateRequired'] = ApiClient.convertToType(data['SmsUpdateRequired'], 'Boolean');
      }
      if (data.hasOwnProperty('TextMessage')) {
        obj['TextMessage'] = ApiClient.convertToType(data['TextMessage'], 'String');
      }
      if (data.hasOwnProperty('MessageSid')) {
        obj['MessageSid'] = ApiClient.convertToType(data['MessageSid'], 'String');
      }
      if (data.hasOwnProperty('ContactLastError')) {
        obj['ContactLastError'] = ApiClient.convertToType(data['ContactLastError'], 'String');
      }
      if (data.hasOwnProperty('IPAddress')) {
        obj['IPAddress'] = ApiClient.convertToType(data['IPAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * True, if message is SMS. Otherwise, false
   * @member {Boolean} IsSms
   */
  exports.prototype['IsSms'] = undefined;
  /**
   * ID number of selected message.
   * @member {String} MsgID
   */
  exports.prototype['MsgID'] = undefined;
  /**
   * Ending date for search in YYYY-MM-DDThh:mm:ss format.
   * @member {String} To
   */
  exports.prototype['To'] = undefined;
  /**
   * Name of recipient's status: Submitted, ReadyToSend, WaitingToRetry, Sending, Bounced, Sent, Opened, Clicked, Unsubscribed, AbuseReport
   * @member {String} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * Name of selected Channel.
   * @member {String} Channel
   */
  exports.prototype['Channel'] = undefined;
  /**
   * Creation date
   * @member {String} Date
   */
  exports.prototype['Date'] = undefined;
  /**
   * Date when the email was sent
   * @member {String} DateSent
   */
  exports.prototype['DateSent'] = undefined;
  /**
   * Date when the email changed the status to 'opened'
   * @member {String} DateOpened
   */
  exports.prototype['DateOpened'] = undefined;
  /**
   * Date when the email changed the status to 'clicked'
   * @member {String} DateClicked
   */
  exports.prototype['DateClicked'] = undefined;
  /**
   * Content of message, HTML encoded
   * @member {String} Message
   */
  exports.prototype['Message'] = undefined;
  /**
   * True, if message category should be shown. Otherwise, false
   * @member {Boolean} ShowCategory
   */
  exports.prototype['ShowCategory'] = undefined;
  /**
   * Name of message category
   * @member {String} MessageCategory
   */
  exports.prototype['MessageCategory'] = undefined;
  /**
   * ID of message category
   * @member {module:model/Recipient.MessageCategoryIDEnum} MessageCategoryID
   */
  exports.prototype['MessageCategoryID'] = undefined;
  /**
   * Date of last status change.
   * @member {String} StatusChangeDate
   */
  exports.prototype['StatusChangeDate'] = undefined;
  /**
   * Date of next try
   * @member {String} NextTryOn
   */
  exports.prototype['NextTryOn'] = undefined;
  /**
   * Default subject of email.
   * @member {String} Subject
   */
  exports.prototype['Subject'] = undefined;
  /**
   * Default From: email address.
   * @member {String} FromEmail
   */
  exports.prototype['FromEmail'] = undefined;
  /**
   * @member {String} EnvelopeFrom
   */
  exports.prototype['EnvelopeFrom'] = undefined;
  /**
   * ID of certain mail job
   * @member {String} JobID
   */
  exports.prototype['JobID'] = undefined;
  /**
   * True, if message is a SMS and status is not yet confirmed. Otherwise, false
   * @member {Boolean} SmsUpdateRequired
   */
  exports.prototype['SmsUpdateRequired'] = undefined;
  /**
   * Content of message
   * @member {String} TextMessage
   */
  exports.prototype['TextMessage'] = undefined;
  /**
   * Comma separated ID numbers of messages.
   * @member {String} MessageSid
   */
  exports.prototype['MessageSid'] = undefined;
  /**
   * Recipient's last bounce error because of which this e-mail was suppressed
   * @member {String} ContactLastError
   */
  exports.prototype['ContactLastError'] = undefined;
  /**
   * @member {String} IPAddress
   */
  exports.prototype['IPAddress'] = undefined;


  /**
   * Allowed values for the <code>MessageCategoryID</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MessageCategoryIDEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "Ignore"
     * @const
     */
    "Ignore": "Ignore",
    /**
     * value: "Spam"
     * @const
     */
    "Spam": "Spam",
    /**
     * value: "BlackListed"
     * @const
     */
    "BlackListed": "BlackListed",
    /**
     * value: "NoMailbox"
     * @const
     */
    "NoMailbox": "NoMailbox",
    /**
     * value: "GreyListed"
     * @const
     */
    "GreyListed": "GreyListed",
    /**
     * value: "Throttled"
     * @const
     */
    "Throttled": "Throttled",
    /**
     * value: "Timeout"
     * @const
     */
    "Timeout": "Timeout",
    /**
     * value: "ConnectionProblem"
     * @const
     */
    "ConnectionProblem": "ConnectionProblem",
    /**
     * value: "SPFProblem"
     * @const
     */
    "SPFProblem": "SPFProblem",
    /**
     * value: "AccountProblem"
     * @const
     */
    "AccountProblem": "AccountProblem",
    /**
     * value: "DNSProblem"
     * @const
     */
    "DNSProblem": "DNSProblem",
    /**
     * value: "NotDeliveredCancelled"
     * @const
     */
    "NotDeliveredCancelled": "NotDeliveredCancelled",
    /**
     * value: "CodeError"
     * @const
     */
    "CodeError": "CodeError",
    /**
     * value: "ManualCancel"
     * @const
     */
    "ManualCancel": "ManualCancel",
    /**
     * value: "ConnectionTerminated"
     * @const
     */
    "ConnectionTerminated": "ConnectionTerminated",
    /**
     * value: "NotDelivered"
     * @const
     */
    "NotDelivered": "NotDelivered"  };


  return exports;
}));


