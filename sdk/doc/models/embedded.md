
# Embedded

## Structure

`Embedded`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payments` | [`Payment[] \| undefined`](../../doc/models/payment.md) | Optional | Array of payments within the date range. |

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
        "line2": "line20"
      },
      "transactionType": "oneTime"
    },
    {
      "timestamp": "timestamp0",
      "paymentId": "paymentId4",
      "transactionReference": "transactionReference0",
      "narrative": {
        "line1": "line18",
        "line2": "line20"
      },
      "transactionType": "oneTime"
    },
    {
      "timestamp": "timestamp0",
      "paymentId": "paymentId4",
      "transactionReference": "transactionReference0",
      "narrative": {
        "line1": "line18",
        "line2": "line20"
      },
      "transactionType": "oneTime"
    }
  ]
}
```

