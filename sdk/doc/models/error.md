
# Error

All Failed events return error object with name and message.

*This model accepts additional fields of type unknown.*

## Structure

`Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Name \| undefined`](../../doc/models/name.md) | Optional | Example values are, |
| `message` | [`Message \| undefined`](../../doc/models/message.md) | Optional | Example values are, |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "currencyIsNotSupported",
  "message": "Currency not supported",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

