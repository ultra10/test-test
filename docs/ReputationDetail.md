# ElasticemailRestfulApi.ReputationDetail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impact** | [**ReputationImpact**](ReputationImpact.md) |  | 
**abusePercent** | **Number** | Percent of Complaining users - those, who do not want to receive email from you. | 
**unknownUsersPercent** | **Number** | Percent of Unknown users - users that couldn&#39;t be found | 
**openedPercent** | **Number** |  | 
**clickedPercent** | **Number** |  | 
**averageSpamScore** | **Number** | Penalty from messages marked as spam. | 
**failedSpamPercent** | **Number** | Percent of Bounced users | 
**repEmailsSent** | **Number** | Points from quantity of your emails. | 
**averageReputation** | **Number** | Average reputation. | 
**priceLevelReputation** | **Number** | Actual price level. | 
**nextPriceLevelReputation** | **Number** | Reputation needed to change pricing. | 
**priceLevel** | **String** | Amount of emails sent from this account | 
**trackingDomainValid** | **Boolean** | True, if tracking domain is correctly configured. Otherwise, false. | 
**senderDomainValid** | **Boolean** | True, if sending domain is correctly configured. Otherwise, false. | 


