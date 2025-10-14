
# Links 2

link to retrieveByPaymentId.

*This model accepts additional fields of type unknown.*

## Structure

`Links2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `self` | [`Self2`](../../doc/models/self-2.md) | Required | Self link to retrieveByPaymentId. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "self": {
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
}
```

