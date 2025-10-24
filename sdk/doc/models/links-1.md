
# Links 1

links to the pages.

*This model accepts additional fields of type unknown.*

## Structure

`Links1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `self` | [`Self1`](../../doc/models/self-1.md) | Required | Self link to the page. |
| `next` | [`Next \| undefined`](../../doc/models/next.md) | Optional | Next page link if the response contains more pages. |
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
}
```

