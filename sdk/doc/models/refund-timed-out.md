
# Refund Timed Out

*This model accepts additional fields of type unknown.*

## Structure

`RefundTimedOut`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your refund request timed out.<br><br>**Value**: `'refundTimedOut'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "refundTimedOut",
  "timestamp": "timestamp8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

