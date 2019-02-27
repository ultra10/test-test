# ElasticemailRestfulApi.CampaignsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**campaignsAbsplitGet**](CampaignsApi.md#campaignsAbsplitGet) | **GET** /campaigns/absplit | List all of your A/X campaigns
[**campaignsAbsplitNameDelete**](CampaignsApi.md#campaignsAbsplitNameDelete) | **DELETE** /campaigns/absplit/{name} | 
[**campaignsAbsplitNameGet**](CampaignsApi.md#campaignsAbsplitNameGet) | **GET** /campaigns/absplit/{name} | 
[**campaignsAbsplitNamePut**](CampaignsApi.md#campaignsAbsplitNamePut) | **PUT** /campaigns/absplit/{name} | Updates a previously added campaign.  Only Active and Paused campaigns can be updated.
[**campaignsAbsplitPost**](CampaignsApi.md#campaignsAbsplitPost) | **POST** /campaigns/absplit | 
[**campaignsAllGet**](CampaignsApi.md#campaignsAllGet) | **GET** /campaigns/all | 
[**campaignsAutomatedGet**](CampaignsApi.md#campaignsAutomatedGet) | **GET** /campaigns/automated | List all of your automated campaigns
[**campaignsAutomatedNameDelete**](CampaignsApi.md#campaignsAutomatedNameDelete) | **DELETE** /campaigns/automated/{name} | 
[**campaignsAutomatedNameGet**](CampaignsApi.md#campaignsAutomatedNameGet) | **GET** /campaigns/automated/{name} | 
[**campaignsAutomatedNamePut**](CampaignsApi.md#campaignsAutomatedNamePut) | **PUT** /campaigns/automated/{name} | Updates a previously added campaign.  Only Active and Paused campaigns can be updated.
[**campaignsAutomatedPost**](CampaignsApi.md#campaignsAutomatedPost) | **POST** /campaigns/automated | 
[**campaignsNameCancelPost**](CampaignsApi.md#campaignsNameCancelPost) | **POST** /campaigns/{name}/cancel | Cancels emails that are waiting to be sent.
[**campaignsSendnowGet**](CampaignsApi.md#campaignsSendnowGet) | **GET** /campaigns/sendnow | List all of your instant campaigns
[**campaignsSendnowNameDelete**](CampaignsApi.md#campaignsSendnowNameDelete) | **DELETE** /campaigns/sendnow/{name} | 
[**campaignsSendnowNameGet**](CampaignsApi.md#campaignsSendnowNameGet) | **GET** /campaigns/sendnow/{name} | Retrieves an existing campaign.
[**campaignsSendnowNamePut**](CampaignsApi.md#campaignsSendnowNamePut) | **PUT** /campaigns/sendnow/{name} | Updates a previously added campaign.  Only Active and Paused campaigns can be updated.
[**campaignsSendnowPost**](CampaignsApi.md#campaignsSendnowPost) | **POST** /campaigns/sendnow | 
[**campaignsTasksExportGet**](CampaignsApi.md#campaignsTasksExportGet) | **GET** /campaigns/tasks/export | Export selected campaigns to chosen file format.


<a name="campaignsAbsplitGet"></a>
# **campaignsAbsplitGet**
> [SplitCampaign] campaignsAbsplitGet(opts)

List all of your A/X campaigns

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var opts = { 
  'search': "search_example", // String | Text fragment used for searching.
  'offset': 0, // Number | How many items should be loaded ahead.
  'limit': 0 // Number | Maximum of loaded items.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAbsplitGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Text fragment used for searching. | [optional] 
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]

### Return type

[**[SplitCampaign]**](SplitCampaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAbsplitNameDelete"></a>
# **campaignsAbsplitNameDelete**
> campaignsAbsplitNameDelete(name)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignsAbsplitNameDelete(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAbsplitNameGet"></a>
# **campaignsAbsplitNameGet**
> SplitCampaign campaignsAbsplitNameGet(name)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAbsplitNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 

### Return type

[**SplitCampaign**](SplitCampaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAbsplitNamePut"></a>
# **campaignsAbsplitNamePut**
> SplitCampaign campaignsAbsplitNamePut(name, body)

Updates a previously added campaign.  Only Active and Paused campaigns can be updated.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename

var body = new ElasticemailRestfulApi.SplitCampaign(); // SplitCampaign | Json representation of a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAbsplitNamePut(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 
 **body** | [**SplitCampaign**](SplitCampaign.md)| Json representation of a campaign | 

### Return type

[**SplitCampaign**](SplitCampaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAbsplitPost"></a>
# **campaignsAbsplitPost**
> SplitCampaign campaignsAbsplitPost(body)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var body = new ElasticemailRestfulApi.SplitCampaign(); // SplitCampaign | Json representation of a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAbsplitPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SplitCampaign**](SplitCampaign.md)| Json representation of a campaign | 

### Return type

[**SplitCampaign**](SplitCampaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAllGet"></a>
# **campaignsAllGet**
> [NameTypeCampaign] campaignsAllGet(opts)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var opts = { 
  'search': "search_example", // String | Text fragment used for searching.
  'offset': 0, // Number | How many items should be loaded ahead.
  'limit': 0 // Number | Maximum of loaded items.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAllGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Text fragment used for searching. | [optional] 
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]

### Return type

[**[NameTypeCampaign]**](NameTypeCampaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAutomatedGet"></a>
# **campaignsAutomatedGet**
> [Automated] campaignsAutomatedGet(opts)

List all of your automated campaigns

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var opts = { 
  'search': "search_example", // String | Text fragment used for searching.
  'offset': 0, // Number | How many items should be loaded ahead.
  'limit': 0 // Number | Maximum of loaded items.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAutomatedGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Text fragment used for searching. | [optional] 
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]

### Return type

[**[Automated]**](Automated.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAutomatedNameDelete"></a>
# **campaignsAutomatedNameDelete**
> campaignsAutomatedNameDelete(name)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignsAutomatedNameDelete(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAutomatedNameGet"></a>
# **campaignsAutomatedNameGet**
> Automated campaignsAutomatedNameGet(name)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAutomatedNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 

### Return type

[**Automated**](Automated.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAutomatedNamePut"></a>
# **campaignsAutomatedNamePut**
> Automated campaignsAutomatedNamePut(name, body)

Updates a previously added campaign.  Only Active and Paused campaigns can be updated.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename

var body = new ElasticemailRestfulApi.Automated(); // Automated | Json representation of a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAutomatedNamePut(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 
 **body** | [**Automated**](Automated.md)| Json representation of a campaign | 

### Return type

[**Automated**](Automated.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsAutomatedPost"></a>
# **campaignsAutomatedPost**
> Automated campaignsAutomatedPost(body)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var body = new ElasticemailRestfulApi.Automated(); // Automated | Json representation of a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsAutomatedPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Automated**](Automated.md)| Json representation of a campaign | 

### Return type

[**Automated**](Automated.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsNameCancelPost"></a>
# **campaignsNameCancelPost**
> campaignsNameCancelPost(name)

Cancels emails that are waiting to be sent.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Name of selected channel.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignsNameCancelPost(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of selected channel. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsSendnowGet"></a>
# **campaignsSendnowGet**
> [Campaign] campaignsSendnowGet(opts)

List all of your instant campaigns

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var opts = { 
  'search': "search_example", // String | Text fragment used for searching.
  'offset': 0, // Number | How many items should be loaded ahead.
  'limit': 0 // Number | Maximum of loaded items.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsSendnowGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Text fragment used for searching. | [optional] 
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]

### Return type

[**[Campaign]**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsSendnowNameDelete"></a>
# **campaignsSendnowNameDelete**
> campaignsSendnowNameDelete(name)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.campaignsSendnowNameDelete(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsSendnowNameGet"></a>
# **campaignsSendnowNameGet**
> Campaign campaignsSendnowNameGet(name)

Retrieves an existing campaign.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsSendnowNameGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsSendnowNamePut"></a>
# **campaignsSendnowNamePut**
> Campaign campaignsSendnowNamePut(name, body)

Updates a previously added campaign.  Only Active and Paused campaigns can be updated.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var name = "name_example"; // String | Filename

var body = new ElasticemailRestfulApi.Campaign(); // Campaign | Json representation of a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsSendnowNamePut(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Filename | 
 **body** | [**Campaign**](Campaign.md)| Json representation of a campaign | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsSendnowPost"></a>
# **campaignsSendnowPost**
> Campaign campaignsSendnowPost(body)



### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var body = new ElasticemailRestfulApi.Campaign(); // Campaign | Json representation of a campaign


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.campaignsSendnowPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Campaign**](Campaign.md)| Json representation of a campaign | 

### Return type

[**Campaign**](Campaign.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="campaignsTasksExportGet"></a>
# **campaignsTasksExportGet**
> ExportLink campaignsTasksExportGet(campaignNames, opts)

Export selected campaigns to chosen file format.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.CampaignsApi();

var campaignNames = ["campaignNames_example"]; // [String] | List of campaign names used for processing

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
apiInstance.campaignsTasksExportGet(campaignNames, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignNames** | [**[String]**](String.md)| List of campaign names used for processing | 
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

