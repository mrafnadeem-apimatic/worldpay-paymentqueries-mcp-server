
# Card

An object that contains information about the card used.

*This model accepts additional fields of type unknown.*

## Structure

`Card`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `number` | [`Number \| undefined`](../../doc/models/number.md) | Optional | An object that contains information about the card number. |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Optional | Whether the card is classed as a consumer card or a card for commercial use. |
| `countryCode` | `string \| undefined` | Optional | The [ISO 3166-1 Alpha-2 format](/products/reference/supported-countries-currencies#iso-country-codes) country code that the card was issued in. May return `N/A` where the country is unknown.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2`, *Pattern*: `^[A-Z]+$` |
| `expiryDate` | [`ExpiryDate \| undefined`](../../doc/models/expiry-date.md) | Optional | The expiry date of the card or network token (where the supplied paymentInstrument was `card/wallet+applepay`, `card/wallet+googlepay`, `card/networkToken`, `card/networkToken+applepay` or `card/networkToken+googlepay`). |
| `issuerName` | `string \| undefined` | Optional | The name of the card issuer. |
| `fundingType` | [`FundingType \| undefined`](../../doc/models/funding-type.md) | Optional | How the card is funded. |
| `brand` | `string \| undefined` | Optional | The card brand that the transaction was processed with. Sometimes referred to as the network or scheme. |
| `paymentAccountReference` | `string \| undefined` | Optional | The payment account reference (PAR) is a non-financial reference that uniquely identifies the underlying cardholder account. This allows you to correlate payments made from the same account with differing instruments (e.g. `card/plain` and `card/wallet+applepay`), where the same account funds the transaction. A PAR cannot be used to initiate a payment. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "countryCode": "GB",
  "issuerName": "AN ISSUING BANK LTD",
  "brand": "visa",
  "paymentAccountReference": "Q1HJZ28RKA1EBL470G9XYG90R5D3E",
  "number": {
    "cardBin": "cardBin8",
    "last4Digits": "last4Digits2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "category": "commercial",
  "expiryDate": {
    "month": 244,
    "year": 20,
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

