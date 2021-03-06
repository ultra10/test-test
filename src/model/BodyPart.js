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
    root.ElasticemailRestfulApi.BodyPart = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BodyPart model module.
   * @module model/BodyPart
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>BodyPart</code>.
   * @alias module:model/BodyPart
   * @class
   * @param contentType {String} Type of the body part (for example 'text/html')
   * @param content {String} Actual content of the body part
   * @param charset {String} 
   * @param encoding {module:model/BodyPart.EncodingEnum} 0 for None, 1 for Raw7Bit, 2 for Raw8Bit, 3 for QuotedPrintable, 4 for Base64 (Default), 5 for Uue note that you can also provide the text version such as \"Raw7Bit\" for value 1. NOTE: Base64 or QuotedPrintable is recommended if you are validating your domain(s) with DKIM.
   */
  var exports = function(contentType, content, charset, encoding) {
    var _this = this;

    _this['ContentType'] = contentType;
    _this['Content'] = content;
    _this['Charset'] = charset;
    _this['Encoding'] = encoding;
  };

  /**
   * Constructs a <code>BodyPart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyPart} obj Optional instance to populate.
   * @return {module:model/BodyPart} The populated <code>BodyPart</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ContentType')) {
        obj['ContentType'] = ApiClient.convertToType(data['ContentType'], 'String');
      }
      if (data.hasOwnProperty('Content')) {
        obj['Content'] = ApiClient.convertToType(data['Content'], 'String');
      }
      if (data.hasOwnProperty('Charset')) {
        obj['Charset'] = ApiClient.convertToType(data['Charset'], 'String');
      }
      if (data.hasOwnProperty('Encoding')) {
        obj['Encoding'] = ApiClient.convertToType(data['Encoding'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of the body part (for example 'text/html')
   * @member {String} ContentType
   */
  exports.prototype['ContentType'] = undefined;
  /**
   * Actual content of the body part
   * @member {String} Content
   */
  exports.prototype['Content'] = undefined;
  /**
   * @member {String} Charset
   */
  exports.prototype['Charset'] = undefined;
  /**
   * 0 for None, 1 for Raw7Bit, 2 for Raw8Bit, 3 for QuotedPrintable, 4 for Base64 (Default), 5 for Uue note that you can also provide the text version such as \"Raw7Bit\" for value 1. NOTE: Base64 or QuotedPrintable is recommended if you are validating your domain(s) with DKIM.
   * @member {module:model/BodyPart.EncodingEnum} Encoding
   */
  exports.prototype['Encoding'] = undefined;


  /**
   * Allowed values for the <code>Encoding</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EncodingEnum = {
    /**
     * value: "UserProvided"
     * @const
     */
    "UserProvided": "UserProvided",
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "Raw7bit"
     * @const
     */
    "Raw7bit": "Raw7bit",
    /**
     * value: "Raw8bit"
     * @const
     */
    "Raw8bit": "Raw8bit",
    /**
     * value: "QuotedPrintable"
     * @const
     */
    "QuotedPrintable": "QuotedPrintable",
    /**
     * value: "Base64"
     * @const
     */
    "Base64": "Base64",
    /**
     * value: "Uue"
     * @const
     */
    "Uue": "Uue"  };


  return exports;
}));


