# ElasticemailRestfulApi.ContactsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactsDelete**](ContactsApi.md#contactsDelete) | **DELETE** /contacts | Permanantly deletes the contacts provided.  You can provide either a qualified rule or a list of emails (comma separated string).
[**contactsEmailGet**](ContactsApi.md#contactsEmailGet) | **GET** /contacts/{email} | Load detailed contact information
[**contactsEmailHistoryGet**](ContactsApi.md#contactsEmailHistoryGet) | **GET** /contacts/{email}/history | Shows detailed history of chosen Contact.
[**contactsEmailPut**](ContactsApi.md#contactsEmailPut) | **PUT** /contacts/{email} | Update selected contact. Omitted contact&#39;s fields will be reset by default (see the clearRestOfFields parameter)
[**contactsGet**](ContactsApi.md#contactsGet) | **GET** /contacts | List of all contacts. If you have not specified RULE, all Contacts will be listed.
[**contactsPost**](ContactsApi.md#contactsPost) | **POST** /contacts | Add new Contact to one of your Lists.
[**contactsStatsGet**](ContactsApi.md#contactsStatsGet) | **GET** /contacts/stats | Returns number of Contacts, RULE specifies contact Status.
[**contactsTasksExportGet**](ContactsApi.md#contactsTasksExportGet) | **GET** /contacts/tasks/export | Export selected Contacts to file.
[**contactsTasksImportPost**](ContactsApi.md#contactsTasksImportPost) | **POST** /contacts/tasks/import | Upload contacts from a file.


<a name="contactsDelete"></a>
# **contactsDelete**
> contactsDelete(opts)

Permanantly deletes the contacts provided.  You can provide either a qualified rule or a list of emails (comma separated string).

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var opts = { 
  'rule': "rule_example", // String | Query used for filtering.
  'emails': ["emails_example"], // [String] | Comma delimited list of contact emails
  'listNames': ["listNames_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contactsDelete(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | **String**| Query used for filtering. | [optional] 
 **emails** | [**[String]**](String.md)| Comma delimited list of contact emails | [optional] 
 **listNames** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsEmailGet"></a>
# **contactsEmailGet**
> Contact contactsEmailGet(email)

Load detailed contact information

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var email = "email_example"; // String | Proper email address.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactsEmailGet(email, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Proper email address. | 

### Return type

[**Contact**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsEmailHistoryGet"></a>
# **contactsEmailHistoryGet**
> [ContactHistory] contactsEmailHistoryGet(email, opts)

Shows detailed history of chosen Contact.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var email = "email_example"; // String | Proper email address.

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
apiInstance.contactsEmailHistoryGet(email, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Proper email address. | 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[ContactHistory]**](ContactHistory.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsEmailPut"></a>
# **contactsEmailPut**
> Contact contactsEmailPut(email, body)

Update selected contact. Omitted contact&#39;s fields will be reset by default (see the clearRestOfFields parameter)

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var email = "email_example"; // String | Proper email address.

var body = new ElasticemailRestfulApi.ContactUpdatePayload(); // ContactUpdatePayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactsEmailPut(email, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**| Proper email address. | 
 **body** | [**ContactUpdatePayload**](ContactUpdatePayload.md)|  | 

### Return type

[**Contact**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsGet"></a>
# **contactsGet**
> [Contact] contactsGet(opts)

List of all contacts. If you have not specified RULE, all Contacts will be listed.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var opts = { 
  'rule': "rule_example", // String | Query used for filtering.
  'limit': 20, // Number | Maximum of loaded items.
  'offset': 0 // Number | How many items should be loaded ahead.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | **String**| Query used for filtering. | [optional] 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 20]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[Contact]**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsPost"></a>
# **contactsPost**
> [Contact] contactsPost(body)

Add new Contact to one of your Lists.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var body = new ElasticemailRestfulApi.QuickAddPayload(); // QuickAddPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QuickAddPayload**](QuickAddPayload.md)|  | 

### Return type

[**[Contact]**](Contact.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsStatsGet"></a>
# **contactsStatsGet**
> ContactStats contactsStatsGet(opts)

Returns number of Contacts, RULE specifies contact Status.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var opts = { 
  'rule': "rule_example", // String | Query used for filtering.
  'listNames': ["listNames_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactsStatsGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule** | **String**| Query used for filtering. | [optional] 
 **listNames** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ContactStats**](ContactStats.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsTasksExportGet"></a>
# **contactsTasksExportGet**
> ExportLink contactsTasksExportGet(opts)

Export selected Contacts to file.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var opts = { 
  'fileFormat': "Csv", // String | Format of the exported file
  'rule': "rule_example", // String | Query used for filtering.
  'emails': ["emails_example"], // [String] | Comma delimited list of contact emails
  'compressionFormat': "None", // String | FileResponse compression format. None or Zip.
  'fileName': "fileName_example", // String | Name of your file.
  'listNames': ["listNames_example"] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactsTasksExportGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileFormat** | **String**| Format of the exported file | [optional] [default to Csv]
 **rule** | **String**| Query used for filtering. | [optional] 
 **emails** | [**[String]**](String.md)| Comma delimited list of contact emails | [optional] 
 **compressionFormat** | **String**| FileResponse compression format. None or Zip. | [optional] [default to None]
 **fileName** | **String**| Name of your file. | [optional] 
 **listNames** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ExportLink**](ExportLink.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="contactsTasksImportPost"></a>
# **contactsTasksImportPost**
> contactsTasksImportPost(file, opts)

Upload contacts from a file.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ContactsApi();

var file = "/path/to/file.txt"; // File | 

var opts = { 
  'allowUnsubscribe': False, // Boolean | True: Allow unsubscribing from this list. Otherwise, false
  'listName': "listName_example", // String | Name of your list.
  'status': "Active", // String | Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed.
  'consentDate': "consentDate_example", // String | Date of consent to send this contact(s) your email. If not provided current date is used for consent.
  'consentIP': "consentIP_example", // String | IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent.
  'consentTracking': "Unknown" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.contactsTasksImportPost(file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**|  | 
 **allowUnsubscribe** | **Boolean**| True: Allow unsubscribing from this list. Otherwise, false | [optional] [default to False]
 **listName** | **String**| Name of your list. | [optional] 
 **status** | **String**| Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed. | [optional] [default to Active]
 **consentDate** | **String**| Date of consent to send this contact(s) your email. If not provided current date is used for consent. | [optional] 
 **consentIP** | **String**| IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent. | [optional] 
 **consentTracking** | **String**|  | [optional] [default to Unknown]

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

