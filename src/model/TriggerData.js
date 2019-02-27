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
    root.ElasticemailRestfulApi.TriggerData = factory(root.ElasticemailRestfulApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TriggerData model module.
   * @module model/TriggerData
   * @version 3.0.0b
   */

  /**
   * Constructs a new <code>TriggerData</code>.
   * 
   * @alias module:model/TriggerData
   * @class
   * @param channelName {String} Name of selected channel.
   * @param data {String} Link or Listname
   */
  var exports = function(channelName, data) {
    var _this = this;

    _this['ChannelName'] = channelName;
    _this['Data'] = data;
  };

  /**
   * Constructs a <code>TriggerData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TriggerData} obj Optional instance to populate.
   * @return {module:model/TriggerData} The populated <code>TriggerData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ChannelName')) {
        obj['ChannelName'] = ApiClient.convertToType(data['ChannelName'], 'String');
      }
      if (data.hasOwnProperty('Data')) {
        obj['Data'] = ApiClient.convertToType(data['Data'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of selected channel.
   * @member {String} ChannelName
   */
  exports.prototype['ChannelName'] = undefined;
  /**
   * Link or Listname
   * @member {String} Data
   */
  exports.prototype['Data'] = undefined;



  return exports;
}));


