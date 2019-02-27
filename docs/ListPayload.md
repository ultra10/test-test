# ElasticemailRestfulApi.ListPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listName** | **String** | Name of your list. | 
**createEmptyList** | **Boolean** | True to create an empty list, otherwise false. Ignores rule and emails parameters if provided. | 
**allowUnsubscribe** | **Boolean** | True: Allow unsubscribing from this list. Otherwise, false | 
**emails** | **[String]** | Comma delimited list of contact emails | 
**allContacts** | **Boolean** | True: Include every Contact in your Account. Otherwise, false | [optional] 
**rule** | **String** | Query used for filtering. | 


