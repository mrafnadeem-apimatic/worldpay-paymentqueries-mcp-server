
# Narrative

The text that appears on your customer's statement. Used to identify the merchant.

*This model accepts additional fields of type unknown.*

## Structure

`Narrative`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `line1` | `string` | Required | The first line of the narrative which appears on your customer's statement (24 characters max. If character is not supported it is replaced with a space). |
| `line2` | `string \| undefined` | Optional | Additional details about the payment e.g. order number, telephone number. |
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

