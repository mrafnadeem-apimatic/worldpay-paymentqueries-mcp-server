
# Reversal Failed

*This model accepts additional fields of type unknown.*

## Structure

`ReversalFailed`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your reversal request failed.<br><br>**Value**: `'reversalFailed'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "reversalFailed",
  "timestamp": "timestamp4",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

