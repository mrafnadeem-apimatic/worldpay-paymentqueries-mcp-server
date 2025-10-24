
# Scheme

An object containing information returned by the card scheme.

*This model accepts additional fields of type unknown.*

## Structure

`Scheme`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reference` | `string` | Required | The reference returned by the scheme for this particular payment authorization. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "reference": "MCCOLXT1C0104  ",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

