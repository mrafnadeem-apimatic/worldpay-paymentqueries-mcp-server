
# Number 3

An object that contains information about the card number.

*This model accepts additional fields of type unknown.*

## Structure

`Number3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `last4Digits` | `string \| undefined` | Optional | last4Digits of the card number used. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "last4Digits": "last4Digits6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

