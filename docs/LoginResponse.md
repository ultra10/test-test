# ElasticemailRestfulApi.LoginResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **String** | ApiKey that gives you access to our SMTP and HTTP API&#39;s. | 
**twoFactorAuthCodeDateCreated** | **Date** |  | [optional] 
**status** | **String** | Name of status: Active, Engaged, Inactive, Abuse, Bounced, Unsubscribed. | 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `UserOrPasswordIncorrect` (value: `"UserOrPasswordIncorrect"`)

* `TwoFactorCodeRequired` (value: `"TwoFactorCodeRequired"`)

* `TwoFactorCodeExpired` (value: `"TwoFactorCodeExpired"`)

* `TwoFactorCodeIncorrect` (value: `"TwoFactorCodeIncorrect"`)

* `Success` (value: `"Success"`)




