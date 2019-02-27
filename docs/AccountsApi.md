# ElasticemailRestfulApi.AccountsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountsGet**](AccountsApi.md#accountsGet) | **GET** /accounts | Loads your account. Returns detailed information about your account.
[**accountsPut**](AccountsApi.md#accountsPut) | **PUT** /accounts | Update your Account


<a name="accountsGet"></a>
# **accountsGet**
> Account accountsGet()

Loads your account. Returns detailed information about your account.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.AccountsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Account**](Account.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="accountsPut"></a>
# **accountsPut**
> Account accountsPut(body)

Update your Account

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.AccountsApi();

var body = new ElasticemailRestfulApi.Account(); // Account | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountsPut(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Account**](Account.md)|  | 

### Return type

[**Account**](Account.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

