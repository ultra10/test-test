# ElasticemailRestfulApi.AccountCore

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publicAccountID** | **String** | Public key for limited access to your account such as contact/add so you can use it safely on public websites. | 
**apiKey** | **String** | ApiKey that gives you access to our SMTP and HTTP API&#39;s. | 
**isSub** | **Boolean** | True, if account is a subaccount. Otherwise, false | 
**isUser** | **Boolean** |  | 
**statusNumber** | **Number** | Number of status: 1 - Active | 
**statusFormatted** | **String** | Account status: Active | 
**paymentFormUrl** | **String** | URL form for payments. | 
**enablePrivateBranding** | **Boolean** | True: Turn on or off ability to send mails under your brand. Otherwise, false | 
**supportLink** | **String** | Address to your support. | 
**privateBrandingUrl** | **String** | Subdomain for your rebranded service | 
**affiliateLink** | **String** | URL for affiliating. | 
**monthlyEmailsSent** | **Number** | Amount of emails sent from this account | [optional] 
**emailCredits** | **Number** | Amount of email credits | 
**pricePerEmail** | **Number** | Amount of emails sent from this account | 
**accountPaymentUrl** | **String** | URL for making payments. | 
**smtp** | **String** | Address of SMTP server. | 
**smtpAlternative** | **String** | Address of alternative SMTP server. | 
**autoCreditStatus** | **String** | Status of automatic payments configuration. | 
**autoCreditLevel** | **Number** | When AutoCreditStatus is Enabled, the credit level that triggers the credit to be recharged. | 
**autoCreditAmount** | **Number** | When AutoCreditStatus is Enabled, the amount of credit to be recharged. | 
**dailySendLimit** | **Number** | Amount of emails account can send daily | 
**dateCreated** | **Date** | Creation date. | 
**linkTracking** | **Boolean** | True, if you have enabled link tracking. Otherwise, false | 
**contentTransferEncoding** | **String** | Type of content encoding | 
**needsSMSVerification** | **Boolean** |  | 


