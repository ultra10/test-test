# ElasticemailRestfulApi.EmailsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**emailsMergePost**](EmailsApi.md#emailsMergePost) | **POST** /emails/merge | Send bulk merge email
[**emailsMsgidViewGet**](EmailsApi.md#emailsMsgidViewGet) | **GET** /emails/{msgid}/view | View email
[**emailsTransactionalPost**](EmailsApi.md#emailsTransactionalPost) | **POST** /emails/transactional | Send transactional message (recipients will be known to each other)
[**emailsTransactionidCancelPost**](EmailsApi.md#emailsTransactionidCancelPost) | **POST** /emails/{transactionid}/cancel | Cancels emails that are waiting to be sent.
[**emailsTransactionidStatusGet**](EmailsApi.md#emailsTransactionidStatusGet) | **GET** /emails/{transactionid}/status | Get email batch status


<a name="emailsMergePost"></a>
# **emailsMergePost**
> EmailSend emailsMergePost(body)

Send bulk merge email

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.EmailsApi();

var body = new ElasticemailRestfulApi.EmailMergeMessage(); // EmailMergeMessage | Content of message, HTML encoded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailsMergePost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailMergeMessage**](EmailMergeMessage.md)| Content of message, HTML encoded | 

### Return type

[**EmailSend**](EmailSend.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailsMsgidViewGet"></a>
# **emailsMsgidViewGet**
> Email emailsMsgidViewGet(msgid)

View email

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.EmailsApi();

var msgid = "msgid_example"; // String | Message identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailsMsgidViewGet(msgid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **msgid** | **String**| Message identifier | 

### Return type

[**Email**](Email.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailsTransactionalPost"></a>
# **emailsTransactionalPost**
> EmailSend emailsTransactionalPost(body)

Send transactional message (recipients will be known to each other)

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.EmailsApi();

var body = new ElasticemailRestfulApi.EmailTransactionalMessage(); // EmailTransactionalMessage | Content of message, HTML encoded


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailsTransactionalPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EmailTransactionalMessage**](EmailTransactionalMessage.md)| Content of message, HTML encoded | 

### Return type

[**EmailSend**](EmailSend.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailsTransactionidCancelPost"></a>
# **emailsTransactionidCancelPost**
> emailsTransactionidCancelPost(transactionid)

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

var apiInstance = new ElasticemailRestfulApi.EmailsApi();

var transactionid = "transactionid_example"; // String | ID number of transaction


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.emailsTransactionidCancelPost(transactionid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionid** | **String**| ID number of transaction | 

### Return type

null (empty response body)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailsTransactionidStatusGet"></a>
# **emailsTransactionidStatusGet**
> EmailJobStatus emailsTransactionidStatusGet(transactionid, opts)

Get email batch status

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.EmailsApi();

var transactionid = "transactionid_example"; // String | Transaction identifier

var opts = { 
  'showFailed': False, // Boolean | Include Bounced email addresses.
  'showSent': False, // Boolean | Include Sent email addresses.
  'showDelivered': False, // Boolean | Include all delivered email addresses.
  'showPending': False, // Boolean | Include Ready to send email addresses.
  'showOpened': False, // Boolean | Include Opened email addresses.
  'showClicked': False, // Boolean | Include Clicked email addresses.
  'showAbuse': False, // Boolean | Include Reported as abuse email addresses.
  'showUnsubscribed': False, // Boolean | Include Unsubscribed email addresses.
  'showErrors': False, // Boolean | Include error messages for bounced emails.
  'showMessageIDs': False // Boolean | Include all MessageIDs for this transaction
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.emailsTransactionidStatusGet(transactionid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionid** | **String**| Transaction identifier | 
 **showFailed** | **Boolean**| Include Bounced email addresses. | [optional] [default to False]
 **showSent** | **Boolean**| Include Sent email addresses. | [optional] [default to False]
 **showDelivered** | **Boolean**| Include all delivered email addresses. | [optional] [default to False]
 **showPending** | **Boolean**| Include Ready to send email addresses. | [optional] [default to False]
 **showOpened** | **Boolean**| Include Opened email addresses. | [optional] [default to False]
 **showClicked** | **Boolean**| Include Clicked email addresses. | [optional] [default to False]
 **showAbuse** | **Boolean**| Include Reported as abuse email addresses. | [optional] [default to False]
 **showUnsubscribed** | **Boolean**| Include Unsubscribed email addresses. | [optional] [default to False]
 **showErrors** | **Boolean**| Include error messages for bounced emails. | [optional] [default to False]
 **showMessageIDs** | **Boolean**| Include all MessageIDs for this transaction | [optional] [default to False]

### Return type

[**EmailJobStatus**](EmailJobStatus.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

