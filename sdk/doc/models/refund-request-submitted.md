
# Refund Request Submitted

*This model accepts additional fields of type unknown.*

## Structure

`RefundRequestSubmitted`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your refund request was successfully sent for processing.<br><br>**Value**: `'refundRequestSubmitted'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "refundRequestSubmitted",
  "timestamp": "timestamp4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

