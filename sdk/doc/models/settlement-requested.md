
# Settlement Requested

*This model accepts additional fields of type unknown.*

## Structure

`SettlementRequested`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Worldpay has received your settlement request.<br><br>**Value**: `'settlementRequested'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `type` | [`Type \| undefined`](../../doc/models/type.md) | Optional | - |
| `settlementReference` | `string \| undefined` | Optional | Your settlement reference |
| `value` | [`Value \| undefined`](../../doc/models/value.md) | Optional | An object that contains the amount and currency requested for settlement. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "settlementRequested",
  "timestamp": "timestamp6",
  "type": "fullSettlement",
  "settlementReference": "settlementReference0",
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

