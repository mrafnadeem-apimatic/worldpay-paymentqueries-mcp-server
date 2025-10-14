
# Value 1

An object that contains the amount and currency requested for refund.

*This model accepts additional fields of type unknown.*

## Structure

`Value1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`number`](../../doc/models/number.md) | Required | This is a whole number including the currency exponent (e.g. GBP has an exponent of 2, so for £2.50 supply:`250`). |
| `currency` | `string` | Required | The 3 digit currency code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "amount": 214,
  "currency": "currency2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

