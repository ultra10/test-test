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
    define(['ApiClient', 'model/EmailStatus', 'model/EmailView'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EmailStatus'), require('./EmailView'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.Email = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.EmailStatus, root.ElasticemailRestfulApi.EmailView);
  }
}(this, function(ApiClient, EmailStatus, EmailView) {
  'use strict';




  /**
   * The Email model module.
   * @module model/Email
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>Email</code>.
   * 
   * @alias module:model/Email
   * @class
   * @param preview {module:model/EmailView} 
   * @param attachments {Array.<File>} Attachment files. These files should be provided with the POST multipart file upload, not directly in the request's URL. Should also include merge CSV file
   * @param status {module:model/EmailStatus} 
   */
  var exports = function(preview, attachments, status) {
    var _this = this;

    _this['Preview'] = preview;
    _this['Attachments'] = attachments;
    _this['Status'] = status;
  };

  /**
   * Constructs a <code>Email</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Email} obj Optional instance to populate.
   * @return {module:model/Email} The populated <code>Email</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Preview')) {
        obj['Preview'] = EmailView.constructFromObject(data['Preview']);
      }
      if (data.hasOwnProperty('Attachments')) {
        obj['Attachments'] = ApiClient.convertToType(data['Attachments'], [File]);
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = EmailStatus.constructFromObject(data['Status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EmailView} Preview
   */
  exports.prototype['Preview'] = undefined;
  /**
   * Attachment files. These files should be provided with the POST multipart file upload, not directly in the request's URL. Should also include merge CSV file
   * @member {Array.<File>} Attachments
   */
  exports.prototype['Attachments'] = undefined;
  /**
   * @member {module:model/EmailStatus} Status
   */
  exports.prototype['Status'] = undefined;



  return exports;
}));


