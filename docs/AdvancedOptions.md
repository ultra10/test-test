# ElasticemailRestfulApi.AdvancedOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enableClickTracking** | **Boolean** | True, if you want to track clicks. Otherwise, false | 
**enableLinkClickTracking** | **Boolean** | True, if you want to track by link tracking. Otherwise, false | 
**enableTemplateScripting** | **Boolean** | True, if you want to use template scripting in your emails {{}}. Otherwise, false | 
**autoTextFormat** | **Boolean** | True, if text BODY of message should be created automatically. Otherwise, false | 
**emailNotificationForError** | **Boolean** | True, if you want bounce notifications returned. Otherwise, false | 
**lowCreditNotification** | **Boolean** | True, if you want to receive low credit email notifications. Otherwise, false | 
**isSubAccount** | **Boolean** | True, if this account is a sub-account. Otherwise, false | 
**isOwnedByReseller** | **Boolean** | True, if this account resells Elastic Email. Otherwise, false. | 
**enableUnsubscribeHeader** | **Boolean** | True, if you want to enable list-unsubscribe header. Otherwise, false | 
**manageSubscriptions** | **Boolean** | True, if you want to display your labels on your unsubscribe form. Otherwise, false | 
**manageSubscribedOnly** | **Boolean** | True, if you want to only display labels that the contact is subscribed to on your unsubscribe form. Otherwise, false | 
**transactionalOnUnsubscribe** | **Boolean** | True, if you want to display an option for the contact to opt into transactional email only on your unsubscribe form. Otherwise, false | 
**consentTrackingOnUnsubscribe** | **Boolean** |  | 
**previewMessageID** | **String** |  | 
**allowCustomHeaders** | **Boolean** | True, if you want to apply custom headers to your emails. Otherwise, false | 
**bccEmail** | **String** | Email address to send a copy of all email to. | 
**contentTransferEncoding** | **String** | Type of content encoding | 
**emailNotification** | **String** | True, if you want to receive bounce email notifications. Otherwise, false | 
**notificationsEmails** | **String** | Email addresses to send a copy of all notifications from our system. Separated by semicolon | 
**unsubscribeNotificationEmails** | **String** | Emails, separated by semicolon, to which the notification about contact unsubscribing should be sent to | 
**enableUITooltips** | **Boolean** | True, if account has tooltips active. Otherwise, false | 
**enableContactFeatures** | **Boolean** | True, if you want to use Contact Delivery Tools.  Otherwise, false | 
**logoUrl** | **String** | URL to your logo image. | 
**staleContactScore** | **Number** | (0 means this functionality is NOT enabled) Score, depending on the number of times you have sent to a recipient, at which the given recipient should be moved to the Stale status | 
**staleContactInactiveDays** | **Number** | (0 means this functionality is NOT enabled) Number of days of inactivity for a contact after which the given recipient should be moved to the Stale status | 
**deliveryReason** | **String** | Why your clients are receiving your emails. | 
**tutorialsEnabled** | **Boolean** | True, if you want to enable Dashboard Tutotials | [optional] 


