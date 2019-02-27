# ElasticemailRestfulApi.ListsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listsFromcampaignPost**](ListsApi.md#listsFromcampaignPost) | **POST** /lists/fromcampaign | Create a new list from the recipients of the given campaign, using the given statuses of Messages
[**listsGet**](ListsApi.md#listsGet) | **GET** /lists | Shows all your existing lists
[**listsListnameContactsDelete**](ListsApi.md#listsListnameContactsDelete) | **DELETE** /lists/{listname}/contacts | Remove selected Contacts from your list
[**listsListnameContactsMovePut**](ListsApi.md#listsListnameContactsMovePut) | **PUT** /lists/{listname}/contacts/move | Move selected contacts from one List to another
[**listsListnameContactsPut**](ListsApi.md#listsListnameContactsPut) | **PUT** /lists/{listname}/contacts | Add existing Contacts to chosen list
[**listsListnameDelete**](ListsApi.md#listsListnameDelete) | **DELETE** /lists/{listname} | Deletes List and removes all the Contacts from it (does not delete Contacts).
[**listsListnameGet**](ListsApi.md#listsListnameGet) | **GET** /lists/{listname} | Returns detailed information about specific list.
[**listsListnamePut**](ListsApi.md#listsListnamePut) | **PUT** /lists/{listname} | Update existing list
[**listsPost**](ListsApi.md#listsPost) | **POST** /lists | Create new list, based on filtering rule or list of IDs
[**listsRandomPost**](ListsApi.md#listsRandomPost) | **POST** /lists/random | Create a new list with randomized contacts from an existing list or segment


<a name="listsFromcampaignPost"></a>
# **listsFromcampaignPost**
> Array listsFromcampaignPost(body)

Create a new list from the recipients of the given campaign, using the given statuses of Messages

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var body = new ElasticemailRestfulApi.CampaignListPayload(); // CampaignListPayload | Data of the campaign which recipients you want to copy


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsFromcampaignPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CampaignListPayload**](CampaignListPayload.md)| Data of the campaign which recipients you want to copy | 

### Return type

**Array**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsGet"></a>
# **listsGet**
> [Array] listsGet(opts)

Shows all your existing lists

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var opts = { 
  'from': "from_example", // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': "to_example" // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 

### Return type

**[Array]**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsListnameContactsDelete"></a>
# **listsListnameContactsDelete**
> listsListnameContactsDelete(listname, opts)

Remove selected Contacts from your list

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var listname = "listname_example"; // String | Name of your list.

var opts = { 
  'emails': ["emails_example"], // [String] | Comma delimited list of contact emails
  'rule': "rule_example" // String | Query used for filtering.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.listsListnameContactsDelete(listname, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listname** | **String**| Name of your list. | 
 **emails** | [**[String]**](String.md)| Comma delimited list of contact emails | [optional] 
 **rule** | **String**| Query used for filtering. | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsListnameContactsMovePut"></a>
# **listsListnameContactsMovePut**
> Array listsListnameContactsMovePut(listname, body)

Move selected contacts from one List to another

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var listname = "listname_example"; // String | The name of the list from which the contacts will be copied from

var body = new ElasticemailRestfulApi.MoveToListPayload(); // MoveToListPayload | The data of the list to copy the contacts to


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsListnameContactsMovePut(listname, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listname** | **String**| The name of the list from which the contacts will be copied from | 
 **body** | [**MoveToListPayload**](MoveToListPayload.md)| The data of the list to copy the contacts to | 

### Return type

**Array**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsListnameContactsPut"></a>
# **listsListnameContactsPut**
> Array listsListnameContactsPut(listname, body)

Add existing Contacts to chosen list

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var listname = "listname_example"; // String | Name of your list.

var body = new ElasticemailRestfulApi.EmailsPayload(); // EmailsPayload | Comma delimited list of contact emails


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsListnameContactsPut(listname, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listname** | **String**| Name of your list. | 
 **body** | [**EmailsPayload**](EmailsPayload.md)| Comma delimited list of contact emails | 

### Return type

**Array**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsListnameDelete"></a>
# **listsListnameDelete**
> listsListnameDelete(listname)

Deletes List and removes all the Contacts from it (does not delete Contacts).

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var listname = "listname_example"; // String | Name of your list.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.listsListnameDelete(listname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listname** | **String**| Name of your list. | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsListnameGet"></a>
# **listsListnameGet**
> Array listsListnameGet(listname)

Returns detailed information about specific list.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var listname = "listname_example"; // String | Name of your list.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsListnameGet(listname, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listname** | **String**| Name of your list. | 

### Return type

**Array**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsListnamePut"></a>
# **listsListnamePut**
> Array listsListnamePut(listname, body)

Update existing list

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var listname = "listname_example"; // String | Name of your list.

var body = new ElasticemailRestfulApi.ListUpdatePayload(); // ListUpdatePayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsListnamePut(listname, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listname** | **String**| Name of your list. | 
 **body** | [**ListUpdatePayload**](ListUpdatePayload.md)|  | 

### Return type

**Array**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsPost"></a>
# **listsPost**
> Array listsPost(body)

Create new list, based on filtering rule or list of IDs

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var body = new ElasticemailRestfulApi.ListPayload(); // ListPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ListPayload**](ListPayload.md)|  | 

### Return type

**Array**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listsRandomPost"></a>
# **listsRandomPost**
> Array listsRandomPost(body)

Create a new list with randomized contacts from an existing list or segment

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ListsApi();

var body = new ElasticemailRestfulApi.RandomListPayload(); // RandomListPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listsRandomPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RandomListPayload**](RandomListPayload.md)|  | 

### Return type

**Array**

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

