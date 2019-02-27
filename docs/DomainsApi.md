# ElasticemailRestfulApi.DomainsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domainsDomainDelete**](DomainsApi.md#domainsDomainDelete) | **DELETE** /domains/{domain} | Deletes configured domain from account
[**domainsDomainGet**](DomainsApi.md#domainsDomainGet) | **GET** /domains/{domain} | Retrieve a domain configured for this account.
[**domainsDomainPut**](DomainsApi.md#domainsDomainPut) | **PUT** /domains/{domain} | Update the selected Domain
[**domainsDomainVerificationPut**](DomainsApi.md#domainsDomainVerificationPut) | **PUT** /domains/{domain}/verification | Verification of domain records
[**domainsGet**](DomainsApi.md#domainsGet) | **GET** /domains | Lists all domains configured for this account.
[**domainsPost**](DomainsApi.md#domainsPost) | **POST** /domains | Add new domain to account


<a name="domainsDomainDelete"></a>
# **domainsDomainDelete**
> domainsDomainDelete(domain)

Deletes configured domain from account

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.DomainsApi();

var domain = "domain_example"; // String | Name of the given domain


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.domainsDomainDelete(domain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Name of the given domain | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainGet"></a>
# **domainsDomainGet**
> DomainDetail domainsDomainGet(domain)

Retrieve a domain configured for this account.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.DomainsApi();

var domain = "domain_example"; // String | Name of the given domain


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainGet(domain, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Name of the given domain | 

### Return type

[**DomainDetail**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainPut"></a>
# **domainsDomainPut**
> DomainDetail domainsDomainPut(domain, body)

Update the selected Domain

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.DomainsApi();

var domain = "domain_example"; // String | Name of the given domain

var body = new ElasticemailRestfulApi.DomainDetail(); // DomainDetail | Updated Domain resource


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainPut(domain, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Name of the given domain | 
 **body** | [**DomainDetail**](DomainDetail.md)| Updated Domain resource | 

### Return type

[**DomainDetail**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsDomainVerificationPut"></a>
# **domainsDomainVerificationPut**
> DomainDetail domainsDomainVerificationPut(domain, opts)

Verification of domain records

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.DomainsApi();

var domain = "domain_example"; // String | Name of the given domain

var opts = { 
  'body': "body_example" // String | Tracking type used in the Tracking verification
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsDomainVerificationPut(domain, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **domain** | **String**| Name of the given domain | 
 **body** | **String**| Tracking type used in the Tracking verification | [optional] 

### Return type

[**DomainDetail**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsGet"></a>
# **domainsGet**
> [DomainDetail] domainsGet()

Lists all domains configured for this account.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.DomainsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[DomainDetail]**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="domainsPost"></a>
# **domainsPost**
> DomainDetail domainsPost(body)

Add new domain to account

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.DomainsApi();

var body = new ElasticemailRestfulApi.DomainPayload(); // DomainPayload | Domain to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.domainsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DomainPayload**](DomainPayload.md)| Domain to add | 

### Return type

[**DomainDetail**](DomainDetail.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

