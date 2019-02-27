# ElasticemailRestfulApi.Recipient

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isSms** | **Boolean** | True, if message is SMS. Otherwise, false | 
**msgID** | **String** | ID number of selected message. | 
**to** | **String** | Ending date for search in YYYY-MM-DDThh:mm:ss format. | 
**status** | **String** | Name of recipient&#39;s status: Submitted, ReadyToSend, WaitingToRetry, Sending, Bounced, Sent, Opened, Clicked, Unsubscribed, AbuseReport | 
**channel** | **String** | Name of selected Channel. | 
**_date** | **String** | Creation date | 
**dateSent** | **String** | Date when the email was sent | 
**dateOpened** | **String** | Date when the email changed the status to &#39;opened&#39; | 
**dateClicked** | **String** | Date when the email changed the status to &#39;clicked&#39; | 
**message** | **String** | Content of message, HTML encoded | 
**showCategory** | **Boolean** | True, if message category should be shown. Otherwise, false | 
**messageCategory** | **String** | Name of message category | 
**messageCategoryID** | **String** | ID of message category | [optional] 
**statusChangeDate** | **String** | Date of last status change. | 
**nextTryOn** | **String** | Date of next try | 
**subject** | **String** | Default subject of email. | 
**fromEmail** | **String** | Default From: email address. | 
**envelopeFrom** | **String** |  | 
**jobID** | **String** | ID of certain mail job | 
**smsUpdateRequired** | **Boolean** | True, if message is a SMS and status is not yet confirmed. Otherwise, false | 
**textMessage** | **String** | Content of message | 
**messageSid** | **String** | Comma separated ID numbers of messages. | 
**contactLastError** | **String** | Recipient&#39;s last bounce error because of which this e-mail was suppressed | 
**iPAddress** | **String** |  | 


<a name="MessageCategoryIDEnum"></a>
## Enum: MessageCategoryIDEnum


* `Unknown` (value: `"Unknown"`)

* `Ignore` (value: `"Ignore"`)

* `Spam` (value: `"Spam"`)

* `BlackListed` (value: `"BlackListed"`)

* `NoMailbox` (value: `"NoMailbox"`)

* `GreyListed` (value: `"GreyListed"`)

* `Throttled` (value: `"Throttled"`)

* `Timeout` (value: `"Timeout"`)

* `ConnectionProblem` (value: `"ConnectionProblem"`)

* `SPFProblem` (value: `"SPFProblem"`)

* `AccountProblem` (value: `"AccountProblem"`)

* `DNSProblem` (value: `"DNSProblem"`)

* `NotDeliveredCancelled` (value: `"NotDeliveredCancelled"`)

* `CodeError` (value: `"CodeError"`)

* `ManualCancel` (value: `"ManualCancel"`)

* `ConnectionTerminated` (value: `"ConnectionTerminated"`)

* `NotDelivered` (value: `"NotDelivered"`)




