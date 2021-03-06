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
    root.ElasticemailRestfulApi.LoginPayload = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LoginPayload model module.
   * @module model/LoginPayload
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>LoginPayload</code>.
   * 
   * @alias module:model/LoginPayload
   * @class
   * @param userName {String} Name of account - email address.
   * @param password {String} Current password.
   * @param twoFactorAuthCode {String} 
   * @param disable2FA {Boolean} 
   */
  var exports = function(userName, password, twoFactorAuthCode, disable2FA) {
    var _this = this;

    _this['UserName'] = userName;
    _this['Password'] = password;
    _this['TwoFactorAuthCode'] = twoFactorAuthCode;
    _this['Disable2FA'] = disable2FA;
  };

  /**
   * Constructs a <code>LoginPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginPayload} obj Optional instance to populate.
   * @return {module:model/LoginPayload} The populated <code>LoginPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('UserName')) {
        obj['UserName'] = ApiClient.convertToType(data['UserName'], 'String');
      }
      if (data.hasOwnProperty('Password')) {
        obj['Password'] = ApiClient.convertToType(data['Password'], 'String');
      }
      if (data.hasOwnProperty('TwoFactorAuthCode')) {
        obj['TwoFactorAuthCode'] = ApiClient.convertToType(data['TwoFactorAuthCode'], 'String');
      }
      if (data.hasOwnProperty('Disable2FA')) {
        obj['Disable2FA'] = ApiClient.convertToType(data['Disable2FA'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Name of account - email address.
   * @member {String} UserName
   */
  exports.prototype['UserName'] = undefined;
  /**
   * Current password.
   * @member {String} Password
   */
  exports.prototype['Password'] = undefined;
  /**
   * @member {String} TwoFactorAuthCode
   */
  exports.prototype['TwoFactorAuthCode'] = undefined;
  /**
   * @member {Boolean} Disable2FA
   */
  exports.prototype['Disable2FA'] = undefined;



  return exports;
}));


