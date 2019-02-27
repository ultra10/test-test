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
    root.ElasticemailRestfulApi.EmailSend = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailSend model module.
   * @module model/EmailSend
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>EmailSend</code>.
   * @alias module:model/EmailSend
   * @class
   * @param transactionID {String} ID number of transaction
   * @param messageID {String} Unique identifier for this email.
   */
  var exports = function(transactionID, messageID) {
    var _this = this;

    _this['TransactionID'] = transactionID;
    _this['MessageID'] = messageID;
  };

  /**
   * Constructs a <code>EmailSend</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailSend} obj Optional instance to populate.
   * @return {module:model/EmailSend} The populated <code>EmailSend</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TransactionID')) {
        obj['TransactionID'] = ApiClient.convertToType(data['TransactionID'], 'String');
      }
      if (data.hasOwnProperty('MessageID')) {
        obj['MessageID'] = ApiClient.convertToType(data['MessageID'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID number of transaction
   * @member {String} TransactionID
   */
  exports.prototype['TransactionID'] = undefined;
  /**
   * Unique identifier for this email.
   * @member {String} MessageID
   */
  exports.prototype['MessageID'] = undefined;



  return exports;
}));

