# ElasticemailRestfulApi.EmailStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from** | **String** | Email address this email was sent from. | 
**to** | **String** | Email address this email was sent to. | 
**_date** | **Date** | Date the email was submitted. | 
**status** | **String** | Value of email&#39;s status | 
**statusName** | **String** | Name of email&#39;s status | 
**statusChangeDate** | **Date** | Date of last status change. | 
**dateSent** | **Date** | Date when the email was sent | 
**dateOpened** | **Date** | Date when the email changed the status to &#39;opened&#39; | [optional] 
**dateClicked** | **Date** | Date when the email changed the status to &#39;clicked&#39; | [optional] 
**errorMessage** | **String** | Detailed error or bounced message. | 
**transactionID** | **String** | ID number of transaction | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `All` (value: `"All"`)

* `ReadyToSend` (value: `"ReadyToSend"`)

* `WaitingToRetry` (value: `"WaitingToRetry"`)

* `Sending` (value: `"Sending"`)

* `Error` (value: `"Error"`)

* `Sent` (value: `"Sent"`)

* `Opened` (value: `"Opened"`)

* `Clicked` (value: `"Clicked"`)

* `Unsubscribed` (value: `"Unsubscribed"`)

* `AbuseReport` (value: `"AbuseReport"`)




