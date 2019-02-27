# ElasticemailRestfulApi.TemplatesApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**templatesNameDelete**](TemplatesApi.md#templatesNameDelete) | **DELETE** /templates/{name} | Delete template with the specified ID
[**templatesNameGet**](TemplatesApi.md#templatesNameGet) | **GET** /templates/{name} | Load template with content
[**templatesNamePut**](TemplatesApi.md#templatesNamePut) | **PUT** /templates/{name} | Update existing template, overwriting existing data.
[**templatesPost**](TemplatesApi.md#templatesPost) | **POST** /templates | Create new Template. Needs to be sent using POST method
[**templatesTypeListGet**](TemplatesApi.md#templatesTypeListGet) | **GET** /templates/{type}/list | Load a list of templates of a specified type


<a name="templatesNameDelete"></a>
# **templatesNameDelete**
> templatesNameDelete(name)

Delete template with the specified ID

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TemplatesApi();

var name = "name_example"; // String | Name of template.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.templatesNameDelete(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of template. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templatesNameGet"></a>
# **templatesNameGet**
> Template templatesNameGet(name)

Load template with content

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TemplatesApi();

var name = "name_example"; // String | Name of template.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatesNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of template. | 

### Return type

[**Template**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templatesNamePut"></a>
# **templatesNamePut**
> Template templatesNamePut(name, body, opts)

Update existing template, overwriting existing data.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TemplatesApi();

var name = "name_example"; // String | Name of template.

var body = new ElasticemailRestfulApi.Template(); // Template | 

var opts = { 
  'removeScreenshot': True // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatesNamePut(name, body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of template. | 
 **body** | [**Template**](Template.md)|  | 
 **removeScreenshot** | **Boolean**|  | [optional] [default to True]

### Return type

[**Template**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templatesPost"></a>
# **templatesPost**
> Template templatesPost(body)

Create new Template. Needs to be sent using POST method

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TemplatesApi();

var body = new ElasticemailRestfulApi.Template(); // Template | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatesPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Template**](Template.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="templatesTypeListGet"></a>
# **templatesTypeListGet**
> [Template] templatesTypeListGet(type, opts)

Load a list of templates of a specified type

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.TemplatesApi();

var type = "type_example"; // String | 

var opts = { 
  'limit': 500, // Number | Maximum of loaded items.
  'offset': 0 // Number | How many items should be loaded ahead.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.templatesTypeListGet(type, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**|  | 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 500]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[Template]**](Template.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

