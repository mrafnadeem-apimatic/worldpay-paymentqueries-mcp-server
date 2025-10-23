
# Pq Querybydaterange 200 Response

## Structure

`PqQuerybydaterange200Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | links to the pages. |
| `embedded` | [`Embedded`](../../doc/models/embedded.md) | Required | - |

## Example (as JSON)

```json
{
  "_links": {
    "self": {
      "href": "href0"
    },
    "next": {
      "href": "href4"
    }
  },
  "_embedded": {
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
      }
    ]
  }
}
```

