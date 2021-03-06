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
    define(['ApiClient', 'model/CampaignBody', 'model/MessageAttachment', 'model/Sender', 'model/UtmTracking'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignBody'), require('./MessageAttachment'), require('./Sender'), require('./UtmTracking'));
  } else {
    // Browser globals (root is window)
    if (!root.ElasticemailRestfulApi) {
      root.ElasticemailRestfulApi = {};
    }
    root.ElasticemailRestfulApi.CampaignTemplate = factory(root.ElasticemailRestfulApi.ApiClient, root.ElasticemailRestfulApi.CampaignBody, root.ElasticemailRestfulApi.MessageAttachment, root.ElasticemailRestfulApi.Sender, root.ElasticemailRestfulApi.UtmTracking);
  }
}(this, function(ApiClient, CampaignBody, MessageAttachment, Sender, UtmTracking) {
  'use strict';




  /**
   * The CampaignTemplate model module.
   * @module model/CampaignTemplate
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>CampaignTemplate</code>.
   * @alias module:model/CampaignTemplate
   * @class
   * @param name {String} Filename
   * @param status {module:model/CampaignTemplate.StatusEnum} Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed.
   * @param poolname {String} Name of your custom IP Pool to be used in the sending process
   * @param templateName {String} Name of template.
   * @param UTM {module:model/UtmTracking} 
   * @param body {module:model/CampaignBody} 
   * @param sender {module:model/Sender} 
   * @param attachments {Array.<module:model/MessageAttachment>} Attachment files. These files should be provided with the POST multipart file upload, not directly in the request's URL. Should also include merge CSV file
   */
  var exports = function(name, status, poolname, templateName, UTM, body, sender, attachments) {
    var _this = this;

    _this['Name'] = name;
    _this['Status'] = status;
    _this['Poolname'] = poolname;
    _this['TemplateName'] = templateName;
    _this['UTM'] = UTM;
    _this['Body'] = body;
    _this['Sender'] = sender;
    _this['Attachments'] = attachments;
  };

  /**
   * Constructs a <code>CampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignTemplate} obj Optional instance to populate.
   * @return {module:model/CampaignTemplate} The populated <code>CampaignTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Status')) {
        obj['Status'] = ApiClient.convertToType(data['Status'], 'String');
      }
      if (data.hasOwnProperty('Poolname')) {
        obj['Poolname'] = ApiClient.convertToType(data['Poolname'], 'String');
      }
      if (data.hasOwnProperty('TemplateName')) {
        obj['TemplateName'] = ApiClient.convertToType(data['TemplateName'], 'String');
      }
      if (data.hasOwnProperty('UTM')) {
        obj['UTM'] = UtmTracking.constructFromObject(data['UTM']);
      }
      if (data.hasOwnProperty('Body')) {
        obj['Body'] = CampaignBody.constructFromObject(data['Body']);
      }
      if (data.hasOwnProperty('Sender')) {
        obj['Sender'] = Sender.constructFromObject(data['Sender']);
      }
      if (data.hasOwnProperty('Attachments')) {
        obj['Attachments'] = ApiClient.convertToType(data['Attachments'], [MessageAttachment]);
      }
    }
    return obj;
  }

  /**
   * Filename
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed.
   * @member {module:model/CampaignTemplate.StatusEnum} Status
   */
  exports.prototype['Status'] = undefined;
  /**
   * Name of your custom IP Pool to be used in the sending process
   * @member {String} Poolname
   */
  exports.prototype['Poolname'] = undefined;
  /**
   * Name of template.
   * @member {String} TemplateName
   */
  exports.prototype['TemplateName'] = undefined;
  /**
   * @member {module:model/UtmTracking} UTM
   */
  exports.prototype['UTM'] = undefined;
  /**
   * @member {module:model/CampaignBody} Body
   */
  exports.prototype['Body'] = undefined;
  /**
   * @member {module:model/Sender} Sender
   */
  exports.prototype['Sender'] = undefined;
  /**
   * Attachment files. These files should be provided with the POST multipart file upload, not directly in the request's URL. Should also include merge CSV file
   * @member {Array.<module:model/MessageAttachment>} Attachments
   */
  exports.prototype['Attachments'] = undefined;


  /**
   * Allowed values for the <code>Status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "Deleted"
     * @const
     */
    "Deleted": "Deleted",
    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",
    /**
     * value: "Processing"
     * @const
     */
    "Processing": "Processing",
    /**
     * value: "Sending"
     * @const
     */
    "Sending": "Sending",
    /**
     * value: "Completed"
     * @const
     */
    "Completed": "Completed",
    /**
     * value: "Paused"
     * @const
     */
    "Paused": "Paused",
    /**
     * value: "Cancelled"
     * @const
     */
    "Cancelled": "Cancelled",
    /**
     * value: "Draft"
     * @const
     */
    "Draft": "Draft"  };


  return exports;
}));


