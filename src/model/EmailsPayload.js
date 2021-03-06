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
    root.ElasticemailRestfulApi.EmailsPayload = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmailsPayload model module.
   * @module model/EmailsPayload
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>EmailsPayload</code>.
   * @alias module:model/EmailsPayload
   * @class
   * @param emails {Array.<String>} Comma delimited list of contact emails
   * @param rule {String} Query used for filtering.
   */
  var exports = function(emails, rule) {
    var _this = this;

    _this['Emails'] = emails;

    _this['Rule'] = rule;
  };

  /**
   * Constructs a <code>EmailsPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailsPayload} obj Optional instance to populate.
   * @return {module:model/EmailsPayload} The populated <code>EmailsPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Emails')) {
        obj['Emails'] = ApiClient.convertToType(data['Emails'], ['String']);
      }
      if (data.hasOwnProperty('AllContacts')) {
        obj['AllContacts'] = ApiClient.convertToType(data['AllContacts'], 'Boolean');
      }
      if (data.hasOwnProperty('Rule')) {
        obj['Rule'] = ApiClient.convertToType(data['Rule'], 'String');
      }
    }
    return obj;
  }

  /**
   * Comma delimited list of contact emails
   * @member {Array.<String>} Emails
   */
  exports.prototype['Emails'] = undefined;
  /**
   * True: Include every Contact in your Account. Otherwise, false
   * @member {Boolean} AllContacts
   */
  exports.prototype['AllContacts'] = undefined;
  /**
   * Query used for filtering.
   * @member {String} Rule
   */
  exports.prototype['Rule'] = undefined;



  return exports;
}));


