# ElasticemailRestfulApi.Template

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateType** | **String** | 0 for API connections | 
**name** | **String** | Filename | 
**dateAdded** | **Date** | Date of creation in YYYY-MM-DDThh:ii:ss format | 
**fromEmail** | **String** | Default From: email address. | 
**fromName** | **String** | Default From: name. | 
**body** | [**Body**](Body.md) |  | 
**originalTemplateName** | **String** |  | 
**templateScope** | **String** | Enum: 0 - private, 1 - public, 2 - mockup | 


<a name="TemplateTypeEnum"></a>
## Enum: TemplateTypeEnum


* `RawHTML` (value: `"RawHTML"`)

* `DragDropEditor` (value: `"DragDropEditor"`)




<a name="TemplateScopeEnum"></a>
## Enum: TemplateScopeEnum


* `Private` (value: `"Private"`)

* `Public` (value: `"Public"`)

* `Draft` (value: `"Draft"`)




