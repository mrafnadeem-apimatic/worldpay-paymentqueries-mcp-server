
# Reversal Requested

*This model accepts additional fields of type unknown.*

## Structure

`ReversalRequested`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Worldpay has received your reversal request.<br><br>**Value**: `'reversalRequested'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `value` | [`Value2 \| undefined`](../../doc/models/value-2.md) | Optional | An object that contains the amount and currency requested for reversal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "reversalRequested",
  "timestamp": "timestamp4",
  "value": {
    "amount": 18,
    "currency": "currency2",
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

