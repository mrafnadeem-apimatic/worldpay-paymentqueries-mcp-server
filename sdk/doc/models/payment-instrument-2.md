
# Payment Instrument 2

An object that contains information about the payment type.

## Structure

`PaymentInstrument2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type5Enum \| undefined`](../../doc/models/type-5-enum.md) | Optional | An object that contains information about the payment type. |
| `card` | [`Card3 \| undefined`](../../doc/models/card-3.md) | Optional | An object that contains information about the card used. |

## Example (as JSON)

```json
{
  "type": "card/networkToken+googlepay",
  "card": {
    "number": {
      "last4Digits": "last4Digits2"
    },
    "brand": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

