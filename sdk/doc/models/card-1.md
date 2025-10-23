
# Card 1

An object that contains information about the card used.

## Structure

`Card1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | [`Number \| undefined`](../../doc/models/number.md) | Optional | An object that contains information about the card number. |
| `expiryDate` | [`ExpiryDate \| undefined`](../../doc/models/expiry-date.md) | Optional | The expiry date of the card or network token (where the supplied paymentInstrument was `card/wallet+applepay`, `card/wallet+googlepay`, `card/networkToken`, `card/networkToken+applepay` or `card/networkToken+googlepay`). |
| `fundingType` | [`FundingTypeEnum \| undefined`](../../doc/models/funding-type-enum.md) | Optional | How the card is funded. |
| `brand` | `string \| undefined` | Optional | The card brand that the transaction was processed with. Sometimes referred to as the network or scheme. |

## Example (as JSON)

```json
{
  "brand": "visa",
  "number": {
    "cardBin": "cardBin8",
    "last4Digits": "last4Digits2"
  },
  "expiryDate": {
    "month": 244,
    "year": 20
  },
  "fundingType": "credit"
}
```

