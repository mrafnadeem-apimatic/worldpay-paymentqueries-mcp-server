
# Reversal Request Submitted

*This model accepts additional fields of type unknown.*

## Structure

`ReversalRequestSubmitted`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your reversal request was successfully sent for processing.<br><br>**Value**: `'reversalRequestSubmitted'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "reversalRequestSubmitted",
  "timestamp": "timestamp8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

