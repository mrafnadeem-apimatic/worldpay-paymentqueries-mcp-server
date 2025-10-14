
# Pq Querybydaterange 200 Response

*This model accepts additional fields of type unknown.*

## Structure

`PqQuerybydaterange200Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links1`](../../doc/models/links-1.md) | Required | links to the pages. |
| `embedded` | [`Embedded`](../../doc/models/embedded.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "_links": {
    "self": {
      "href": "href0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "next": {
      "href": "href4",
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
  "_embedded": {
    "payments": [
      {
        "timestamp": "timestamp0",
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
        "authorizationType": "authorization",
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      },
      {
        "timestamp": "timestamp0",
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
        "authorizationType": "authorization",
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
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

