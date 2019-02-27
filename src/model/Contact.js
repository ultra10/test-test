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
    root.ElasticemailRestfulApi.Contact = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Contact model module.
   * @module model/Contact
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Contact</code>.
   * Contact
   * @alias module:model/Contact
   * @class
   * @param contactScore {Number} 
   * @param dateAdded {Date} Date of creation in YYYY-MM-DDThh:ii:ss format
   * @param email {String} Proper email address.
   * @param firstName {String} First name.
   * @param lastName {String} Last name.
   * @param status {module:model/Contact.StatusEnum} Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed.
   * @param bouncedErrorMessage {String} RFC error message
   * @param totalSent {Number} Total emails sent.
   * @param totalFailed {Number} Total emails failed.
   * @param totalOpened {Number} Total emails opened.
   * @param totalClicked {Number} Total emails clicked
   * @param lastFailedCount {Number} Number of fails in sending to this Contact
   * @param dateUpdated {Date} Last change date
   * @param source {module:model/Contact.SourceEnum} Source of URL of payment
   * @param friendlyErrorMessage {String} RFC error message
   * @param createdFromIP {String} IP address
   * @param consentIP {String} IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent.
   * @param consentTracking {module:model/Contact.ConsentTrackingEnum} 
   * @param notes {String} Free form field of notes
   * @param websiteUrl {String} Website of contact
   * @param customFields {Object.<String, String>} 
   */
  var exports = function(contactScore, dateAdded, email, firstName, lastName, status, bouncedErrorMessage, totalSent, totalFailed, totalOpened, totalClicked, lastFailedCount, dateUpdated, source, friendlyErrorMessage, createdFromIP, consentIP, consentTracking, notes, websiteUrl, customFields) {
    var _this = this;

    _this['ContactScore'] = contactScore;
    _this['DateAdded'] = dateAdded;
    _this['Email'] = email;
    _this['FirstName'] = firstName;
    _this['LastName'] = lastName;
    _this['Status'] = status;

    _this['BouncedErrorMessage'] = bouncedErrorMessage;
    _this['TotalSent'] = totalSent;
    _this['TotalFailed'] = totalFailed;
    _this['TotalOpened'] = totalOpened;
    _this['TotalClicked'] = totalClicked;

    _this['LastFailedCount'] = lastFailedCount;
    _this['DateUpdated'] = dateUpdated;
    _this['Source'] = source;

    _this['FriendlyErrorMessage'] = friendlyErrorMessage;
    _this['CreatedFromIP'] = createdFromIP;
    _this['ConsentIP'] = consentIP;

    _this['ConsentTracking'] = consentTracking;

    _this['Notes'] = notes;
    _this['WebsiteUrl'] = websiteUrl;


    _this['CustomFields'] = customFields;
  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ContactScore')) {
        obj['ContactScore'] = ApiClient.convertToType(data['ContactScore'], 'Number');
      }
      if (data.hasOwnProperty('DateAdded')) {
        obj['DateAdded'] = ApiClient.convertToType(data['DateAdded'], 'Date');
      }
      if (data.hasOwnProperty('Email')) {
        obj['Email'] = ApiClient.convertToType(data['Email'], 'String');
      }
      if (data.hasOwnProperty('FirstName')) {
        obj['FirstName'] = ApiClient.convertToType(data['FirstName'], 'String');
      }
      if (data.hasOwnProperty('LastName')) {
        obj['LastName'] = ApiClient.convertToType(data['LastName'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('BouncedErrorCode')) {
        obj['BouncedErrorCode'] = ApiClient.convertToType(data['BouncedErrorCode'], 'Number');
      }
      if (data.hasOwnProperty('BouncedErrorMessage')) {
        obj['BouncedErrorMessage'] = ApiClient.convertToType(data['BouncedErrorMessage'], 'String');
      }
      if (data.hasOwnProperty('TotalSent')) {
        obj['TotalSent'] = ApiClient.convertToType(data['TotalSent'], 'Number');
      }
      if (data.hasOwnProperty('TotalFailed')) {
        obj['TotalFailed'] = ApiClient.convertToType(data['TotalFailed'], 'Number');
      }
      if (data.hasOwnProperty('TotalOpened')) {
        obj['TotalOpened'] = ApiClient.convertToType(data['TotalOpened'], 'Number');
      }
      if (data.hasOwnProperty('TotalClicked')) {
        obj['TotalClicked'] = ApiClient.convertToType(data['TotalClicked'], 'Number');
      }
      if (data.hasOwnProperty('FirstFailedDate')) {
        obj['FirstFailedDate'] = ApiClient.convertToType(data['FirstFailedDate'], 'Date');
      }
      if (data.hasOwnProperty('LastFailedCount')) {
        obj['LastFailedCount'] = ApiClient.convertToType(data['LastFailedCount'], 'Number');
      }
      if (data.hasOwnProperty('DateUpdated')) {
        obj['DateUpdated'] = ApiClient.convertToType(data['DateUpdated'], 'Date');
      }
      if (data.hasOwnProperty('Source')) {
        obj['Source'] = ApiClient.convertToType(data['Source'], 'String');
      }
      if (data.hasOwnProperty('ErrorCode')) {
        obj['ErrorCode'] = ApiClient.convertToType(data['ErrorCode'], 'Number');
      }
      if (data.hasOwnProperty('FriendlyErrorMessage')) {
        obj['FriendlyErrorMessage'] = ApiClient.convertToType(data['FriendlyErrorMessage'], 'String');
      }
      if (data.hasOwnProperty('CreatedFromIP')) {
        obj['CreatedFromIP'] = ApiClient.convertToType(data['CreatedFromIP'], 'String');
      }
      if (data.hasOwnProperty('ConsentIP')) {
        obj['ConsentIP'] = ApiClient.convertToType(data['ConsentIP'], 'String');
      }
      if (data.hasOwnProperty('ConsentDate')) {
        obj['ConsentDate'] = ApiClient.convertToType(data['ConsentDate'], 'Date');
      }
      if (data.hasOwnProperty('ConsentTracking')) {
        obj['ConsentTracking'] = ApiClient.convertToType(data['ConsentTracking'], 'String');
      }
      if (data.hasOwnProperty('UnsubscribedDate')) {
        obj['UnsubscribedDate'] = ApiClient.convertToType(data['UnsubscribedDate'], 'Date');
      }
      if (data.hasOwnProperty('Notes')) {
        obj['Notes'] = ApiClient.convertToType(data['Notes'], 'String');
      }
      if (data.hasOwnProperty('WebsiteUrl')) {
        obj['WebsiteUrl'] = ApiClient.convertToType(data['WebsiteUrl'], 'String');
      }
      if (data.hasOwnProperty('LastOpened')) {
        obj['LastOpened'] = ApiClient.convertToType(data['LastOpened'], 'Date');
      }
      if (data.hasOwnProperty('LastClicked')) {
        obj['LastClicked'] = ApiClient.convertToType(data['LastClicked'], 'Date');
      }
      if (data.hasOwnProperty('CustomFields')) {
        obj['CustomFields'] = ApiClient.convertToType(data['CustomFields'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {Number} ContactScore
   */
  exports.prototype['ContactScore'] = undefined;
  /**
   * Date of creation in YYYY-MM-DDThh:ii:ss format
   * @member {Date} DateAdded
   */
  exports.prototype['DateAdded'] = undefined;
  /**
   * Proper email address.
   * @member {String} Email
   */
  exports.prototype['Email'] = undefined;
  /**
   * First name.
   * @member {String} FirstName
   */
  exports.prototype['FirstName'] = undefined;
  /**
   * Last name.
   * @member {String} LastName
   */
  exports.prototype['LastName'] = undefined;
  /**
   * Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed.
   * @member {module:model/Contact.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * RFC Error code
   * @member {Number} BouncedErrorCode
   */
  exports.prototype['BouncedErrorCode'] = undefined;
  /**
   * RFC error message
   * @member {String} BouncedErrorMessage
   */
  exports.prototype['BouncedErrorMessage'] = undefined;
  /**
   * Total emails sent.
   * @member {Number} TotalSent
   */
  exports.prototype['TotalSent'] = undefined;
  /**
   * Total emails failed.
   * @member {Number} TotalFailed
   */
  exports.prototype['TotalFailed'] = undefined;
  /**
   * Total emails opened.
   * @member {Number} TotalOpened
   */
  exports.prototype['TotalOpened'] = undefined;
  /**
   * Total emails clicked
   * @member {Number} TotalClicked
   */
  exports.prototype['TotalClicked'] = undefined;
  /**
   * Date of first failed message
   * @member {Date} FirstFailedDate
   */
  exports.prototype['FirstFailedDate'] = undefined;
  /**
   * Number of fails in sending to this Contact
   * @member {Number} LastFailedCount
   */
  exports.prototype['LastFailedCount'] = undefined;
  /**
   * Last change date
   * @member {Date} DateUpdated
   */
  exports.prototype['DateUpdated'] = undefined;
  /**
   * Source of URL of payment
   * @member {module:model/Contact.SourceEnum} Source
   */
  exports.prototype['Source'] = undefined;
  /**
   * RFC Error code
   * @member {Number} ErrorCode
   */
  exports.prototype['ErrorCode'] = undefined;
  /**
   * RFC error message
   * @member {String} FriendlyErrorMessage
   */
  exports.prototype['FriendlyErrorMessage'] = undefined;
  /**
   * IP address
   * @member {String} CreatedFromIP
   */
  exports.prototype['CreatedFromIP'] = undefined;
  /**
   * IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent.
   * @member {String} ConsentIP
   */
  exports.prototype['ConsentIP'] = undefined;
  /**
   * Date of consent to send this contact(s) your email. If not provided current date is used for consent.
   * @member {Date} ConsentDate
   */
  exports.prototype['ConsentDate'] = undefined;
  /**
   * @member {module:model/Contact.ConsentTrackingEnum} ConsentTracking
   */
  exports.prototype['ConsentTracking'] = undefined;
  /**
   * Unsubscribed date in YYYY-MM-DD format
   * @member {Date} UnsubscribedDate
   */
  exports.prototype['UnsubscribedDate'] = undefined;
  /**
   * Free form field of notes
   * @member {String} Notes
   */
  exports.prototype['Notes'] = undefined;
  /**
   * Website of contact
   * @member {String} WebsiteUrl
   */
  exports.prototype['WebsiteUrl'] = undefined;
  /**
   * Date this contact last opened an email
   * @member {Date} LastOpened
   */
  exports.prototype['LastOpened'] = undefined;
  /**
   * @member {Date} LastClicked
   */
  exports.prototype['LastClicked'] = undefined;
  /**
   * @member {Object.<String, String>} CustomFields
   */
  exports.prototype['CustomFields'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
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

  /**
   * Allowed values for the <code>Source</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SourceEnum = {
    /**
     * value: "DeliveryApi"
     * @const
     */
    "DeliveryApi": "DeliveryApi",
    /**
     * value: "ManualInput"
     * @const
     */
    "ManualInput": "ManualInput",
    /**
     * value: "FileUpload"
     * @const
     */
    "FileUpload": "FileUpload",
    /**
     * value: "WebForm"
     * @const
     */
    "WebForm": "WebForm",
    /**
     * value: "ContactApi"
     * @const
     */
    "ContactApi": "ContactApi"  };

  /**
   * Allowed values for the <code>ConsentTracking</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ConsentTrackingEnum = {
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown",
    /**
     * value: "Allow"
     * @const
     */
    "Allow": "Allow",
    /**
     * value: "Deny"
     * @const
     */
    "Deny": "Deny"  };


  return exports;
}));

