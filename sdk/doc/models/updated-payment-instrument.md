
# Updated Payment Instrument

The payment instrument supplied in the authorization request.

*This model accepts additional fields of type unknown.*

## Structure

`UpdatedPaymentInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type3 \| undefined`](../../doc/models/type-3.md) | Optional | The type of payment instrument supplied in the authorization request. |
| `card` | [`Card1 \| undefined`](../../doc/models/card-1.md) | Optional | An object that contains information about the card used. |
| `accountUpdaterMessage` | [`AccountUpdaterMessage \| undefined`](../../doc/models/account-updater-message.md) | Optional | Details on the type of payment instrument update. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "card/networkToken",
  "card": {
    "number": {
      "cardBin": "cardBin8",
      "last4Digits": "last4Digits2",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "expiryDate": {
      "month": 244,
      "year": 20,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "fundingType": "chargeCard",
    "brand": "brand0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "accountUpdaterMessage": "The merchant is not registered in the update program",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

