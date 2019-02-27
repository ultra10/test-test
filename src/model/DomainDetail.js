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
    root.ElasticemailRestfulApi.DomainDetail = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DomainDetail model module.
   * @module model/DomainDetail
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>DomainDetail</code>.
   * Domain data, with information about domain records.
   * @alias module:model/DomainDetail
   * @class
   * @param domain {String} Name of selected domain.
   * @param defaultDomain {Boolean} True, if domain is used as default. Otherwise, false,
   * @param spf {Boolean} True, if SPF record is verified
   * @param dkim {Boolean} True, if DKIM record is verified
   * @param MX {Boolean} True, if MX record is verified
   * @param DMARC {Boolean} 
   * @param isRewriteDomainValid {Boolean} True, if tracking CNAME record is verified
   * @param verify {Boolean} True, if verification is available
   * @param type {module:model/DomainDetail.TypeEnum} 
   * @param trackingStatus {module:model/DomainDetail.TrackingStatusEnum} 0 - Validated successfully, 1 - NotValidated , 2 - Invalid, 3 - Broken (tracking was frequnetly verfied in given period and still is invalid). For statuses: 0, 1, 3 tracking will be verified in normal periods. For status 2 tracking will be verified in high frequent periods.
   * @param certificateStatus {module:model/DomainDetail.CertificateStatusEnum} 
   * @param certificateValidationError {String} 
   */
  var exports = function(domain, defaultDomain, spf, dkim, MX, DMARC, isRewriteDomainValid, verify, type, trackingStatus, certificateStatus, certificateValidationError) {
    var _this = this;

    _this['Domain'] = domain;
    _this['DefaultDomain'] = defaultDomain;
    _this['Spf'] = spf;
    _this['Dkim'] = dkim;
    _this['MX'] = MX;
    _this['DMARC'] = DMARC;
    _this['IsRewriteDomainValid'] = isRewriteDomainValid;
    _this['Verify'] = verify;
    _this['Type'] = type;
    _this['TrackingStatus'] = trackingStatus;
    _this['CertificateStatus'] = certificateStatus;
    _this['CertificateValidationError'] = certificateValidationError;

  };

  /**
   * Constructs a <code>DomainDetail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DomainDetail} obj Optional instance to populate.
   * @return {module:model/DomainDetail} The populated <code>DomainDetail</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Domain')) {
        obj['Domain'] = ApiClient.convertToType(data['Domain'], 'String');
      }
      if (data.hasOwnProperty('DefaultDomain')) {
        obj['DefaultDomain'] = ApiClient.convertToType(data['DefaultDomain'], 'Boolean');
      }
      if (data.hasOwnProperty('Spf')) {
        obj['Spf'] = ApiClient.convertToType(data['Spf'], 'Boolean');
      }
      if (data.hasOwnProperty('Dkim')) {
        obj['Dkim'] = ApiClient.convertToType(data['Dkim'], 'Boolean');
      }
      if (data.hasOwnProperty('MX')) {
        obj['MX'] = ApiClient.convertToType(data['MX'], 'Boolean');
      }
      if (data.hasOwnProperty('DMARC')) {
        obj['DMARC'] = ApiClient.convertToType(data['DMARC'], 'Boolean');
      }
      if (data.hasOwnProperty('IsRewriteDomainValid')) {
        obj['IsRewriteDomainValid'] = ApiClient.convertToType(data['IsRewriteDomainValid'], 'Boolean');
      }
      if (data.hasOwnProperty('Verify')) {
        obj['Verify'] = ApiClient.convertToType(data['Verify'], 'Boolean');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('TrackingStatus')) {
        obj['TrackingStatus'] = ApiClient.convertToType(data['TrackingStatus'], 'String');
      }
      if (data.hasOwnProperty('CertificateStatus')) {
        obj['CertificateStatus'] = ApiClient.convertToType(data['CertificateStatus'], 'String');
      }
      if (data.hasOwnProperty('CertificateValidationError')) {
        obj['CertificateValidationError'] = ApiClient.convertToType(data['CertificateValidationError'], 'String');
      }
      if (data.hasOwnProperty('TrackingTypeUserRequest')) {
        obj['TrackingTypeUserRequest'] = ApiClient.convertToType(data['TrackingTypeUserRequest'], 'String');
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
   * True, if domain is used as default. Otherwise, false,
   * @member {Boolean} DefaultDomain
   */
  exports.prototype['DefaultDomain'] = undefined;
  /**
   * True, if SPF record is verified
   * @member {Boolean} Spf
   */
  exports.prototype['Spf'] = undefined;
  /**
   * True, if DKIM record is verified
   * @member {Boolean} Dkim
   */
  exports.prototype['Dkim'] = undefined;
  /**
   * True, if MX record is verified
   * @member {Boolean} MX
   */
  exports.prototype['MX'] = undefined;
  /**
   * @member {Boolean} DMARC
   */
  exports.prototype['DMARC'] = undefined;
  /**
   * True, if tracking CNAME record is verified
   * @member {Boolean} IsRewriteDomainValid
   */
  exports.prototype['IsRewriteDomainValid'] = undefined;
  /**
   * True, if verification is available
   * @member {Boolean} Verify
   */
  exports.prototype['Verify'] = undefined;
  /**
   * @member {module:model/DomainDetail.TypeEnum} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * 0 - Validated successfully, 1 - NotValidated , 2 - Invalid, 3 - Broken (tracking was frequnetly verfied in given period and still is invalid). For statuses: 0, 1, 3 tracking will be verified in normal periods. For status 2 tracking will be verified in high frequent periods.
   * @member {module:model/DomainDetail.TrackingStatusEnum} TrackingStatus
   */
  exports.prototype['TrackingStatus'] = undefined;
  /**
   * @member {module:model/DomainDetail.CertificateStatusEnum} CertificateStatus
   */
  exports.prototype['CertificateStatus'] = undefined;
  /**
   * @member {String} CertificateValidationError
   */
  exports.prototype['CertificateValidationError'] = undefined;
  /**
   * @member {module:model/DomainDetail.TrackingTypeUserRequestEnum} TrackingTypeUserRequest
   */
  exports.prototype['TrackingTypeUserRequest'] = undefined;


  /**
   * Allowed values for the <code>Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
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

  /**
   * Allowed values for the <code>TrackingStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TrackingStatusEnum = {
    /**
     * value: "Validated"
     * @const
     */
    "Validated": "Validated",
    /**
     * value: "NotValidated"
     * @const
     */
    "NotValidated": "NotValidated",
    /**
     * value: "Invalid"
     * @const
     */
    "Invalid": "Invalid",
    /**
     * value: "Broken"
     * @const
     */
    "Broken": "Broken"  };

  /**
   * Allowed values for the <code>CertificateStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.CertificateStatusEnum = {
    /**
     * value: "ErrorOccured"
     * @const
     */
    "ErrorOccured": "ErrorOccured",
    /**
     * value: "CertNotSet"
     * @const
     */
    "CertNotSet": "CertNotSet",
    /**
     * value: "Valid"
     * @const
     */
    "Valid": "Valid",
    /**
     * value: "NotValid"
     * @const
     */
    "NotValid": "NotValid"  };

  /**
   * Allowed values for the <code>TrackingTypeUserRequest</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TrackingTypeUserRequestEnum = {
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


