
# Sale Requested

*This model accepts additional fields of type unknown.*

## Structure

`SaleRequested`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Worldpay has received your sale request.<br><br>**Value**: `'saleRequested'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "saleRequested",
  "timestamp": "timestamp6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

