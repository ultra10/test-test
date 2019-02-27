# ElasticemailRestfulApi.DomainDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **String** | Name of selected domain. | 
**defaultDomain** | **Boolean** | True, if domain is used as default. Otherwise, false, | 
**spf** | **Boolean** | True, if SPF record is verified | 
**dkim** | **Boolean** | True, if DKIM record is verified | 
**MX** | **Boolean** | True, if MX record is verified | 
**DMARC** | **Boolean** |  | 
**isRewriteDomainValid** | **Boolean** | True, if tracking CNAME record is verified | 
**verify** | **Boolean** | True, if verification is available | 
**type** | **String** |  | 
**trackingStatus** | **String** | 0 - Validated successfully, 1 - NotValidated , 2 - Invalid, 3 - Broken (tracking was frequnetly verfied in given period and still is invalid). For statuses: 0, 1, 3 tracking will be verified in normal periods. For status 2 tracking will be verified in high frequent periods. | 
**certificateStatus** | **String** |  | 
**certificateValidationError** | **String** |  | 
**trackingTypeUserRequest** | **String** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `None` (value: `"None"`)

* `Delete` (value: `"Delete"`)

* `Http` (value: `"Http"`)

* `ExternalHttps` (value: `"ExternalHttps"`)

* `InternalCertHttps` (value: `"InternalCertHttps"`)

* `LetsEncryptCert` (value: `"LetsEncryptCert"`)




<a name="TrackingStatusEnum"></a>
## Enum: TrackingStatusEnum


* `Validated` (value: `"Validated"`)

* `NotValidated` (value: `"NotValidated"`)

* `Invalid` (value: `"Invalid"`)

* `Broken` (value: `"Broken"`)




<a name="CertificateStatusEnum"></a>
## Enum: CertificateStatusEnum


* `ErrorOccured` (value: `"ErrorOccured"`)

* `CertNotSet` (value: `"CertNotSet"`)

* `Valid` (value: `"Valid"`)

* `NotValid` (value: `"NotValid"`)




<a name="TrackingTypeUserRequestEnum"></a>
## Enum: TrackingTypeUserRequestEnum


* `None` (value: `"None"`)

* `Delete` (value: `"Delete"`)

* `Http` (value: `"Http"`)

* `ExternalHttps` (value: `"ExternalHttps"`)

* `InternalCertHttps` (value: `"InternalCertHttps"`)

* `LetsEncryptCert` (value: `"LetsEncryptCert"`)




