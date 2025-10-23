
# Embedded 1

## Structure

`Embedded1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payments` | [`Payment1[] \| undefined`](../../doc/models/payment-1.md) | Optional | Array of payments. |

## Example (as JSON)

```json
{
  "payments": [
    {
      "lastEvent": "lastEvent2",
      "paymentInstrument": {
        "type": "card/networkToken",
        "card": {
          "number": {
            "last4Digits": "last4Digits2"
          },
          "brand": {
            "key1": "val1",
            "key2": "val2"
          }
        }
      },
      "value": {
        "amount": 18,
        "currency": "currency2"
      }
    },
    {
      "lastEvent": "lastEvent2",
      "paymentInstrument": {
        "type": "card/networkToken",
        "card": {
          "number": {
            "last4Digits": "last4Digits2"
          },
          "brand": {
            "key1": "val1",
            "key2": "val2"
          }
        }
      },
      "value": {
        "amount": 18,
        "currency": "currency2"
      }
    }
  ]
}
```

