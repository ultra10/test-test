# ElasticemailRestfulApi.ContactUpdatePayload

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | Proper email address. | 
**firstName** | **String** | First name. | 
**activate** | **Boolean** | True, if Contact should be activated. Otherwise, false | [optional] 
**lastName** | **String** | Last name. | 
**field** | **{String: String}** |  | 
**customFields** | **String** | Custom contact field like firstname, lastname, city etc. JSON serialized text like { \&quot;city\&quot;:\&quot;london\&quot; }  | 
**clearRestOfFields** | **Boolean** | States if the fields that were omitted in this request are to be reset or should they be left with their current value | 


