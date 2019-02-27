# ElasticemailRestfulApi.MoveToListPayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**newListName** | **String** | Name of your list if you want to change it. | 
**statuses** | **[String]** | List of comma separated message statuses: 0 for all, 1 for ReadyToSend, 2 for InProgress, 4 for Bounced, 5 for Sent, 6 for Opened, 7 for Clicked, 8 for Unsubscribed, 9 for Abuse Report | 
**emails** | **[String]** | Comma delimited list of contact emails | 
**allContacts** | **Boolean** | True: Include every Contact in your Account. Otherwise, false | [optional] 
**rule** | **String** | Query used for filtering. | 


<a name="[StatusesEnum]"></a>
## Enum: [StatusesEnum]


* `Transactional` (value: `"Transactional"`)

* `Engaged` (value: `"Engaged"`)

* `Active` (value: `"Active"`)

* `Bounced` (value: `"Bounced"`)

* `Unsubscribed` (value: `"Unsubscribed"`)

* `Abuse` (value: `"Abuse"`)

* `Inactive` (value: `"Inactive"`)

* `Stale` (value: `"Stale"`)

* `NotConfirmed` (value: `"NotConfirmed"`)




