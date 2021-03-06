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
    root.ElasticemailRestfulApi.ReputationImpact = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReputationImpact model module.
   * @module model/ReputationImpact
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ReputationImpact</code>.
   * Overall reputation impact, based on the most important factors.
   * @alias module:model/ReputationImpact
   * @class
   * @param abuse {Number} Abuses - mails sent to user without their consent
   * @param unknownUsers {Number} Users, that could not be reached.
   * @param opened {Number} Number of opened messages
   * @param clicked {Number} Number of clicked messages
   * @param averageSpamScore {Number} Penalty from messages marked as spam.
   * @param serverFilter {Number} Content analysis.
   * @param trackingDomain {Number} Tracking domain.
   * @param senderDomain {Number} Sending domain.
   */
  var exports = function(abuse, unknownUsers, opened, clicked, averageSpamScore, serverFilter, trackingDomain, senderDomain) {
    var _this = this;

    _this['Abuse'] = abuse;
    _this['UnknownUsers'] = unknownUsers;
    _this['Opened'] = opened;
    _this['Clicked'] = clicked;
    _this['AverageSpamScore'] = averageSpamScore;
    _this['ServerFilter'] = serverFilter;
    _this['TrackingDomain'] = trackingDomain;
    _this['SenderDomain'] = senderDomain;
  };

  /**
   * Constructs a <code>ReputationImpact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReputationImpact} obj Optional instance to populate.
   * @return {module:model/ReputationImpact} The populated <code>ReputationImpact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Abuse')) {
        obj['Abuse'] = ApiClient.convertToType(data['Abuse'], 'Number');
      }
      if (data.hasOwnProperty('UnknownUsers')) {
        obj['UnknownUsers'] = ApiClient.convertToType(data['UnknownUsers'], 'Number');
      }
      if (data.hasOwnProperty('Opened')) {
        obj['Opened'] = ApiClient.convertToType(data['Opened'], 'Number');
      }
      if (data.hasOwnProperty('Clicked')) {
        obj['Clicked'] = ApiClient.convertToType(data['Clicked'], 'Number');
      }
      if (data.hasOwnProperty('AverageSpamScore')) {
        obj['AverageSpamScore'] = ApiClient.convertToType(data['AverageSpamScore'], 'Number');
      }
      if (data.hasOwnProperty('ServerFilter')) {
        obj['ServerFilter'] = ApiClient.convertToType(data['ServerFilter'], 'Number');
      }
      if (data.hasOwnProperty('TrackingDomain')) {
        obj['TrackingDomain'] = ApiClient.convertToType(data['TrackingDomain'], 'Number');
      }
      if (data.hasOwnProperty('SenderDomain')) {
        obj['SenderDomain'] = ApiClient.convertToType(data['SenderDomain'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Abuses - mails sent to user without their consent
   * @member {Number} Abuse
   */
  exports.prototype['Abuse'] = undefined;
  /**
   * Users, that could not be reached.
   * @member {Number} UnknownUsers
   */
  exports.prototype['UnknownUsers'] = undefined;
  /**
   * Number of opened messages
   * @member {Number} Opened
   */
  exports.prototype['Opened'] = undefined;
  /**
   * Number of clicked messages
   * @member {Number} Clicked
   */
  exports.prototype['Clicked'] = undefined;
  /**
   * Penalty from messages marked as spam.
   * @member {Number} AverageSpamScore
   */
  exports.prototype['AverageSpamScore'] = undefined;
  /**
   * Content analysis.
   * @member {Number} ServerFilter
   */
  exports.prototype['ServerFilter'] = undefined;
  /**
   * Tracking domain.
   * @member {Number} TrackingDomain
   */
  exports.prototype['TrackingDomain'] = undefined;
  /**
   * Sending domain.
   * @member {Number} SenderDomain
   */
  exports.prototype['SenderDomain'] = undefined;



  return exports;
}));


