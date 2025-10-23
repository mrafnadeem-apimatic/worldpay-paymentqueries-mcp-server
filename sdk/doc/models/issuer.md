
# Issuer

An object containing information returned by the issuer.

## Structure

`Issuer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authorizationCode` | `string` | Required | A code returned by the card issuer for a successful authorization. Used in reconciliation and dispute management.<br><br>**Constraints**: *Pattern*: `^[a-zA-Z0-9]+$` |

## Example (as JSON)

```json
{
  "authorizationCode": "T31306"
}
```

