# ElasticemailRestfulApi.CampaignListPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignName** | **String** |  | 
**listName** | **String** | Name of your list. | 
**statuses** | **[String]** | List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report | 


<a name="[StatusesEnum]"></a>
## Enum: [StatusesEnum]


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




