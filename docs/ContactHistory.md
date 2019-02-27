# ElasticemailRestfulApi.ContactHistory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventType** | **String** | Type of event occured on this Contact. | 
**eventTypeValue** | **String** | Numeric code of event occured on this Contact. | 
**eventDate** | **String** | Formatted date of event. | 
**channelName** | **String** | Name of selected channel. | 
**templateName** | **String** | Name of template. | 
**iPAddress** | **String** | IP Address of the event. | 
**country** | **String** | Country of the event. | 
**data** | **String** | Information about the event | 


<a name="EventTypeValueEnum"></a>
## Enum: EventTypeValueEnum


* `Opened` (value: `"Opened"`)

* `Clicked` (value: `"Clicked"`)

* `Bounced` (value: `"Bounced"`)

* `Unsubscribed` (value: `"Unsubscribed"`)

* `Complained` (value: `"Complained"`)

* `Activated` (value: `"Activated"`)

* `TransactionalUnsubscribed` (value: `"TransactionalUnsubscribed"`)

* `ManualStatusChange` (value: `"ManualStatusChange"`)

* `ActivationSent` (value: `"ActivationSent"`)

* `Deleted` (value: `"Deleted"`)




