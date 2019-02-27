# ElasticemailRestfulApi.Contact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactScore** | **Number** |  | 
**dateAdded** | **Date** | Date of creation in YYYY-MM-DDThh:ii:ss format | 
**email** | **String** | Proper email address. | 
**firstName** | **String** | First name. | 
**lastName** | **String** | Last name. | 
**status** | **String** | Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed. | 
**bouncedErrorCode** | **Number** | RFC Error code | [optional] 
**bouncedErrorMessage** | **String** | RFC error message | 
**totalSent** | **Number** | Total emails sent. | 
**totalFailed** | **Number** | Total emails failed. | 
**totalOpened** | **Number** | Total emails opened. | 
**totalClicked** | **Number** | Total emails clicked | 
**firstFailedDate** | **Date** | Date of first failed message | [optional] 
**lastFailedCount** | **Number** | Number of fails in sending to this Contact | 
**dateUpdated** | **Date** | Last change date | 
**source** | **String** | Source of URL of payment | 
**errorCode** | **Number** | RFC Error code | [optional] 
**friendlyErrorMessage** | **String** | RFC error message | 
**createdFromIP** | **String** | IP address | 
**consentIP** | **String** | IP address of consent to send this contact(s) your email. If not provided your current public IP address is used for consent. | 
**consentDate** | **Date** | Date of consent to send this contact(s) your email. If not provided current date is used for consent. | [optional] 
**consentTracking** | **String** |  | 
**unsubscribedDate** | **Date** | Unsubscribed date in YYYY-MM-DD format | [optional] 
**notes** | **String** | Free form field of notes | 
**websiteUrl** | **String** | Website of contact | 
**lastOpened** | **Date** | Date this contact last opened an email | [optional] 
**lastClicked** | **Date** |  | [optional] 
**customFields** | **{String: String}** |  | 


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




<a name="SourceEnum"></a>
## Enum: SourceEnum


* `DeliveryApi` (value: `"DeliveryApi"`)

* `ManualInput` (value: `"ManualInput"`)

* `FileUpload` (value: `"FileUpload"`)

* `WebForm` (value: `"WebForm"`)

* `ContactApi` (value: `"ContactApi"`)




<a name="ConsentTrackingEnum"></a>
## Enum: ConsentTrackingEnum


* `Unknown` (value: `"Unknown"`)

* `Allow` (value: `"Allow"`)

* `Deny` (value: `"Deny"`)




