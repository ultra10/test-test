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
    define(['ApiClient', 'model/AccountCore', 'model/AccountOverview', 'model/AdvancedOptions', 'model/InboundOptions', 'model/Profile', 'model/ReputationDetail', 'model/UsageData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AccountCore'), require('./AccountOverview'), require('./AdvancedOptions'), require('./InboundOptions'), require('./Profile'), require('./ReputationDetail'), require('./UsageData'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.Account = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.AccountCore, root.ElasticemailRestfulApi.AccountOverview, root.ElasticemailRestfulApi.AdvancedOptions, root.ElasticemailRestfulApi.InboundOptions, root.ElasticemailRestfulApi.Profile, root.ElasticemailRestfulApi.ReputationDetail, root.ElasticemailRestfulApi.UsageData);
  }
}(this, function(ApiClient, AccountCore, AccountOverview, AdvancedOptions, InboundOptions, Profile, ReputationDetail, UsageData) {
  'use strict';




  /**
   * The Account model module.
   * @module model/Account
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Account</code>.
   * 
   * @alias module:model/Account
   * @class
   * @param generalInfo {module:model/AccountCore} 
   * @param profile {module:model/Profile} 
   * @param overview {module:model/AccountOverview} 
   * @param advancedOptions {module:model/AdvancedOptions} 
   * @param inboundOptions {module:model/InboundOptions} 
   * @param reputation {module:model/ReputationDetail} 
   * @param usage {Array.<module:model/UsageData>} Shows usage of your account.
   */
  var exports = function(generalInfo, profile, overview, advancedOptions, inboundOptions, reputation, usage) {
    var _this = this;

    _this['GeneralInfo'] = generalInfo;
    _this['Profile'] = profile;
    _this['Overview'] = overview;
    _this['AdvancedOptions'] = advancedOptions;
    _this['InboundOptions'] = inboundOptions;
    _this['Reputation'] = reputation;
    _this['Usage'] = usage;
  };

  /**
   * Constructs a <code>Account</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Account} obj Optional instance to populate.
   * @return {module:model/Account} The populated <code>Account</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('GeneralInfo')) {
        obj['GeneralInfo'] = AccountCore.constructFromObject(data['GeneralInfo']);
      }
      if (data.hasOwnProperty('Profile')) {
        obj['Profile'] = Profile.constructFromObject(data['Profile']);
      }
      if (data.hasOwnProperty('Overview')) {
        obj['Overview'] = AccountOverview.constructFromObject(data['Overview']);
      }
      if (data.hasOwnProperty('AdvancedOptions')) {
        obj['AdvancedOptions'] = AdvancedOptions.constructFromObject(data['AdvancedOptions']);
      }
      if (data.hasOwnProperty('InboundOptions')) {
        obj['InboundOptions'] = InboundOptions.constructFromObject(data['InboundOptions']);
      }
      if (data.hasOwnProperty('Reputation')) {
        obj['Reputation'] = ReputationDetail.constructFromObject(data['Reputation']);
      }
      if (data.hasOwnProperty('Usage')) {
        obj['Usage'] = ApiClient.convertToType(data['Usage'], [UsageData]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AccountCore} GeneralInfo
   */
  exports.prototype['GeneralInfo'] = undefined;
  /**
   * @member {module:model/Profile} Profile
   */
  exports.prototype['Profile'] = undefined;
  /**
   * @member {module:model/AccountOverview} Overview
   */
  exports.prototype['Overview'] = undefined;
  /**
   * @member {module:model/AdvancedOptions} AdvancedOptions
   */
  exports.prototype['AdvancedOptions'] = undefined;
  /**
   * @member {module:model/InboundOptions} InboundOptions
   */
  exports.prototype['InboundOptions'] = undefined;
  /**
   * @member {module:model/ReputationDetail} Reputation
   */
  exports.prototype['Reputation'] = undefined;
  /**
   * Shows usage of your account.
   * @member {Array.<module:model/UsageData>} Usage
   */
  exports.prototype['Usage'] = undefined;



  return exports;
}));


