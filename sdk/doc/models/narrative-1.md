
# Narrative 1

An object that contains identification and further details of the merchant.

*This model accepts additional fields of type unknown.*

## Structure

`Narrative1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `line1` | `string \| undefined` | Optional | First line of text that appears on your customer's statement. |
| `line2` | `string \| undefined` | Optional | Second line of text that appears on your customer's statement. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "line1": "line12",
  "line2": "line24",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

