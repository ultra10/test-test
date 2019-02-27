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
    root.ElasticemailRestfulApi.MessageAttachment = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageAttachment model module.
   * @module model/MessageAttachment
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>MessageAttachment</code>.
   * @alias module:model/MessageAttachment
   * @class
   * @param base64Content {String} 
   * @param name {String} Filename
   * @param contentType {String} 
   */
  var exports = function(base64Content, name, contentType) {
    var _this = this;

    _this['Base64Content'] = base64Content;
    _this['Name'] = name;
    _this['ContentType'] = contentType;
  };

  /**
   * Constructs a <code>MessageAttachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageAttachment} obj Optional instance to populate.
   * @return {module:model/MessageAttachment} The populated <code>MessageAttachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Base64Content')) {
        obj['Base64Content'] = ApiClient.convertToType(data['Base64Content'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('ContentType')) {
        obj['ContentType'] = ApiClient.convertToType(data['ContentType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Base64Content
   */
  exports.prototype['Base64Content'] = undefined;
  /**
   * Filename
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} ContentType
   */
  exports.prototype['ContentType'] = undefined;



  return exports;
}));


