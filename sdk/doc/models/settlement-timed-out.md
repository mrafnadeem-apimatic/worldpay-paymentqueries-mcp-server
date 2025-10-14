
# Settlement Timed Out

*This model accepts additional fields of type unknown.*

## Structure

`SettlementTimedOut`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your settlement request timed out.<br><br>**Value**: `'settlementTimedOut'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "settlementTimedOut",
  "timestamp": "timestamp6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

