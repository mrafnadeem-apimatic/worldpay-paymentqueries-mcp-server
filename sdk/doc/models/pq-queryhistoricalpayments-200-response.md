
# Pq Queryhistoricalpayments 200 Response

*This model accepts additional fields of type unknown.*

## Structure

`PqQueryhistoricalpayments200Response`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `links` | [`Links3`](../../doc/models/links-3.md) | Required | Self link and next action links.The Next action links are dependent on the lastEvent, refer to 'query for historical payments Response' section for more details. |
| `embedded` | [`Embedded1`](../../doc/models/embedded-1.md) | Required | - |
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
    "payments:cancel": {
      "href": "href6",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "payments:settle": {
      "href": "href6",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    "payments:partialSettle": {
      "href": "href0",
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
      },
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

