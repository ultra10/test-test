# ElasticemailRestfulApi.SubaccountsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subaccountsEmailCreditsDelete**](SubaccountsApi.md#subaccountsEmailCreditsDelete) | **DELETE** /subaccounts/{email}/credits | Remove email, template or litmus credits from a sub-account
[**subaccountsEmailCreditsPost**](SubaccountsApi.md#subaccountsEmailCreditsPost) | **POST** /subaccounts/{email}/credits | Add email credits to a sub-account
[**subaccountsEmailDelete**](SubaccountsApi.md#subaccountsEmailDelete) | **DELETE** /subaccounts/{email} | Deletes specified Subaccount
[**subaccountsEmailGet**](SubaccountsApi.md#subaccountsEmailGet) | **GET** /subaccounts/{email} | Retrieve info about one of your subaccounts
[**subaccountsEmailSettingsGet**](SubaccountsApi.md#subaccountsEmailSettingsGet) | **GET** /subaccounts/{email}/settings | Loads settings of subaccount
[**subaccountsEmailSettingsPut**](SubaccountsApi.md#subaccountsEmailSettingsPut) | **PUT** /subaccounts/{email}/settings | Updates settings of specified subaccount
[**subaccountsGet**](SubaccountsApi.md#subaccountsGet) | **GET** /subaccounts | Lists all of your subaccounts
[**subaccountsPost**](SubaccountsApi.md#subaccountsPost) | **POST** /subaccounts | Create new subaccount and provide most important data about it.


<a name="subaccountsEmailCreditsDelete"></a>
# **subaccountsEmailCreditsDelete**
> subaccountsEmailCreditsDelete(notes, email, opts)

Remove email, template or litmus credits from a sub-account

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

var notes = "notes_example"; // String | Specific notes about the transaction

var email = "email_example"; // String | Email address of sub-account

var opts = { 
  'credits': 56, // Number | Amount of credits to remove
  'removeAll': False // Boolean | Remove all credits of this type from sub-account (overrides credits if provided)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.subaccountsEmailCreditsDelete(notes, email, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notes** | **String**| Specific notes about the transaction | 
 **email** | **String**| Email address of sub-account | 
 **credits** | **Number**| Amount of credits to remove | [optional] 
 **removeAll** | **Boolean**| Remove all credits of this type from sub-account (overrides credits if provided) | [optional] [default to False]

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subaccountsEmailCreditsPost"></a>
# **subaccountsEmailCreditsPost**
> subaccountsEmailCreditsPost(body, email)

Add email credits to a sub-account

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

var body = new ElasticemailRestfulApi.SubaccountCreditsPayload(); // SubaccountCreditsPayload | Amount of credits to add

var email = "email_example"; // String | Email address of sub-account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.subaccountsEmailCreditsPost(body, email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubaccountCreditsPayload**](SubaccountCreditsPayload.md)| Amount of credits to add | 
 **email** | **String**| Email address of sub-account | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subaccountsEmailDelete"></a>
# **subaccountsEmailDelete**
> subaccountsEmailDelete(email)

Deletes specified Subaccount

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

var email = "email_example"; // String | Email address of sub-account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.subaccountsEmailDelete(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address of sub-account | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subaccountsEmailGet"></a>
# **subaccountsEmailGet**
> SubAccount subaccountsEmailGet(email)

Retrieve info about one of your subaccounts

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

var email = "email_example"; // String | Email address of sub-account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subaccountsEmailGet(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address of sub-account | 

### Return type

[**SubAccount**](SubAccount.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subaccountsEmailSettingsGet"></a>
# **subaccountsEmailSettingsGet**
> SubAccountSettings subaccountsEmailSettingsGet(email)

Loads settings of subaccount

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

var email = "email_example"; // String | Email address of sub-account


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subaccountsEmailSettingsGet(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address of sub-account | 

### Return type

[**SubAccountSettings**](SubAccountSettings.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subaccountsEmailSettingsPut"></a>
# **subaccountsEmailSettingsPut**
> SubAccountSettings subaccountsEmailSettingsPut(email, body)

Updates settings of specified subaccount

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

var email = "email_example"; // String | Email address of sub-account

var body = new ElasticemailRestfulApi.SubAccountSettings(); // SubAccountSettings | Http notification settings serialized to JSON 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subaccountsEmailSettingsPut(email, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Email address of sub-account | 
 **body** | [**SubAccountSettings**](SubAccountSettings.md)| Http notification settings serialized to JSON  | 

### Return type

[**SubAccountSettings**](SubAccountSettings.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subaccountsGet"></a>
# **subaccountsGet**
> [SubAccount] subaccountsGet(opts)

Lists all of your subaccounts

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

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
apiInstance.subaccountsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[SubAccount]**](SubAccount.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subaccountsPost"></a>
# **subaccountsPost**
> Account subaccountsPost(body)

Create new subaccount and provide most important data about it.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SubaccountsApi();

var body = new ElasticemailRestfulApi.SubaccountPayload(); // SubaccountPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.subaccountsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubaccountPayload**](SubaccountPayload.md)|  | 

### Return type

[**Account**](Account.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

