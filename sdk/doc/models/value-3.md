
# Value 3

An object that contains payment amount and currency.

## Structure

`Value3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`number`](../../doc/models/number.md) | Required | This is a whole number including the currency exponent (e.g. GBP has an exponent of 2, so for £2.50 supply:`250`). |
| `currency` | `string` | Required | The 3 digit currency code. |

## Example (as JSON)

```json
{
  "amount": 246,
  "currency": "currency0"
}
```

