
# Cancellation Requested

*This model accepts additional fields of type unknown.*

## Structure

`CancellationRequested`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Worldpay has received your cancellation request.<br><br>**Value**: `'cancellationRequested'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "cancellationRequested",
  "timestamp": "timestamp8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

