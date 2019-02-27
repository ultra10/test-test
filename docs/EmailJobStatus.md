# ElasticemailRestfulApi.EmailJobStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **String** | ID number of your attachment | 
**status** | **String** | Name of status: submitted, complete, in_progress | 
**recipientsCount** | **Number** |  | 
**failed** | [**[EmailJobFailedStatus]**](EmailJobFailedStatus.md) |  | 
**failedCount** | **Number** | Total emails failed. | 
**sent** | **[String]** |  | 
**sentCount** | **Number** | Total emails sent. | 
**delivered** | **[String]** | Number of delivered messages | 
**deliveredCount** | **Number** |  | 
**pending** | **[String]** |  | 
**pendingCount** | **Number** |  | 
**opened** | **[String]** | Number of opened messages | 
**openedCount** | **Number** | Total emails opened. | 
**clicked** | **[String]** | Number of clicked messages | 
**clickedCount** | **Number** | Total emails clicked | 
**unsubscribed** | **[String]** | Number of unsubscribed messages | 
**unsubscribedCount** | **Number** | Total emails unsubscribed | 
**abuseReports** | **[String]** |  | 
**abuseReportsCount** | **Number** |  | 
**messageIDs** | **[String]** | List of all MessageIDs for this job. | 


