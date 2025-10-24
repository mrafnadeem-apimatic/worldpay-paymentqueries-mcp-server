
# Card 3

An object that contains information about the card used.

*This model accepts additional fields of type unknown.*

## Structure

`Card3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | [`Number3 \| undefined`](../../doc/models/number-3.md) | Optional | An object that contains information about the card number. |
| `brand` | `unknown \| undefined` | Optional | An object that contains information about the brand. The brand values can be Visa, Mastercard etc. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "number": {
    "last4Digits": "last4Digits2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "brand": {
    "key1": "val1",
    "key2": "val2"
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

