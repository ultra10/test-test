# ElasticemailRestfulApi.SubAccountSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Proper email address. | 
**requiresEmailCredits** | **Boolean** | True, if account needs credits to send emails. Otherwise, false | 
**monthlyRefillCredits** | **Number** | Amount of credits added to account automatically | 
**emailSizeLimit** | **Number** | Maximum size of email including attachments in MB&#39;s | 
**dailySendLimit** | **Number** | Amount of emails account can send daily | 
**maxContacts** | **Number** | Maximum number of contacts the account can have | 
**enablePrivateIPRequest** | **Boolean** | True, if account can request for private IP on its own. Otherwise, false | 
**enableContactFeatures** | **Boolean** | True, if you want to use Contact Delivery Tools.  Otherwise, false | 
**sendingPermission** | **String** | Sending permission setting for account | 
**poolName** | **String** | Name of your custom IP Pool to be used in the sending process | 
**publicAccountID** | **String** | Public key for limited access to your account such as contact/add so you can use it safely on public websites. | 
**allow2FA** | **Boolean** |  | [optional] 


<a name="SendingPermissionEnum"></a>
## Enum: SendingPermissionEnum


* `None` (value: `"None"`)

* `Smtp` (value: `"Smtp"`)

* `HttpApi` (value: `"HttpApi"`)

* `SmtpAndHttpApi` (value: `"SmtpAndHttpApi"`)

* `Interface` (value: `"Interface"`)

* `SmtpAndInterface` (value: `"SmtpAndInterface"`)

* `HttpApiAndInterface` (value: `"HttpApiAndInterface"`)

* `UseAccessLevel` (value: `"UseAccessLevel"`)

* `All` (value: `"All"`)




