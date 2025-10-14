
# Pq Querybypaymentid 404 Response Error

*This model accepts additional fields of type unknown.*

## Structure

`PqQuerybypaymentid404ResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorName` | `string \| undefined` | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "errorName": "paymentNotFound",
  "message": "The payment you are trying to access does not exist.",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

