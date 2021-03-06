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
    root.ElasticemailRestfulApi.Payment = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Payment model module.
   * @module model/Payment
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Payment</code>.
   * Detailed information about existing money transfers.
   * @alias module:model/Payment
   * @class
   * @param _date {Date} Date in YYYY-MM-DDThh:ii:ss format
   * @param amount {Number} Amount of money in transaction
   * @param source {String} Source of URL of payment
   */
  var exports = function(_date, amount, source) {
    var _this = this;

    _this['Date'] = _date;
    _this['Amount'] = amount;
    _this['Source'] = source;
  };

  /**
   * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payment} obj Optional instance to populate.
   * @return {module:model/Payment} The populated <code>Payment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Date')) {
        obj['Date'] = ApiClient.convertToType(data['Date'], 'Date');
      }
      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('Source')) {
        obj['Source'] = ApiClient.convertToType(data['Source'], 'String');
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
   * Amount of money in transaction
   * @member {Number} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * Source of URL of payment
   * @member {String} Source
   */
  exports.prototype['Source'] = undefined;



  return exports;
}));


