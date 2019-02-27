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
    define(['ApiClient', 'model/ReputationImpact'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReputationImpact'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.ReputationDetail = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.ReputationImpact);
  }
}(this, function(ApiClient, ReputationImpact) {
  'use strict';




  /**
   * The ReputationDetail model module.
   * @module model/ReputationDetail
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>ReputationDetail</code>.
   * Detailed sending reputation of your account.
   * @alias module:model/ReputationDetail
   * @class
   * @param impact {module:model/ReputationImpact} 
   * @param abusePercent {Number} Percent of Complaining users - those, who do not want to receive email from you.
   * @param unknownUsersPercent {Number} Percent of Unknown users - users that couldn't be found
   * @param openedPercent {Number} 
   * @param clickedPercent {Number} 
   * @param averageSpamScore {Number} Penalty from messages marked as spam.
   * @param failedSpamPercent {Number} Percent of Bounced users
   * @param repEmailsSent {Number} Points from quantity of your emails.
   * @param averageReputation {Number} Average reputation.
   * @param priceLevelReputation {Number} Actual price level.
   * @param nextPriceLevelReputation {Number} Reputation needed to change pricing.
   * @param priceLevel {String} Amount of emails sent from this account
   * @param trackingDomainValid {Boolean} True, if tracking domain is correctly configured. Otherwise, false.
   * @param senderDomainValid {Boolean} True, if sending domain is correctly configured. Otherwise, false.
   */
  var exports = function(impact, abusePercent, unknownUsersPercent, openedPercent, clickedPercent, averageSpamScore, failedSpamPercent, repEmailsSent, averageReputation, priceLevelReputation, nextPriceLevelReputation, priceLevel, trackingDomainValid, senderDomainValid) {
    var _this = this;

    _this['Impact'] = impact;
    _this['AbusePercent'] = abusePercent;
    _this['UnknownUsersPercent'] = unknownUsersPercent;
    _this['OpenedPercent'] = openedPercent;
    _this['ClickedPercent'] = clickedPercent;
    _this['AverageSpamScore'] = averageSpamScore;
    _this['FailedSpamPercent'] = failedSpamPercent;
    _this['RepEmailsSent'] = repEmailsSent;
    _this['AverageReputation'] = averageReputation;
    _this['PriceLevelReputation'] = priceLevelReputation;
    _this['NextPriceLevelReputation'] = nextPriceLevelReputation;
    _this['PriceLevel'] = priceLevel;
    _this['TrackingDomainValid'] = trackingDomainValid;
    _this['SenderDomainValid'] = senderDomainValid;
  };

  /**
   * Constructs a <code>ReputationDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReputationDetail} obj Optional instance to populate.
   * @return {module:model/ReputationDetail} The populated <code>ReputationDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Impact')) {
        obj['Impact'] = ReputationImpact.constructFromObject(data['Impact']);
      }
      if (data.hasOwnProperty('AbusePercent')) {
        obj['AbusePercent'] = ApiClient.convertToType(data['AbusePercent'], 'Number');
      }
      if (data.hasOwnProperty('UnknownUsersPercent')) {
        obj['UnknownUsersPercent'] = ApiClient.convertToType(data['UnknownUsersPercent'], 'Number');
      }
      if (data.hasOwnProperty('OpenedPercent')) {
        obj['OpenedPercent'] = ApiClient.convertToType(data['OpenedPercent'], 'Number');
      }
      if (data.hasOwnProperty('ClickedPercent')) {
        obj['ClickedPercent'] = ApiClient.convertToType(data['ClickedPercent'], 'Number');
      }
      if (data.hasOwnProperty('AverageSpamScore')) {
        obj['AverageSpamScore'] = ApiClient.convertToType(data['AverageSpamScore'], 'Number');
      }
      if (data.hasOwnProperty('FailedSpamPercent')) {
        obj['FailedSpamPercent'] = ApiClient.convertToType(data['FailedSpamPercent'], 'Number');
      }
      if (data.hasOwnProperty('RepEmailsSent')) {
        obj['RepEmailsSent'] = ApiClient.convertToType(data['RepEmailsSent'], 'Number');
      }
      if (data.hasOwnProperty('AverageReputation')) {
        obj['AverageReputation'] = ApiClient.convertToType(data['AverageReputation'], 'Number');
      }
      if (data.hasOwnProperty('PriceLevelReputation')) {
        obj['PriceLevelReputation'] = ApiClient.convertToType(data['PriceLevelReputation'], 'Number');
      }
      if (data.hasOwnProperty('NextPriceLevelReputation')) {
        obj['NextPriceLevelReputation'] = ApiClient.convertToType(data['NextPriceLevelReputation'], 'Number');
      }
      if (data.hasOwnProperty('PriceLevel')) {
        obj['PriceLevel'] = ApiClient.convertToType(data['PriceLevel'], 'String');
      }
      if (data.hasOwnProperty('TrackingDomainValid')) {
        obj['TrackingDomainValid'] = ApiClient.convertToType(data['TrackingDomainValid'], 'Boolean');
      }
      if (data.hasOwnProperty('SenderDomainValid')) {
        obj['SenderDomainValid'] = ApiClient.convertToType(data['SenderDomainValid'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ReputationImpact} Impact
   */
  exports.prototype['Impact'] = undefined;
  /**
   * Percent of Complaining users - those, who do not want to receive email from you.
   * @member {Number} AbusePercent
   */
  exports.prototype['AbusePercent'] = undefined;
  /**
   * Percent of Unknown users - users that couldn't be found
   * @member {Number} UnknownUsersPercent
   */
  exports.prototype['UnknownUsersPercent'] = undefined;
  /**
   * @member {Number} OpenedPercent
   */
  exports.prototype['OpenedPercent'] = undefined;
  /**
   * @member {Number} ClickedPercent
   */
  exports.prototype['ClickedPercent'] = undefined;
  /**
   * Penalty from messages marked as spam.
   * @member {Number} AverageSpamScore
   */
  exports.prototype['AverageSpamScore'] = undefined;
  /**
   * Percent of Bounced users
   * @member {Number} FailedSpamPercent
   */
  exports.prototype['FailedSpamPercent'] = undefined;
  /**
   * Points from quantity of your emails.
   * @member {Number} RepEmailsSent
   */
  exports.prototype['RepEmailsSent'] = undefined;
  /**
   * Average reputation.
   * @member {Number} AverageReputation
   */
  exports.prototype['AverageReputation'] = undefined;
  /**
   * Actual price level.
   * @member {Number} PriceLevelReputation
   */
  exports.prototype['PriceLevelReputation'] = undefined;
  /**
   * Reputation needed to change pricing.
   * @member {Number} NextPriceLevelReputation
   */
  exports.prototype['NextPriceLevelReputation'] = undefined;
  /**
   * Amount of emails sent from this account
   * @member {String} PriceLevel
   */
  exports.prototype['PriceLevel'] = undefined;
  /**
   * True, if tracking domain is correctly configured. Otherwise, false.
   * @member {Boolean} TrackingDomainValid
   */
  exports.prototype['TrackingDomainValid'] = undefined;
  /**
   * True, if sending domain is correctly configured. Otherwise, false.
   * @member {Boolean} SenderDomainValid
   */
  exports.prototype['SenderDomainValid'] = undefined;



  return exports;
}));


