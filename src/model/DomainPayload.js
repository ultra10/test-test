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
    root.ElasticemailRestfulApi.DomainPayload = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DomainPayload model module.
   * @module model/DomainPayload
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>DomainPayload</code>.
   * @alias module:model/DomainPayload
   * @class
   * @param domain {String} Name of selected domain.
   * @param trackingType {module:model/DomainPayload.TrackingTypeEnum} 
   * @param setAsDefault {Boolean} 
   */
  var exports = function(domain, trackingType, setAsDefault) {
    var _this = this;

    _this['Domain'] = domain;
    _this['TrackingType'] = trackingType;
    _this['SetAsDefault'] = setAsDefault;
  };

  /**
   * Constructs a <code>DomainPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainPayload} obj Optional instance to populate.
   * @return {module:model/DomainPayload} The populated <code>DomainPayload</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Domain')) {
        obj['Domain'] = ApiClient.convertToType(data['Domain'], 'String');
      }
      if (data.hasOwnProperty('TrackingType')) {
        obj['TrackingType'] = ApiClient.convertToType(data['TrackingType'], 'String');
      }
      if (data.hasOwnProperty('SetAsDefault')) {
        obj['SetAsDefault'] = ApiClient.convertToType(data['SetAsDefault'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Name of selected domain.
   * @member {String} Domain
   */
  exports.prototype['Domain'] = undefined;
  /**
   * @member {module:model/DomainPayload.TrackingTypeEnum} TrackingType
   */
  exports.prototype['TrackingType'] = undefined;
  /**
   * @member {Boolean} SetAsDefault
   */
  exports.prototype['SetAsDefault'] = undefined;


  /**
   * Allowed values for the <code>TrackingType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TrackingTypeEnum = {
    /**
     * value: "None"
     * @const
     */
    "None": "None",
    /**
     * value: "Delete"
     * @const
     */
    "Delete": "Delete",
    /**
     * value: "Http"
     * @const
     */
    "Http": "Http",
    /**
     * value: "ExternalHttps"
     * @const
     */
    "ExternalHttps": "ExternalHttps",
    /**
     * value: "InternalCertHttps"
     * @const
     */
    "InternalCertHttps": "InternalCertHttps",
    /**
     * value: "LetsEncryptCert"
     * @const
     */
    "LetsEncryptCert": "LetsEncryptCert"  };


  return exports;
}));


