
# Error

All Failed events return error object with name and message.

## Structure

`Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`NameEnum \| undefined`](../../doc/models/name-enum.md) | Optional | Example values are, |
| `message` | [`MessageEnum \| undefined`](../../doc/models/message-enum.md) | Optional | Example values are, |

## Example (as JSON)

```json
{
  "name": "currencyIsNotSupported",
  "message": "Currency not supported"
}
```

