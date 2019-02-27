# ElasticemailRestfulApi.SubAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publicAccountID** | **String** | Public key for limited access to your account such as contact/add so you can use it safely on public websites. | 
**apiKey** | **String** | ApiKey that gives you access to our SMTP and HTTP API&#39;s. | 
**email** | **String** | Proper email address. | 
**poolName** | **String** | Name of your custom IP Pool to be used in the sending process | 
**lastActivity** | **String** | Date of last activity on account | 
**emailCredits** | **String** | Amount of email credits | 
**requiresEmailCredits** | **Boolean** | True, if account needs credits to send emails. Otherwise, false | 
**monthlyRefillCredits** | **Number** | Amount of credits added to account automatically | 
**enablePrivateIPRequest** | **Boolean** | True, if account can request for private IP on its own. Otherwise, false | 
**totalEmailsSent** | **Number** | Amount of emails sent from this account | 
**unknownUsersPercent** | **Number** | Percent of Unknown users - users that couldn&#39;t be found | 
**abusePercent** | **Number** | Percent of Complaining users - those, who do not want to receive email from you. | 
**failedSpamPercent** | **Number** | Percent of Bounced users | 
**reputation** | **Number** | Numeric reputation | 
**dailySendLimit** | **Number** | Amount of emails account can send daily | 
**status** | **String** | Name of account&#39;s status: Deleted, Disabled, UnderReview, NoPaymentsAllowed, NeverSignedIn, Active, SystemPaused | 
**emailSizeLimit** | **Number** | Maximum size of email including attachments in MB&#39;s | 
**maxContacts** | **Number** | Maximum number of contacts the account can have | 
**sendingPermission** | **String** | Sending permission setting for account | 
**hasModify2FA** | **Boolean** |  | 
**contactsCount** | **Number** |  | 


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




