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
    root.ElasticemailRestfulApi.EmailStatus = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailStatus model module.
   * @module model/EmailStatus
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>EmailStatus</code>.
   * Status information of the specified email
   * @alias module:model/EmailStatus
   * @class
   * @param from {String} Email address this email was sent from.
   * @param to {String} Email address this email was sent to.
   * @param _date {Date} Date the email was submitted.
   * @param status {module:model/EmailStatus.StatusEnum} Value of email's status
   * @param statusName {String} Name of email's status
   * @param statusChangeDate {Date} Date of last status change.
   * @param dateSent {Date} Date when the email was sent
   * @param errorMessage {String} Detailed error or bounced message.
   * @param transactionID {String} ID number of transaction
   */
  var exports = function(from, to, _date, status, statusName, statusChangeDate, dateSent, errorMessage, transactionID) {
    var _this = this;

    _this['From'] = from;
    _this['To'] = to;
    _this['Date'] = _date;
    _this['Status'] = status;
    _this['StatusName'] = statusName;
    _this['StatusChangeDate'] = statusChangeDate;
    _this['DateSent'] = dateSent;


    _this['ErrorMessage'] = errorMessage;
    _this['TransactionID'] = transactionID;
  };

  /**
   * Constructs a <code>EmailStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailStatus} obj Optional instance to populate.
   * @return {module:model/EmailStatus} The populated <code>EmailStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('From')) {
        obj['From'] = ApiClient.convertToType(data['From'], 'String');
      }
      if (data.hasOwnProperty('To')) {
        obj['To'] = ApiClient.convertToType(data['To'], 'String');
      }
      if (data.hasOwnProperty('Date')) {
        obj['Date'] = ApiClient.convertToType(data['Date'], 'Date');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('StatusName')) {
        obj['StatusName'] = ApiClient.convertToType(data['StatusName'], 'String');
      }
      if (data.hasOwnProperty('StatusChangeDate')) {
        obj['StatusChangeDate'] = ApiClient.convertToType(data['StatusChangeDate'], 'Date');
      }
      if (data.hasOwnProperty('DateSent')) {
        obj['DateSent'] = ApiClient.convertToType(data['DateSent'], 'Date');
      }
      if (data.hasOwnProperty('DateOpened')) {
        obj['DateOpened'] = ApiClient.convertToType(data['DateOpened'], 'Date');
      }
      if (data.hasOwnProperty('DateClicked')) {
        obj['DateClicked'] = ApiClient.convertToType(data['DateClicked'], 'Date');
      }
      if (data.hasOwnProperty('ErrorMessage')) {
        obj['ErrorMessage'] = ApiClient.convertToType(data['ErrorMessage'], 'String');
      }
      if (data.hasOwnProperty('TransactionID')) {
        obj['TransactionID'] = ApiClient.convertToType(data['TransactionID'], 'String');
      }
    }
    return obj;
  }

  /**
   * Email address this email was sent from.
   * @member {String} From
   */
  exports.prototype['From'] = undefined;
  /**
   * Email address this email was sent to.
   * @member {String} To
   */
  exports.prototype['To'] = undefined;
  /**
   * Date the email was submitted.
   * @member {Date} Date
   */
  exports.prototype['Date'] = undefined;
  /**
   * Value of email's status
   * @member {module:model/EmailStatus.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * Name of email's status
   * @member {String} StatusName
   */
  exports.prototype['StatusName'] = undefined;
  /**
   * Date of last status change.
   * @member {Date} StatusChangeDate
   */
  exports.prototype['StatusChangeDate'] = undefined;
  /**
   * Date when the email was sent
   * @member {Date} DateSent
   */
  exports.prototype['DateSent'] = undefined;
  /**
   * Date when the email changed the status to 'opened'
   * @member {Date} DateOpened
   */
  exports.prototype['DateOpened'] = undefined;
  /**
   * Date when the email changed the status to 'clicked'
   * @member {Date} DateClicked
   */
  exports.prototype['DateClicked'] = undefined;
  /**
   * Detailed error or bounced message.
   * @member {String} ErrorMessage
   */
  exports.prototype['ErrorMessage'] = undefined;
  /**
   * ID number of transaction
   * @member {String} TransactionID
   */
  exports.prototype['TransactionID'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "All"
     * @const
     */
    "All": "All",
    /**
     * value: "ReadyToSend"
     * @const
     */
    "ReadyToSend": "ReadyToSend",
    /**
     * value: "WaitingToRetry"
     * @const
     */
    "WaitingToRetry": "WaitingToRetry",
    /**
     * value: "Sending"
     * @const
     */
    "Sending": "Sending",
    /**
     * value: "Error"
     * @const
     */
    "Error": "Error",
    /**
     * value: "Sent"
     * @const
     */
    "Sent": "Sent",
    /**
     * value: "Opened"
     * @const
     */
    "Opened": "Opened",
    /**
     * value: "Clicked"
     * @const
     */
    "Clicked": "Clicked",
    /**
     * value: "Unsubscribed"
     * @const
     */
    "Unsubscribed": "Unsubscribed",
    /**
     * value: "AbuseReport"
     * @const
     */
    "AbuseReport": "AbuseReport"  };


  return exports;
}));


