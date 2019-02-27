# ElasticemailRestfulApi.AuthApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authPost**](AuthApi.md#authPost) | **POST** /auth | Log into your account


<a name="authPost"></a>
# **authPost**
> LoginResponse authPost(body)

Log into your account

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');

var apiInstance = new ElasticemailRestfulApi.AuthApi();

var body = new ElasticemailRestfulApi.LoginPayload(); // LoginPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginPayload**](LoginPayload.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

