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
    root.ElasticemailRestfulApi.ContactHistory = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContactHistory model module.
   * @module model/ContactHistory
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ContactHistory</code>.
   * History of chosen Contact
   * @alias module:model/ContactHistory
   * @class
   * @param eventType {String} Type of event occured on this Contact.
   * @param eventTypeValue {module:model/ContactHistory.EventTypeValueEnum} Numeric code of event occured on this Contact.
   * @param eventDate {String} Formatted date of event.
   * @param channelName {String} Name of selected channel.
   * @param templateName {String} Name of template.
   * @param iPAddress {String} IP Address of the event.
   * @param country {String} Country of the event.
   * @param data {String} Information about the event
   */
  var exports = function(eventType, eventTypeValue, eventDate, channelName, templateName, iPAddress, country, data) {
    var _this = this;

    _this['EventType'] = eventType;
    _this['EventTypeValue'] = eventTypeValue;
    _this['EventDate'] = eventDate;
    _this['ChannelName'] = channelName;
    _this['TemplateName'] = templateName;
    _this['IPAddress'] = iPAddress;
    _this['Country'] = country;
    _this['Data'] = data;
  };

  /**
   * Constructs a <code>ContactHistory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactHistory} obj Optional instance to populate.
   * @return {module:model/ContactHistory} The populated <code>ContactHistory</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('EventType')) {
        obj['EventType'] = ApiClient.convertToType(data['EventType'], 'String');
      }
      if (data.hasOwnProperty('EventTypeValue')) {
        obj['EventTypeValue'] = ApiClient.convertToType(data['EventTypeValue'], 'String');
      }
      if (data.hasOwnProperty('EventDate')) {
        obj['EventDate'] = ApiClient.convertToType(data['EventDate'], 'String');
      }
      if (data.hasOwnProperty('ChannelName')) {
        obj['ChannelName'] = ApiClient.convertToType(data['ChannelName'], 'String');
      }
      if (data.hasOwnProperty('TemplateName')) {
        obj['TemplateName'] = ApiClient.convertToType(data['TemplateName'], 'String');
      }
      if (data.hasOwnProperty('IPAddress')) {
        obj['IPAddress'] = ApiClient.convertToType(data['IPAddress'], 'String');
      }
      if (data.hasOwnProperty('Country')) {
        obj['Country'] = ApiClient.convertToType(data['Country'], 'String');
      }
      if (data.hasOwnProperty('Data')) {
        obj['Data'] = ApiClient.convertToType(data['Data'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of event occured on this Contact.
   * @member {String} EventType
   */
  exports.prototype['EventType'] = undefined;
  /**
   * Numeric code of event occured on this Contact.
   * @member {module:model/ContactHistory.EventTypeValueEnum} EventTypeValue
   */
  exports.prototype['EventTypeValue'] = undefined;
  /**
   * Formatted date of event.
   * @member {String} EventDate
   */
  exports.prototype['EventDate'] = undefined;
  /**
   * Name of selected channel.
   * @member {String} ChannelName
   */
  exports.prototype['ChannelName'] = undefined;
  /**
   * Name of template.
   * @member {String} TemplateName
   */
  exports.prototype['TemplateName'] = undefined;
  /**
   * IP Address of the event.
   * @member {String} IPAddress
   */
  exports.prototype['IPAddress'] = undefined;
  /**
   * Country of the event.
   * @member {String} Country
   */
  exports.prototype['Country'] = undefined;
  /**
   * Information about the event
   * @member {String} Data
   */
  exports.prototype['Data'] = undefined;


  /**
   * Allowed values for the <code>EventTypeValue</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EventTypeValueEnum = {
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
     * value: "Complained"
     * @const
     */
    "Complained": "Complained",
    /**
     * value: "Activated"
     * @const
     */
    "Activated": "Activated",
    /**
     * value: "TransactionalUnsubscribed"
     * @const
     */
    "TransactionalUnsubscribed": "TransactionalUnsubscribed",
    /**
     * value: "ManualStatusChange"
     * @const
     */
    "ManualStatusChange": "ManualStatusChange",
    /**
     * value: "ActivationSent"
     * @const
     */
    "ActivationSent": "ActivationSent",
    /**
     * value: "Deleted"
     * @const
     */
    "Deleted": "Deleted"  };


  return exports;
}));


