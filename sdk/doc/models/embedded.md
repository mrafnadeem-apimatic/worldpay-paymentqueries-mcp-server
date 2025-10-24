
# Embedded

*This model accepts additional fields of type unknown.*

## Structure

`Embedded`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payments` | [`Payment[] \| undefined`](../../doc/models/payment.md) | Optional | Array of payments within the date range. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "payments": [
    {
      "timestamp": "timestamp0",
      "paymentId": "paymentId4",
      "transactionReference": "transactionReference0",
      "narrative": {
        "line1": "line18",
        "line2": "line20",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "transactionType": "oneTime",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "timestamp": "timestamp0",
      "paymentId": "paymentId4",
      "transactionReference": "transactionReference0",
      "narrative": {
        "line1": "line18",
        "line2": "line20",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "transactionType": "oneTime",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "timestamp": "timestamp0",
      "paymentId": "paymentId4",
      "transactionReference": "transactionReference0",
      "narrative": {
        "line1": "line18",
        "line2": "line20",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      "transactionType": "oneTime",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

