
# Expiry Date

The expiry date of the card or network token (where the supplied paymentInstrument was `card/wallet+applepay`, `card/wallet+googlepay`, `card/networkToken`, `card/networkToken+applepay` or `card/networkToken+googlepay`).

*This model accepts additional fields of type unknown.*

## Structure

`ExpiryDate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `month` | [`number \| undefined`](../../doc/models/number.md) | Optional | - |
| `year` | [`number \| undefined`](../../doc/models/number.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "month": 30,
  "year": 194,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

