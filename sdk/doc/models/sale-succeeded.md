
# Sale Succeeded

*This model accepts additional fields of type unknown.*

## Structure

`SaleSucceeded`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your authorization request was successfully approved by the card issuer.<br><br>**Value**: `'saleSucceeded'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `outcome` | [`Outcome \| undefined`](../../doc/models/outcome.md) | Optional | Outcome of the event. For every requested event there can be a successful or refused event outcome. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "saleSucceeded",
  "timestamp": "timestamp0",
  "outcome": "authorized",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

