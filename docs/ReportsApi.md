# ElasticemailRestfulApi.ReportsApi

All URIs are relative to *https://api.elasticemail.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reportsBouncedGet**](ReportsApi.md#reportsBouncedGet) | **GET** /reports/bounced | Returns bounced logs filtered by specified parameters.
[**reportsEmailcreditsHistoryGet**](ReportsApi.md#reportsEmailcreditsHistoryGet) | **GET** /reports/emailcredits/history | Lists email credits history
[**reportsEventlogGet**](ReportsApi.md#reportsEventlogGet) | **GET** /reports/eventlog | Returns log of delivery events filtered by specified parameters.
[**reportsEventsExportGet**](ReportsApi.md#reportsEventsExportGet) | **GET** /reports/events/export | Export delivery events log information to the specified file format.
[**reportsExportGet**](ReportsApi.md#reportsExportGet) | **GET** /reports/export | Export email log information to the specified file format.
[**reportsGet**](ReportsApi.md#reportsGet) | **GET** /reports | Returns logs filtered by specified parameters.
[**reportsLinktrackingsExportGet**](ReportsApi.md#reportsLinktrackingsExportGet) | **GET** /reports/linktrackings/export | Export detailed link tracking information to the specified file format.
[**reportsNotificationsGet**](ReportsApi.md#reportsNotificationsGet) | **GET** /reports/notifications | Returns notification logs filtered by specified parameters.
[**reportsPaymentsHistoryGet**](ReportsApi.md#reportsPaymentsHistoryGet) | **GET** /reports/payments/history | Lists all payments
[**reportsReferralsGet**](ReportsApi.md#reportsReferralsGet) | **GET** /reports/referrals | Shows information about your referral details
[**reportsReferralsPayoutHistoryGet**](ReportsApi.md#reportsReferralsPayoutHistoryGet) | **GET** /reports/referrals/payout/history | Lists all referral payout history
[**reportsReputationHistoryGet**](ReportsApi.md#reportsReputationHistoryGet) | **GET** /reports/reputation/history | Shows latest changes in your sending reputation
[**reportsSpamchecksHistoryGet**](ReportsApi.md#reportsSpamchecksHistoryGet) | **GET** /reports/spamchecks/history | Returns detailed spam check.
[**reportsSummaryGet**](ReportsApi.md#reportsSummaryGet) | **GET** /reports/summary | Loads summary information about activity in chosen date range.


<a name="reportsBouncedGet"></a>
# **reportsBouncedGet**
> Log reportsBouncedGet(messageCategories, opts)

Returns bounced logs filtered by specified parameters.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var messageCategories = ["messageCategories_example"]; // [String] | 

var opts = { 
  'from': "from_example", // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': "to_example", // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'channelName': "channelName_example", // String | Name of selected channel.
  'limit': 0, // Number | Maximum of loaded items.
  'offset': 0, // Number | How many items should be loaded ahead.
  'includeEmail': True, // Boolean | True: Search includes emails. Otherwise, false.
  'includeSms': True, // Boolean | True: Search includes SMS. Otherwise, false.
  'email': "email_example", // String | Proper email address.
  'ipaddress': "ipaddress_example" // String | Search for recipients that we sent through this IP address
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsBouncedGet(messageCategories, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **messageCategories** | [**[String]**](String.md)|  | 
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **channelName** | **String**| Name of selected channel. | [optional] 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **includeEmail** | **Boolean**| True: Search includes emails. Otherwise, false. | [optional] [default to True]
 **includeSms** | **Boolean**| True: Search includes SMS. Otherwise, false. | [optional] [default to True]
 **email** | **String**| Proper email address. | [optional] 
 **ipaddress** | **String**| Search for recipients that we sent through this IP address | [optional] 

### Return type

[**Log**](Log.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsEmailcreditsHistoryGet"></a>
# **reportsEmailcreditsHistoryGet**
> [EmailCredits] reportsEmailcreditsHistoryGet()

Lists email credits history

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsEmailcreditsHistoryGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[EmailCredits]**](EmailCredits.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsEventlogGet"></a>
# **reportsEventlogGet**
> EventLog reportsEventlogGet(opts)

Returns log of delivery events filtered by specified parameters.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var opts = { 
  'statuses': ["statuses_example"], // [String] | List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
  'from': "from_example", // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': "to_example", // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'channelName': "channelName_example", // String | Name of selected channel.
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
apiInstance.reportsEventlogGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statuses** | [**[String]**](String.md)| List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report | [optional] 
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **channelName** | **String**| Name of selected channel. | [optional] 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**EventLog**](EventLog.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsEventsExportGet"></a>
# **reportsEventsExportGet**
> ExportLink reportsEventsExportGet(opts)

Export delivery events log information to the specified file format.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var opts = { 
  'statuses': ["statuses_example"], // [String] | List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report
  'from': "from_example", // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': "to_example", // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'channelName': "channelName_example", // String | Name of selected channel.
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
apiInstance.reportsEventsExportGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statuses** | [**[String]**](String.md)| List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report | [optional] 
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **channelName** | **String**| Name of selected channel. | [optional] 
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

<a name="reportsExportGet"></a>
# **reportsExportGet**
> ExportLink reportsExportGet(statuses, opts)

Export email log information to the specified file format.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var statuses = ["statuses_example"]; // [String] | List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report

var opts = { 
  'fileFormat': "Csv", // String | Format of the exported file
  'from': "from_example", // String | Start date.
  'to': "to_example", // String | End date.
  'channelName': "channelName_example", // String | Name of selected channel.
  'includeEmail': True, // Boolean | True: Search includes emails. Otherwise, false.
  'includeSms': True, // Boolean | True: Search includes SMS. Otherwise, false.
  'messageCategory': ["messageCategory_example"], // [String] | ID of message category
  'compressionFormat': "None", // String | FileResponse compression format. None or Zip.
  'fileName': "fileName_example", // String | Name of your file.
  'email': "email_example" // String | Proper email address.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsExportGet(statuses, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statuses** | [**[String]**](String.md)| List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report | 
 **fileFormat** | **String**| Format of the exported file | [optional] [default to Csv]
 **from** | **String**| Start date. | [optional] 
 **to** | **String**| End date. | [optional] 
 **channelName** | **String**| Name of selected channel. | [optional] 
 **includeEmail** | **Boolean**| True: Search includes emails. Otherwise, false. | [optional] [default to True]
 **includeSms** | **Boolean**| True: Search includes SMS. Otherwise, false. | [optional] [default to True]
 **messageCategory** | [**[String]**](String.md)| ID of message category | [optional] 
 **compressionFormat** | **String**| FileResponse compression format. None or Zip. | [optional] [default to None]
 **fileName** | **String**| Name of your file. | [optional] 
 **email** | **String**| Proper email address. | [optional] 

### Return type

[**ExportLink**](ExportLink.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsGet"></a>
# **reportsGet**
> Log reportsGet(statuses, opts)

Returns logs filtered by specified parameters.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var statuses = ["statuses_example"]; // [String] | List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report

var opts = { 
  'from': "from_example", // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': "to_example", // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'channelName': "channelName_example", // String | Name of selected channel.
  'limit': 0, // Number | Maximum of loaded items.
  'offset': 0, // Number | How many items should be loaded ahead.
  'includeEmail': True, // Boolean | True: Search includes emails. Otherwise, false.
  'includeSms': True, // Boolean | True: Search includes SMS. Otherwise, false.
  'email': "email_example", // String | Proper email address.
  'ipaddress': "ipaddress_example" // String | Search for recipients that we sent through this IP address
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsGet(statuses, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statuses** | [**[String]**](String.md)| List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report | 
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **channelName** | **String**| Name of selected channel. | [optional] 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **includeEmail** | **Boolean**| True: Search includes emails. Otherwise, false. | [optional] [default to True]
 **includeSms** | **Boolean**| True: Search includes SMS. Otherwise, false. | [optional] [default to True]
 **email** | **String**| Proper email address. | [optional] 
 **ipaddress** | **String**| Search for recipients that we sent through this IP address | [optional] 

### Return type

[**Log**](Log.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsLinktrackingsExportGet"></a>
# **reportsLinktrackingsExportGet**
> ExportLink reportsLinktrackingsExportGet(from, to, opts)

Export detailed link tracking information to the specified file format.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var from = "from_example"; // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.

var to = "to_example"; // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.

var opts = { 
  'channelName': "channelName_example", // String | Name of selected channel.
  'fileFormat': "Csv", // String | Format of the exported file
  'limit': 0, // Number | Maximum of loaded items.
  'offset': 0, // Number | How many items should be loaded ahead.
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
apiInstance.reportsLinktrackingsExportGet(from, to, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | 
 **channelName** | **String**| Name of selected channel. | [optional] 
 **fileFormat** | **String**| Format of the exported file | [optional] [default to Csv]
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **compressionFormat** | **String**| FileResponse compression format. None or Zip. | [optional] [default to None]
 **fileName** | **String**| Name of your file. | [optional] 

### Return type

[**ExportLink**](ExportLink.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsNotificationsGet"></a>
# **reportsNotificationsGet**
> Log reportsNotificationsGet(statuses, opts)

Returns notification logs filtered by specified parameters.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var statuses = ["statuses_example"]; // [String] | List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report

var opts = { 
  'from': "from_example", // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.
  'to': "to_example", // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.
  'limit': 0, // Number | Maximum of loaded items.
  'offset': 0, // Number | How many items should be loaded ahead.
  'notificationType': "All" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsNotificationsGet(statuses, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **statuses** | [**[String]**](String.md)| List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report | 
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | [optional] 
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 0]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]
 **notificationType** | **String**|  | [optional] [default to All]

### Return type

[**Log**](Log.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsPaymentsHistoryGet"></a>
# **reportsPaymentsHistoryGet**
> [Payment] reportsPaymentsHistoryGet(limit, offset, fromDate, toDate)

Lists all payments

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var limit = 56; // Number | Maximum of loaded items.

var offset = 56; // Number | How many items should be loaded ahead.

var fromDate = "fromDate_example"; // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.

var toDate = "toDate_example"; // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsPaymentsHistoryGet(limit, offset, fromDate, toDate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum of loaded items. | 
 **offset** | **Number**| How many items should be loaded ahead. | 
 **fromDate** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | 
 **toDate** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | 

### Return type

[**[Payment]**](Payment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsReferralsGet"></a>
# **reportsReferralsGet**
> Referral reportsReferralsGet()

Shows information about your referral details

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsReferralsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Referral**](Referral.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsReferralsPayoutHistoryGet"></a>
# **reportsReferralsPayoutHistoryGet**
> [Payment] reportsReferralsPayoutHistoryGet()

Lists all referral payout history

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsReferralsPayoutHistoryGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Payment]**](Payment.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsReputationHistoryGet"></a>
# **reportsReputationHistoryGet**
> [ReputationHistory] reportsReputationHistoryGet(opts)

Shows latest changes in your sending reputation

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var opts = { 
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
apiInstance.reportsReputationHistoryGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 20]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[ReputationHistory]**](ReputationHistory.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsSpamchecksHistoryGet"></a>
# **reportsSpamchecksHistoryGet**
> [SpamCheck] reportsSpamchecksHistoryGet(opts)

Returns detailed spam check.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var opts = { 
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
apiInstance.reportsSpamchecksHistoryGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Maximum of loaded items. | [optional] [default to 20]
 **offset** | **Number**| How many items should be loaded ahead. | [optional] [default to 0]

### Return type

[**[SpamCheck]**](SpamCheck.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reportsSummaryGet"></a>
# **reportsSummaryGet**
> LogSummary reportsSummaryGet(from, to, opts)

Loads summary information about activity in chosen date range.

### Example
```javascript
var ElasticemailRestfulApi = require('elasticemail_restful_api');
var defaultClient = ElasticemailRestfulApi.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

var apiInstance = new ElasticemailRestfulApi.ReportsApi();

var from = "from_example"; // String | Starting date for search in YYYY-MM-DDThh:mm:ss format.

var to = "to_example"; // String | Ending date for search in YYYY-MM-DDThh:mm:ss format.

var opts = { 
  'channelName': "channelName_example", // String | Name of selected channel.
  'interval': "Summary", // String | 'Hourly' for detailed information, 'summary' for daily overview
  'transactionID': "transactionID_example" // String | ID number of transaction
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reportsSummaryGet(from, to, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | **String**| Starting date for search in YYYY-MM-DDThh:mm:ss format. | 
 **to** | **String**| Ending date for search in YYYY-MM-DDThh:mm:ss format. | 
 **channelName** | **String**| Name of selected channel. | [optional] 
 **interval** | **String**| &#39;Hourly&#39; for detailed information, &#39;summary&#39; for daily overview | [optional] [default to Summary]
 **transactionID** | **String**| ID number of transaction | [optional] 

### Return type

[**LogSummary**](LogSummary.md)

### Authorization

[apikey](../README.md#apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

