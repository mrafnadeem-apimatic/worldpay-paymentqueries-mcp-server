
# Payment Instrument 2

An object that contains information about the payment type.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrument2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type5 \| undefined`](../../doc/models/type-5.md) | Optional | An object that contains information about the payment type. |
| `card` | [`Card3 \| undefined`](../../doc/models/card-3.md) | Optional | An object that contains information about the card used. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "card/networkToken+googlepay",
  "card": {
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
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

