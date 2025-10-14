
# Settlement Failed

*This model accepts additional fields of type unknown.*

## Structure

`SettlementFailed`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your settlement request failed.<br><br>**Value**: `'settlementFailed'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "settlementFailed",
  "timestamp": "timestamp2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

