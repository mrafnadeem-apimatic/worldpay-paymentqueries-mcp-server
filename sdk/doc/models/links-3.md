
# Links 3

Self link and next action links.The Next action links are dependent on the lastEvent, refer to 'query for historical payments Response' section for more details.

## Structure

`Links3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `self` | [`Self`](../../doc/models/self.md) | Required | Self link to the page. |
| `paymentsCancel` | [`PaymentsCancel \| undefined`](../../doc/models/payments-cancel.md) | Optional | Next action links. |
| `paymentsSettle` | [`PaymentsSettle \| undefined`](../../doc/models/payments-settle.md) | Optional | Next action links. |
| `paymentsPartialSettle` | [`PaymentsPartialSettle \| undefined`](../../doc/models/payments-partial-settle.md) | Optional | Next action links. |

## Example (as JSON)

```json
{
  "self": {
    "href": "href0"
  },
  "payments:cancel": {
    "href": "href6"
  },
  "payments:settle": {
    "href": "href6"
  },
  "payments:partialSettle": {
    "href": "href0"
  }
}
```

