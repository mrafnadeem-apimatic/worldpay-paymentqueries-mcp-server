
# Payment Instrument

The payment instrument supplied in the authorization request.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type2 \| undefined`](../../doc/models/type-2.md) | Optional | The type of payment instrument supplied in the authorization request. |
| `card` | [`Card \| undefined`](../../doc/models/card.md) | Optional | An object that contains information about the card used. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "card/networkToken+googlepay",
  "card": {
    "number": {
      "cardBin": "cardBin8",
      "last4Digits": "last4Digits2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "category": "commercial",
    "countryCode": "countryCode8",
    "expiryDate": {
      "month": 244,
      "year": 20,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "issuerName": "issuerName6",
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

