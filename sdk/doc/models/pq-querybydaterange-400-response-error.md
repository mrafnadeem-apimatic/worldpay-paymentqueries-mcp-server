
# Pq Querybydaterange 400 Response Error

*This model accepts additional fields of type unknown.*

## Structure

`PqQuerybydaterange400ResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorName` | `string` | Required | The type of error. |
| `message` | `string` | Required | A description of the error. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "errorName": "invalidPageSize",
  "message": "Provided page size is not valid.",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

