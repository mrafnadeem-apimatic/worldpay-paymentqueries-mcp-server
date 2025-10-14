
# Sale Failed

*This model accepts additional fields of type unknown.*

## Structure

`SaleFailed`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your sale request failed.<br><br>**Value**: `'saleFailed'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `error` | [`Error \| undefined`](../../doc/models/error.md) | Optional | All Failed events return error object with name and message. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "saleFailed",
  "timestamp": "timestamp8",
  "error": {
    "name": "entityIsNotConfigured",
    "message": "Currency not supported",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

