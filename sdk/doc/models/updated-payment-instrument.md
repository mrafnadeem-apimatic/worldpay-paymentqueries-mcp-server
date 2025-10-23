
# Updated Payment Instrument

The payment instrument supplied in the authorization request.

## Structure

`UpdatedPaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type3Enum \| undefined`](../../doc/models/type-3-enum.md) | Optional | The type of payment instrument supplied in the authorization request. |
| `card` | [`Card1 \| undefined`](../../doc/models/card-1.md) | Optional | An object that contains information about the card used. |
| `accountUpdaterMessage` | [`AccountUpdaterMessageEnum \| undefined`](../../doc/models/account-updater-message-enum.md) | Optional | Details on the type of payment instrument update. |

## Example (as JSON)

```json
{
  "type": "card/networkToken",
  "card": {
    "number": {
      "cardBin": "cardBin8",
      "last4Digits": "last4Digits2"
    },
    "expiryDate": {
      "month": 244,
      "year": 20
    },
    "fundingType": "chargeCard",
    "brand": "brand0"
  },
  "accountUpdaterMessage": "The merchant is not registered in the update program"
}
```

