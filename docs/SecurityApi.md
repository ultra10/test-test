# ElasticemailRestfulApi.SecurityApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**securityAccesstokensGet**](SecurityApi.md#securityAccesstokensGet) | **GET** /security/accesstokens | Get AccessToken list.
[**securityAccesstokensNameDelete**](SecurityApi.md#securityAccesstokensNameDelete) | **DELETE** /security/accesstokens/{name} | Permanently delete AccessToken.
[**securityAccesstokensNameGet**](SecurityApi.md#securityAccesstokensNameGet) | **GET** /security/accesstokens/{name} | Get AccessToken.
[**securityAccesstokensNamePut**](SecurityApi.md#securityAccesstokensNamePut) | **PUT** /security/accesstokens/{name} | Edit AccessToken.
[**securityAccesstokensPost**](SecurityApi.md#securityAccesstokensPost) | **POST** /security/accesstokens | Add new AccessToken


<a name="securityAccesstokensGet"></a>
# **securityAccesstokensGet**
> [AccessToken] securityAccesstokensGet()

Get AccessToken list.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SecurityApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityAccesstokensGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AccessToken]**](AccessToken.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="securityAccesstokensNameDelete"></a>
# **securityAccesstokensNameDelete**
> securityAccesstokensNameDelete(name)

Permanently delete AccessToken.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SecurityApi();

var name = "name_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.securityAccesstokensNameDelete(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="securityAccesstokensNameGet"></a>
# **securityAccesstokensNameGet**
> AccessToken securityAccesstokensNameGet(name)

Get AccessToken.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SecurityApi();

var name = "name_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityAccesstokensNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="securityAccesstokensNamePut"></a>
# **securityAccesstokensNamePut**
> AccessToken securityAccesstokensNamePut(name, body)

Edit AccessToken.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SecurityApi();

var name = "name_example"; // String | 

var body = new ElasticemailRestfulApi.AccessToken(); // AccessToken | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityAccesstokensNamePut(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **body** | [**AccessToken**](AccessToken.md)|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="securityAccesstokensPost"></a>
# **securityAccesstokensPost**
> AccessToken securityAccesstokensPost(body)

Add new AccessToken

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SecurityApi();

var body = new ElasticemailRestfulApi.AccessToken(); // AccessToken | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.securityAccesstokensPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AccessToken**](AccessToken.md)|  | 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

