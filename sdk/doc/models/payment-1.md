
# Payment 1

*This model accepts additional fields of type unknown.*

## Structure

`Payment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `lastEvent` | `string \| undefined` | Optional | The last event of a payment. Possible event values are:<ul><li>`Authorized`</li><li>`Refused`</li><li>`Sent for Cancellation`</li><li>`Sent for Refund`</li><li>`Sent for Settlement`</li><li>`Unknown`</li></ul> |
| `paymentInstrument` | [`PaymentInstrument2 \| undefined`](../../doc/models/payment-instrument-2.md) | Optional | An object that contains information about the payment type. |
| `value` | [`Value3 \| undefined`](../../doc/models/value-3.md) | Optional | An object that contains payment amount and currency. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "lastEvent": "lastEvent2",
  "paymentInstrument": {
    "type": "card/networkToken",
    "card": {
      "number": {
        "last4Digits": "last4Digits2",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "brand": {
        "key1": "val1",
        "key2": "val2"
      },
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "value": {
    "amount": 18,
    "currency": "currency2",
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

