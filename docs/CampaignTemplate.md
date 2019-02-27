# ElasticemailRestfulApi.CampaignTemplate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Filename | 
**status** | **String** | Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed. | 
**poolname** | **String** | Name of your custom IP Pool to be used in the sending process | 
**templateName** | **String** | Name of template. | 
**UTM** | [**UtmTracking**](UtmTracking.md) |  | 
**body** | [**CampaignBody**](CampaignBody.md) |  | 
**sender** | [**Sender**](Sender.md) |  | 
**attachments** | [**[MessageAttachment]**](MessageAttachment.md) | Attachment files. These files should be provided with the POST multipart file upload, not directly in the request&#39;s URL. Should also include merge CSV file | 


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




