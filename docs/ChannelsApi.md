# ElasticemailRestfulApi.ChannelsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channelsGet**](ChannelsApi.md#channelsGet) | **GET** /channels | List all of your channels
[**channelsNameCancelPost**](ChannelsApi.md#channelsNameCancelPost) | **POST** /channels/{name}/cancel | Cancel the emails being sent with this channel
[**channelsNameDelete**](ChannelsApi.md#channelsNameDelete) | **DELETE** /channels/{name} | Delete the channel.
[**channelsNameGet**](ChannelsApi.md#channelsNameGet) | **GET** /channels/{name} | Retrieve an existing channel.
[**channelsNamePut**](ChannelsApi.md#channelsNamePut) | **PUT** /channels/{name} | Rename an existing channel.
[**channelsPost**](ChannelsApi.md#channelsPost) | **POST** /channels | Manually add a channel to your account to group email
[**channelsTasksExportGet**](ChannelsApi.md#channelsTasksExportGet) | **GET** /channels/tasks/export | Export selected channels to chosen file format.


<a name="channelsGet"></a>
# **channelsGet**
> [Channel] channelsGet(opts)

List all of your channels

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ChannelsApi();

var opts = { 
  'limit': 0, // Number | Maximum of loaded items.
  'offset': 0 // Number | How many items should be loaded ahead.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.channelsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[Channel]**](Channel.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsNameCancelPost"></a>
# **channelsNameCancelPost**
> channelsNameCancelPost(name)

Cancel the emails being sent with this channel

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ChannelsApi();

var name = "name_example"; // String | The name of the channel to cancel.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.channelsNameCancelPost(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the channel to cancel. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsNameDelete"></a>
# **channelsNameDelete**
> channelsNameDelete(name)

Delete the channel.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ChannelsApi();

var name = "name_example"; // String | The name of the channel to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.channelsNameDelete(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the channel to delete. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsNameGet"></a>
# **channelsNameGet**
> Channel channelsNameGet(name)

Retrieve an existing channel.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ChannelsApi();

var name = "name_example"; // String | The name of the channel to get.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.channelsNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the channel to get. | 

### Return type

[**Channel**](Channel.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsNamePut"></a>
# **channelsNamePut**
> Channel channelsNamePut(name, body)

Rename an existing channel.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ChannelsApi();

var name = "name_example"; // String | The name of the channel to update.

var body = "body_example"; // String | The new name for the channel.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.channelsNamePut(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the channel to update. | 
 **body** | **String**| The new name for the channel. | 

### Return type

[**Channel**](Channel.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsPost"></a>
# **channelsPost**
> Channel channelsPost(body)

Manually add a channel to your account to group email

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ChannelsApi();

var body = "body_example"; // String | Descriptive name of the channel


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.channelsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**| Descriptive name of the channel | 

### Return type

[**Channel**](Channel.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="channelsTasksExportGet"></a>
# **channelsTasksExportGet**
> ExportLink channelsTasksExportGet(channelNames, opts)

Export selected channels to chosen file format.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ChannelsApi();

var channelNames = ["channelNames_example"]; // [String] | List of channel names used for processing

var opts = { 
  'fileFormat': "Csv", // String | Format of the exported file
  'compressionFormat': "None", // String | FileResponse compression format. None or Zip.
  'fileName': "fileName_example" // String | Name of your file.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.channelsTasksExportGet(channelNames, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelNames** | [**[String]**](String.md)| List of channel names used for processing | 
 **fileFormat** | **String**| Format of the exported file | [optional] [default to Csv]
 **compressionFormat** | **String**| FileResponse compression format. None or Zip. | [optional] [default to None]
 **fileName** | **String**| Name of your file. | [optional] 

### Return type

[**ExportLink**](ExportLink.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

