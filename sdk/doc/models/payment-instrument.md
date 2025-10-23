
# Payment Instrument

The payment instrument supplied in the authorization request.

## Structure

`PaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type2Enum \| undefined`](../../doc/models/type-2-enum.md) | Optional | The type of payment instrument supplied in the authorization request. |
| `card` | [`Card \| undefined`](../../doc/models/card.md) | Optional | An object that contains information about the card used. |

## Example (as JSON)

```json
{
  "type": "card/networkToken+googlepay",
  "card": {
    "number": {
      "cardBin": "cardBin8",
      "last4Digits": "last4Digits2"
    },
    "category": "commercial",
    "countryCode": "countryCode8",
    "expiryDate": {
      "month": 244,
      "year": 20
    },
    "issuerName": "issuerName6"
  }
}
```

