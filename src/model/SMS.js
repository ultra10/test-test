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
    root.ElasticemailRestfulApi.SMS = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SMS model module.
   * @module model/SMS
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>SMS</code>.
   * 
   * @alias module:model/SMS
   * @class
   * @param body {String} Body (text) of your message.
   * @param to {String} Ending date for search in YYYY-MM-DDThh:mm:ss format.
   */
  var exports = function(body, to) {
    var _this = this;

    _this['Body'] = body;
    _this['To'] = to;
  };

  /**
   * Constructs a <code>SMS</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SMS} obj Optional instance to populate.
   * @return {module:model/SMS} The populated <code>SMS</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Body')) {
        obj['Body'] = ApiClient.convertToType(data['Body'], 'String');
      }
      if (data.hasOwnProperty('To')) {
        obj['To'] = ApiClient.convertToType(data['To'], 'String');
      }
    }
    return obj;
  }

  /**
   * Body (text) of your message.
   * @member {String} Body
   */
  exports.prototype['Body'] = undefined;
  /**
   * Ending date for search in YYYY-MM-DDThh:mm:ss format.
   * @member {String} To
   */
  exports.prototype['To'] = undefined;



  return exports;
}));

