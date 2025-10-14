
# Authorization Refused

*This model accepts additional fields of type unknown.*

## Structure

`AuthorizationRefused`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your authorization request was refused by the card issuer.<br><br>**Value**: `'authorizationRefused'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `outcome` | [`Outcome1 \| undefined`](../../doc/models/outcome-1.md) | Optional | Outcome of the event. For every requested event there can be a successful or refused event outcome. |
| `code` | `string \| undefined` | Optional | The response code, used to identify the refusal reason. |
| `description` | `string \| undefined` | Optional | The description of the refusal reason. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "authorizationRefused",
  "code": "65",
  "description": "Authentication Requested",
  "timestamp": "timestamp2",
  "outcome": "refused",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

