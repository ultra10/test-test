# ElasticemailRestfulApi.EmailMergeMessage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipients** | [**MergeRecipient**](MergeRecipient.md) |  | 
**body** | [**Body**](Body.md) |  | 
**sender** | [**Sender**](Sender.md) |  | 
**templateName** | **String** | Name of template. | 
**attachments** | [**[MessageAttachment]**](MessageAttachment.md) | Attachment files. These files should be provided with the POST multipart file upload, not directly in the request&#39;s URL. Should also include merge CSV file | 
**tracking** | [**TrackingOptions**](TrackingOptions.md) |  | 
**mergeFields** | **{String: String}** |  | 
**headers** | **{String: String}** |  | 
**postback** | **String** |  | 
**encoding** | [**EncodingSettings**](EncodingSettings.md) |  | 
**options** | [**Options**](Options.md) |  | 


