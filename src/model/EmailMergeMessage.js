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
    define(['ApiClient', 'model/Body', 'model/EncodingSettings', 'model/MergeRecipient', 'model/MessageAttachment', 'model/Options', 'model/Sender', 'model/TrackingOptions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Body'), require('./EncodingSettings'), require('./MergeRecipient'), require('./MessageAttachment'), require('./Options'), require('./Sender'), require('./TrackingOptions'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.EmailMergeMessage = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.Body, root.ElasticemailRestfulApi.EncodingSettings, root.ElasticemailRestfulApi.MergeRecipient, root.ElasticemailRestfulApi.MessageAttachment, root.ElasticemailRestfulApi.Options, root.ElasticemailRestfulApi.Sender, root.ElasticemailRestfulApi.TrackingOptions);
  }
}(this, function(ApiClient, Body, EncodingSettings, MergeRecipient, MessageAttachment, Options, Sender, TrackingOptions) {
  'use strict';




  /**
   * The EmailMergeMessage model module.
   * @module model/EmailMergeMessage
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>EmailMergeMessage</code>.
   * @alias module:model/EmailMergeMessage
   * @class
   * @param recipients {module:model/MergeRecipient} 
   * @param body {module:model/Body} 
   * @param sender {module:model/Sender} 
   * @param templateName {String} Name of template.
   * @param attachments {Array.<module:model/MessageAttachment>} Attachment files. These files should be provided with the POST multipart file upload, not directly in the request's URL. Should also include merge CSV file
   * @param tracking {module:model/TrackingOptions} 
   * @param mergeFields {Object.<String, String>} 
   * @param headers {Object.<String, String>} 
   * @param postback {String} 
   * @param encoding {module:model/EncodingSettings} 
   * @param options {module:model/Options} 
   */
  var exports = function(recipients, body, sender, templateName, attachments, tracking, mergeFields, headers, postback, encoding, options) {
    var _this = this;

    _this['Recipients'] = recipients;
    _this['Body'] = body;
    _this['Sender'] = sender;
    _this['TemplateName'] = templateName;
    _this['Attachments'] = attachments;
    _this['Tracking'] = tracking;
    _this['MergeFields'] = mergeFields;
    _this['Headers'] = headers;
    _this['Postback'] = postback;
    _this['Encoding'] = encoding;
    _this['Options'] = options;
  };

  /**
   * Constructs a <code>EmailMergeMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailMergeMessage} obj Optional instance to populate.
   * @return {module:model/EmailMergeMessage} The populated <code>EmailMergeMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Recipients')) {
        obj['Recipients'] = MergeRecipient.constructFromObject(data['Recipients']);
      }
      if (data.hasOwnProperty('Body')) {
        obj['Body'] = Body.constructFromObject(data['Body']);
      }
      if (data.hasOwnProperty('Sender')) {
        obj['Sender'] = Sender.constructFromObject(data['Sender']);
      }
      if (data.hasOwnProperty('TemplateName')) {
        obj['TemplateName'] = ApiClient.convertToType(data['TemplateName'], 'String');
      }
      if (data.hasOwnProperty('Attachments')) {
        obj['Attachments'] = ApiClient.convertToType(data['Attachments'], [MessageAttachment]);
      }
      if (data.hasOwnProperty('Tracking')) {
        obj['Tracking'] = TrackingOptions.constructFromObject(data['Tracking']);
      }
      if (data.hasOwnProperty('MergeFields')) {
        obj['MergeFields'] = ApiClient.convertToType(data['MergeFields'], {'String': 'String'});
      }
      if (data.hasOwnProperty('Headers')) {
        obj['Headers'] = ApiClient.convertToType(data['Headers'], {'String': 'String'});
      }
      if (data.hasOwnProperty('Postback')) {
        obj['Postback'] = ApiClient.convertToType(data['Postback'], 'String');
      }
      if (data.hasOwnProperty('Encoding')) {
        obj['Encoding'] = EncodingSettings.constructFromObject(data['Encoding']);
      }
      if (data.hasOwnProperty('Options')) {
        obj['Options'] = Options.constructFromObject(data['Options']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MergeRecipient} Recipients
   */
  exports.prototype['Recipients'] = undefined;
  /**
   * @member {module:model/Body} Body
   */
  exports.prototype['Body'] = undefined;
  /**
   * @member {module:model/Sender} Sender
   */
  exports.prototype['Sender'] = undefined;
  /**
   * Name of template.
   * @member {String} TemplateName
   */
  exports.prototype['TemplateName'] = undefined;
  /**
   * Attachment files. These files should be provided with the POST multipart file upload, not directly in the request's URL. Should also include merge CSV file
   * @member {Array.<module:model/MessageAttachment>} Attachments
   */
  exports.prototype['Attachments'] = undefined;
  /**
   * @member {module:model/TrackingOptions} Tracking
   */
  exports.prototype['Tracking'] = undefined;
  /**
   * @member {Object.<String, String>} MergeFields
   */
  exports.prototype['MergeFields'] = undefined;
  /**
   * @member {Object.<String, String>} Headers
   */
  exports.prototype['Headers'] = undefined;
  /**
   * @member {String} Postback
   */
  exports.prototype['Postback'] = undefined;
  /**
   * @member {module:model/EncodingSettings} Encoding
   */
  exports.prototype['Encoding'] = undefined;
  /**
   * @member {module:model/Options} Options
   */
  exports.prototype['Options'] = undefined;



  return exports;
}));


