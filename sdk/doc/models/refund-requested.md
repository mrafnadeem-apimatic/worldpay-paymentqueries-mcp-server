
# Refund Requested

*This model accepts additional fields of type unknown.*

## Structure

`RefundRequested`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Worldpay has received your refund request.<br><br>**Value**: `'refundRequested'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `type` | [`Type1 \| undefined`](../../doc/models/type-1.md) | Optional | - |
| `refundReference` | `string \| undefined` | Optional | Your refund reference |
| `value` | [`Value1 \| undefined`](../../doc/models/value-1.md) | Optional | An object that contains the amount and currency requested for refund. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "refundRequested",
  "timestamp": "timestamp2",
  "type": "fullRefund",
  "refundReference": "refundReference4",
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

