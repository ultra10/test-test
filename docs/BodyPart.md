# ElasticemailRestfulApi.BodyPart

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contentType** | **String** | Type of the body part (for example &#39;text/html&#39;) | 
**content** | **String** | Actual content of the body part | 
**charset** | **String** |  | 
**encoding** | **String** | 0 for None, 1 for Raw7Bit, 2 for Raw8Bit, 3 for QuotedPrintable, 4 for Base64 (Default), 5 for Uue note that you can also provide the text version such as \&quot;Raw7Bit\&quot; for value 1. NOTE: Base64 or QuotedPrintable is recommended if you are validating your domain(s) with DKIM. | 


<a name="EncodingEnum"></a>
## Enum: EncodingEnum


* `UserProvided` (value: `"UserProvided"`)

* `None` (value: `"None"`)

* `Raw7bit` (value: `"Raw7bit"`)

* `Raw8bit` (value: `"Raw8bit"`)

* `QuotedPrintable` (value: `"QuotedPrintable"`)

* `Base64` (value: `"Base64"`)

* `Uue` (value: `"Uue"`)




