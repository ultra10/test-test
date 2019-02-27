# ElasticemailRestfulApi.TasksApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /tasks | Returns a list of all background tasks data.
[**tasksIdDelete**](TasksApi.md#tasksIdDelete) | **DELETE** /tasks/{id} | Delete the specified background task.
[**tasksIdStatusGet**](TasksApi.md#tasksIdStatusGet) | **GET** /tasks/{id}/status | Check the current status of the background task.


<a name="tasksGet"></a>
# **tasksGet**
> [ModelExport] tasksGet(type, opts)

Returns a list of all background tasks data.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TasksApi();

var type = "type_example"; // String | 

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
apiInstance.tasksGet(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[ModelExport]**](ModelExport.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasksIdDelete"></a>
# **tasksIdDelete**
> tasksIdDelete(id)

Delete the specified background task.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TasksApi();

var id = "id_example"; // String | ID of the exported file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tasksIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the exported file | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tasksIdStatusGet"></a>
# **tasksIdStatusGet**
> &#39;String&#39; tasksIdStatusGet(id)

Check the current status of the background task.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TasksApi();

var id = "id_example"; // String | ID of the exported file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksIdStatusGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the exported file | 

### Return type

**&#39;String&#39;**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

