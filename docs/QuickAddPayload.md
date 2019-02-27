# ElasticemailRestfulApi.QuickAddPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**[ContactPayload]**](ContactPayload.md) |  | 
**listName** | **String** | Name of your list. | 
**status** | **String** | Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed. | 
**notifyEmail** | **String** | Emails, separated by semicolon, to which the notification about contact subscribing should be sent to | 
**consentDate** | **Date** | Date of consent to send this contact(s) your email. If not provided current date is used for consent. | [optional] 
**consentIP** | **String** | IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent. | 
**consentTracking** | **String** |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Transactional` (value: `"Transactional"`)

* `Engaged` (value: `"Engaged"`)

* `Active` (value: `"Active"`)

* `Bounced` (value: `"Bounced"`)

* `Unsubscribed` (value: `"Unsubscribed"`)

* `Abuse` (value: `"Abuse"`)

* `Inactive` (value: `"Inactive"`)

* `Stale` (value: `"Stale"`)

* `NotConfirmed` (value: `"NotConfirmed"`)




<a name="ConsentTrackingEnum"></a>
## Enum: ConsentTrackingEnum


* `Unknown` (value: `"Unknown"`)

* `Allow` (value: `"Allow"`)

* `Deny` (value: `"Deny"`)




