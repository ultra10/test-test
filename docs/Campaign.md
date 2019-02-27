# ElasticemailRestfulApi.Campaign

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignTemplate** | [**CampaignTemplate**](CampaignTemplate.md) |  | 
**name** | **String** | Filename | 
**status** | **String** | Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed. | 
**targets** | [**CampaignRecipient**](CampaignRecipient.md) |  | 
**trackingOptions** | [**TrackingOptions**](TrackingOptions.md) |  | 
**options** | [**CampaignOptions**](CampaignOptions.md) |  | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `Deleted` (value: `"Deleted"`)

* `Active` (value: `"Active"`)

* `Processing` (value: `"Processing"`)

* `Sending` (value: `"Sending"`)

* `Completed` (value: `"Completed"`)

* `Paused` (value: `"Paused"`)

* `Cancelled` (value: `"Cancelled"`)

* `Draft` (value: `"Draft"`)




