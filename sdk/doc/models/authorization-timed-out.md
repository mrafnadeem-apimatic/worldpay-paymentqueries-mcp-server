
# Authorization Timed Out

*This model accepts additional fields of type unknown.*

## Structure

`AuthorizationTimedOut`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `eventName` | `string` | Required, Constant | Your authorization request timed out.<br><br>**Value**: `'authorizationTimedOut'` |
| `timestamp` | `string \| undefined` | Optional | The ISO 8601 date-time at which the event was created. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "eventName": "authorizationTimedOut",
  "timestamp": "timestamp2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

