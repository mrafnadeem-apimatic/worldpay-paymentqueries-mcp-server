
# Issuer

An object containing information returned by the issuer.

*This model accepts additional fields of type unknown.*

## Structure

`Issuer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationCode` | `string` | Required | A code returned by the card issuer for a successful authorization. Used in reconciliation and dispute management.<br><br>**Constraints**: *Pattern*: `^[a-zA-Z0-9]+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "authorizationCode": "T31306",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

