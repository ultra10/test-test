# ElasticemailRestfulApi.SegmentsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**segmentsGet**](SegmentsApi.md#segmentsGet) | **GET** /segments | Lists all your available Segments
[**segmentsNameDelete**](SegmentsApi.md#segmentsNameDelete) | **DELETE** /segments/{name} | Delete existing segment.
[**segmentsNameGet**](SegmentsApi.md#segmentsNameGet) | **GET** /segments/{name} | Lists your available Segment using the provided name
[**segmentsNamePut**](SegmentsApi.md#segmentsNamePut) | **PUT** /segments/{name} | Rename or change RULE for your segment
[**segmentsPost**](SegmentsApi.md#segmentsPost) | **POST** /segments | Create new segment, based on specified RULE.


<a name="segmentsGet"></a>
# **segmentsGet**
> [Segment] segmentsGet(opts)

Lists all your available Segments

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SegmentsApi();

var opts = { 
  'includeHistory': False, // Boolean | True: Include history of last 30 days. Otherwise, false.
  'from': "from_example", // String | From what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format.
  'to': "to_example" // String | To what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.segmentsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeHistory** | **Boolean**| True: Include history of last 30 days. Otherwise, false. | [optional] [default to False]
 **from** | **String**| From what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| To what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format. | [optional] 

### Return type

[**[Segment]**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="segmentsNameDelete"></a>
# **segmentsNameDelete**
> segmentsNameDelete(name)

Delete existing segment.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SegmentsApi();

var name = "name_example"; // String | Name of your segment.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.segmentsNameDelete(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of your segment. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="segmentsNameGet"></a>
# **segmentsNameGet**
> Segment segmentsNameGet(name, opts)

Lists your available Segment using the provided name

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SegmentsApi();

var name = "name_example"; // String | Name of the segment you want to load. Will load all contacts if left empty or the 'All Contacts' name has been provided

var opts = { 
  'includeHistory': False, // Boolean | True: Include history of last 30 days. Otherwise, false.
  'from': "from_example", // String | From what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format.
  'to': "to_example" // String | To what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.segmentsNameGet(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the segment you want to load. Will load all contacts if left empty or the &#39;All Contacts&#39; name has been provided | 
 **includeHistory** | **Boolean**| True: Include history of last 30 days. Otherwise, false. | [optional] [default to False]
 **from** | **String**| From what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| To what date should the segment history be shown. In YYYY-MM-DDThh:mm:ss format. | [optional] 

### Return type

[**Segment**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="segmentsNamePut"></a>
# **segmentsNamePut**
> Segment segmentsNamePut(name, body)

Rename or change RULE for your segment

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SegmentsApi();

var name = "name_example"; // String | Name of your segment.

var body = new ElasticemailRestfulApi.SegmentPayload(); // SegmentPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.segmentsNamePut(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of your segment. | 
 **body** | [**SegmentPayload**](SegmentPayload.md)|  | 

### Return type

[**Segment**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="segmentsPost"></a>
# **segmentsPost**
> Segment segmentsPost(body)

Create new segment, based on specified RULE.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.SegmentsApi();

var body = new ElasticemailRestfulApi.SegmentPayload(); // SegmentPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.segmentsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SegmentPayload**](SegmentPayload.md)|  | 

### Return type

[**Segment**](Segment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

